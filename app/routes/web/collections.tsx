import {wrapLoader} from '@/lib/wrapped-loader'
import {WithComenchiServerContext} from '@comenchi/admin/server'
import {CollectionsPage, NavBar} from '@comenchi/shop'

import {Fragment} from 'react/jsx-runtime'
import {Route} from './+types/collections'

export const loader = wrapLoader(
  async ({params, ctx}: WithComenchiServerContext<Route.LoaderArgs>) => {
    const {id} = params
    const comenchiShop = ctx.shopSdk
    return {
      id,
      collection: await comenchiShop.collections.getWithProducts({
        id: id,
      }),
    }
  },
)
export default function Page() {
  return (
    <Fragment>
      <NavBar />
      <CollectionsPage />
    </Fragment>
  )
}
