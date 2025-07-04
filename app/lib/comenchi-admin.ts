import {getConfig} from '@comenchi/admin'
import {ComenchiAdmin} from '@comenchi/admin-sdk'

const comenchiAdmin = new ComenchiAdmin({
  sdk: {
    apiUrl: getConfig().adminApiEndpoint,
    channelToken: getConfig().channelCode,
  },
})

getConfig().addAdminSdk(comenchiAdmin)
