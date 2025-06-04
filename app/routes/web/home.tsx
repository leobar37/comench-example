import { wrapLoader } from '@/lib/wrapped-loader'
import { type WithComenchiServerContext } from '@comenchi/admin/server'
import { NavBar, Widgets } from '@comenchi/shop'
import { Fragment } from 'react/jsx-runtime'
import type { Route } from './+types/home'

export const loader = wrapLoader(async function ({
  ctx,
}: WithComenchiServerContext<Route.LoaderArgs>) {
  const pageData = await ctx.shopSdk.widgets.getPageByPath('/')
  return {
    pageData,

  }
})

export default function Home({loaderData}: Route.ComponentProps) {
  return (
    <Fragment>
      <NavBar />
      <div className="mt-32 md:mt-20">
        <Widgets groupName="homeWidgets" />
      </div>
    </Fragment>
  )
}
