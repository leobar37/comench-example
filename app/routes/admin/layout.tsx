import {wrapLoader} from '@/lib/wrapped-loader'
import {
  AdminLayout,
  getConfig,
  useGetAndPopulateSdksInfo,
} from '@comenchi/admin'
import {
  AdminProvider,
  getUserHelpers,
  useUpdateWidgets,
  useWidgets,
} from '@comenchi/admin-sdk'
import {WithComenchiServerContext} from '@comenchi/admin/server'
import {Button} from '@comenchi/ui'
import {useQueryClient} from '@tanstack/react-query'
import {LoaderFunctionArgs, redirect} from 'react-router'

export const loader = wrapLoader(
  async ({ctx}: WithComenchiServerContext<LoaderFunctionArgs>) => {
    const user = await getUserHelpers.prefetchQuery({
      queryClient: ctx.getQueryClient(),
      key: getUserHelpers.getQueryKey(),
      sdk: ctx.adminSdk,
    })
    if (!user) {
      return redirect('/admin/login')
    }
    return {}
  },
)

const UpdateWidgetsButton = () => {
  const widgets = useWidgets()
  const updateWidgets = useUpdateWidgets()
  const queryClient = useQueryClient()
  return (
    <div
      className="fixed right-2 bottom-5 z-50"
      onClick={() => {
        updateWidgets.mutate(getConfig().widgets.getFormattedWidgets())
        queryClient.invalidateQueries({
          exact: false,
          queryKey: widgets.queryKey,
        })
      }}
    >
      <Button isLoading={updateWidgets.isPending}>update widgets</Button>
    </div>
  )
}

const Admin = () => {
  useGetAndPopulateSdksInfo()
  // const currentChannel = useAtomValue(currentAdminChannel$)
  // useEffect(() => {
  //   if (currentChannel) {
  //     const adminSdk = getConfig().context.getAdminSdk()
  //     adminSdk.widgetApi
  //       .patchWidgets(getConfig().widgets.getFormattedWidgets())
  //       .then(() => {
  //         console.log('success sync')
  //       })
  //       .catch((err) => {
  //         console.log('err', err)
  //       })
  //   }
  // }, [currentChannel])
  

  return (
    <AdminProvider value={getConfig().context.getAdmin()}>
      <AdminLayout />
      {/* <UpdateWidgetsButton /> */}
    </AdminProvider>
  )
}

export default Admin
