import {getConfig} from '@comenchi/admin'
import {ComenchiShop} from '@comenchi/shop-sdk'

const comenchiShop = new ComenchiShop({
  apiUrl: getConfig().shopApiEndpoint,
  channelToken: 'alfk-token',
})

getConfig().addShopSdk(comenchiShop)
