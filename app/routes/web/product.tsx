import { wrapLoader } from '@/lib/wrapped-loader'
import { NavBar, ProductPage } from '@comenchi/shop'
import { ProductController } from '@comenchi/shop-sdk'
import { getProductLoader } from '@comenchi/shop/server'
import type { Route } from './+types/product'

export const loader = wrapLoader(getProductLoader)

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
