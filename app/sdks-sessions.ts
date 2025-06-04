import {createAuthComenchiResolver} from '@comenchi/admin/server'
import {InfoPersist} from '@comenchi/common'
import {createCookieSessionStorage} from 'react-router'

const adminSession = createCookieSessionStorage<InfoPersist>({
  cookie: {
    name: '___admin-sdk-session',
    secrets: ['hello-secret-admin'],
    path: '/',
    sameSite: 'lax',
  },
})

export const adminSessionResolver = createAuthComenchiResolver(adminSession)

const storeSession = createCookieSessionStorage<InfoPersist>({
  cookie: {
    name: '___store-sdk-session',
    secrets: ['hello-secret-store'],
    path: '/',
    sameSite: 'lax',
  },
})

export const storeSessionResolver = createAuthComenchiResolver(storeSession)
