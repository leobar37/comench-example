import {wrapLoader} from '@/lib/wrapped-loader'
import {getConfig} from '@comenchi/admin'
import {WithComenchiServerContext} from '@comenchi/admin/server'
import {
  ComenchiProvider,
  OrderControllerProvider,
  QueueProvider,
  SearchController,
  UbigeoProvider,
} from '@comenchi/shop-sdk'
import {Outlet} from 'react-router'
import {Route} from './+types/layout'

export const loader = wrapLoader(
  async ({ctx}: WithComenchiServerContext<Route.LoaderArgs>) => {
    const comenchiShop = ctx.shopSdk
    const order = await comenchiShop.order.active()
    return {
      order,
      search: await comenchiShop.products.firstSearch(),
      menuCollections: await comenchiShop.collections
        .list({
          topLevelOnly: true,
        })
        .then((result) => result?.items ?? []),
    }
  },
)
export const Shop = ({loaderData}: Route.ComponentProps) => {

  return (
    <ComenchiProvider value={getConfig().context.getShopSdk()}>
      <OrderControllerProvider order={loaderData.order}>
        <SearchController firstSearch={loaderData?.search}>
          <QueueProvider>
            <UbigeoProvider>
              <Outlet />
            </UbigeoProvider>
          </QueueProvider>
        </SearchController>
      </OrderControllerProvider>
    </ComenchiProvider>
  )
}
export default Shop
