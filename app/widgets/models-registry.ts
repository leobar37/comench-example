import {
  definePage,
  defineProps,
  defineWidget,
  fields,
  getConfig,
} from '@comenchi/admin'
import './CollectionsGroups'
import { CollectionProductsWidget } from './collection-with-products'
import './hero/Hero'

getConfig().widgets.addPages(
  definePage({
    config: defineProps({
      homeWidgets: fields.widgetGroup({
        label: 'Widgets',
      }),
    }),
    name: 'home',
    path: '/',
  }),
)

getConfig().widgets.addWidgets(
  defineWidget({
    code: 'collectionProducts',
    name: 'Colleccción de productos',
    component: CollectionProductsWidget,
    config: defineProps({
      collection: fields.collection({
        label: 'Collección',
        includeProducts: true,
      }),
      title: fields.text({
        label: 'Titulo 2',
      }),
    }),
  }),
)
