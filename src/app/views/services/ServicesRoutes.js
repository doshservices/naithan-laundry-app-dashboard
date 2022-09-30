import React from 'react'
import { authRoles } from '../../auth/authRoles'

const servicesRoutes = [
    {
        path: '/services',
        component: React.lazy(() => import('./Services')),
        auth: authRoles.sa,
    },
    {
        path: '/service/create',
        component: React.lazy(() => import('./CreateService')),
        auth: authRoles.sa,
    },
    {
        path: '/service/edit/:id',
        component: React.lazy(() => import('./EditService')),
        auth: authRoles.sa,
    }
]

export default servicesRoutes