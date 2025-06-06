import {index, layout, route, type RouteConfig} from '@react-router/dev/routes'

export default [
  // web
  layout('routes/web/layout.tsx', [
    index('routes/web/home.tsx'),
    route('/pr/:id', 'routes/web/product.tsx'),
    route('/checkout', 'routes/web/checkout.tsx'),
    route('/collection/:id', 'routes/web/collections.tsx'),
    route('/checkout/success', 'routes/web/success-checkout.tsx'),
    route('/action/set-theme', './routes/resource/set-theme.ts'),
  ]),
  //  session cookie actions
  route('/action/admin-session', './routes/resource/set-admin-session.ts'),
  route('/action/store-session', './routes/resource/set-store-session.ts'),
  // admin
  route('/admin/login', 'routes/admin/login.tsx'),
  layout('routes/admin/layout.tsx', [
    route('/admin', 'routes/admin/dashboard.tsx'),
    // products
    route('/admin/create-product', 'routes/admin/products/create-product.tsx'),
    route('/admin/products', 'routes/admin/products/products.tsx'),
    route('/admin/products/:id', 'routes/admin/products/edit-product.tsx'),
    // collections
    route('/admin/collections', 'routes/admin/collections/collections.tsx'),
    route(
      '/admin/create-collection',
      'routes/admin/collections/create-collection.tsx',
    ),
    route(
      '/admin/collections/:id',
      'routes/admin/collections/edit-collection.tsx',
    ),
    // orders
    route('/admin/orders', 'routes/admin/orders/orders.tsx'),
    route(`/admin/orders/:id`, 'routes/admin/orders/order.tsx'),
    // builder
    route('/admin/builder/:groupId', 'routes/admin/widget.tsx'),
    route('/admin/pages', 'routes/admin/pages.tsx'),
    route('/admin/pages/:id', 'routes/admin/page.tsx'),
    route('/admin/groups', 'routes/admin/widget-group.tsx'),

    // profile
    route('/admin/profile', 'routes/admin/profile/profile.tsx'),
  ]),
] satisfies RouteConfig
