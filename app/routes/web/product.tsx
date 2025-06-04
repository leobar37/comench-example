import { wrapLoader } from '@/lib/wrapped-loader'
import { WithComenchiServerContext } from '@comenchi/admin/server'
import { NavBar, ProductPage } from '@comenchi/shop'
import {
  ProductController
} from '@comenchi/shop-sdk'
import type { Route } from './+types/product'

export const loader = wrapLoader(
  async ({params, ctx}: WithComenchiServerContext<Route.LoaderArgs>) => {
    const {slug} = params
    const comenchiShop = ctx.shopSdk
    const product = await comenchiShop.products.get({
      slug: slug,
    })
    return {
      product,
    }
  },
)

export default function Home({loaderData}: Route.ComponentProps) {
  return (
    <ProductController product={loaderData.product}>
      <NavBar />
      <div className="mt-24">
        <ProductPage />
      </div>
    </ProductController>
  )
}
