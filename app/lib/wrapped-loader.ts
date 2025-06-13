import {createWrapLoader} from '@comenchi/admin/server'
import {adminSessionResolver, storeSessionResolver} from '../sdks-sessions'

export const wrapLoader = createWrapLoader({
  sessionResolver: {
    admin: adminSessionResolver,
    store: storeSessionResolver,
  },
})
