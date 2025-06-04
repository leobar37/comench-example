import {adminSessionResolver} from '../../sdks-sessions'
import {createComenchiAction} from '@comenchi/admin/server'

export const action = createComenchiAction(adminSessionResolver)
