import {wrapLoader} from '@/lib/wrapped-loader'
import {getConfig, LoginPage} from '@comenchi/admin'
import {AdminProvider, getUserHelpers} from '@comenchi/admin-sdk'
import {WithComenchiServerContext} from '@comenchi/admin/server'
import {LoaderFunctionArgs, redirect} from 'react-router'

export const loader = wrapLoader(
  async ({ctx}: WithComenchiServerContext<LoaderFunctionArgs>) => {
    const user = await getUserHelpers.prefetchQuery({
      queryClient: ctx.getQueryClient(),
      key: getUserHelpers.getQueryKey(),
      sdk: ctx.adminSdk,
    })
    if (!!user) {
      return redirect('/admin', {
        headers: await ctx.getHeaders(),
      })
    }
    return {}
  },
)

const Login = () => {
  return (
    <AdminProvider value={getConfig().context.getAdmin()}>
      <LoginPage />
    </AdminProvider>
  )
}
export default Login
