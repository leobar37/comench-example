import { wrapLoader } from '@/lib/wrapped-loader'
import { CheckoutPage, NavBar } from '@comenchi/shop'
import { checkoutAction, checkoutLoader } from '@comenchi/shop/server'
import { Fragment } from 'react/jsx-runtime'
import type { Route } from './+types/home'

export const loader = wrapLoader(checkoutLoader)

export const action = wrapLoader(checkoutAction)

export default function Checkout({loaderData}: Route.ComponentProps) {
  return (
    <Fragment>
      <NavBar />
      <div className="mt-28 text-foreground">
        <CheckoutPage />
      </div>
    </Fragment>
  )
}
