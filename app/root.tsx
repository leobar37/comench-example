import Prism from 'prismjs'
if (typeof globalThis.Prism === 'undefined') {
  globalThis.Prism = Prism
}
// top
import './components/registry'
import './lib/comenchi-admin'
import './lib/comenchi-shop'
import './widgets/models-registry'
// end top
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import "swiper/css";
dayjs.extend(relativeTime)

import {
  createActionPostPersister,
  getConfig,
  useDehydratedState,
  useGetAndPopulateSdksInfo,
} from '@comenchi/admin'
import {Toaster} from '@comenchi/ui'

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {useEffect, useState} from 'react'
import type {LinksFunction, LoaderFunctionArgs} from 'react-router'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  data,
  isRouteErrorResponse,
  useRouteLoaderData,
} from 'react-router'
import {PreventFlashOnWrongTheme, ThemeProvider} from 'remix-themes'
import type {Route} from './+types/root'
import {themeSessionResolver} from './sessions.server'
import styles from './tailwind.css?url'

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: styles},
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
      crossOrigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;700&family=Inter:wght@500;700;800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap',
      rel: 'stylesheet',
    },
  ]
}

export const loader = async ({request}: LoaderFunctionArgs) => {
  const {getTheme} = await themeSessionResolver(request)
  return data({
    ENV: getConfig().getClientEnv(),
    preview: false,
    theme: getTheme(),
  })
}

export default function AppWithProviders() {
  const dehydratedState = useDehydratedState()
  const {theme} = useRouteLoaderData('root')

  useGetAndPopulateSdksInfo()

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  )

  useEffect(() => {
    const contextConfig = getConfig().context
    createActionPostPersister(
      '/action/admin-session',
      contextConfig.getAdminSdk(),
    )
    createActionPostPersister(
      '/action/store-session',
      contextConfig.getShopSdk(),
    )
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <ThemeProvider themeAction="/actions/set-theme" specifiedTheme={theme}>
          <App />
        </ThemeProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  )
}

export function App() {
  const {ENV, theme: dataTheme} = useRouteLoaderData('root')
  return (
    <html lang="es" className={'light'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(dataTheme)} />
      </head>
      <body className="text-foreground bg-background">
        <Outlet />
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
      </body>
    </html>
  )
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
