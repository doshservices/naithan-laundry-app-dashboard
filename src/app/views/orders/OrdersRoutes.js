import React from 'react'
import { authRoles } from '../../auth/authRoles'

const OrdersRoutes = [
    {
        path: '/orders',
        component: React.lazy(() => import('./Orders')),
        auth: authRoles.sa,
    },
    {
        path: '/service/create',
        component: React.lazy(() => import('./CreateService')),
        auth: authRoles.sa,
    },
    {
        path: '/single-orders',
        component: React.lazy(() => import('./OrdersForAgents')),
        auth: authRoles.sa,
    },
]

export default OrdersRoutes