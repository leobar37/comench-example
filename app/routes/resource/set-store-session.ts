import {storeSessionResolver} from '../../sdks-sessions'
import {createComenchiAction} from '@comenchi/admin/server'

export const action = createComenchiAction(storeSessionResolver)
