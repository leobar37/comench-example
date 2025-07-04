import {wrapLoader} from '@/lib/wrapped-loader'
import {type WithComenchiServerContext} from '@comenchi/admin/server'
import {NavBar, Widgets} from '@comenchi/shop'
import {Fragment} from 'react/jsx-runtime'
import type {Route} from './+types/home'
import { redirect } from 'react-router'

export const loader = wrapLoader(async function ({
  ctx,
}: WithComenchiServerContext<Route.LoaderArgs>) {
  try {
    const pageData = await ctx.shopSdk.widgets.getPageByPath('/')
    return {
      pageData,
    }
  } catch (error) {
    return redirect('/404')
  }
})

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <div className="mt-32 md:mt-20">
        <Widgets groupName="homeWidgets" />
      </div>
    </Fragment>
  )
}
