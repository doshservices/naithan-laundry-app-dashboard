import React from 'react'
import { authRoles } from '../../auth/authRoles'

const adminRoutes = [
    {
        path: '/admins',
        component: React.lazy(() => import('./Admins')),
        auth: authRoles.sa,
    },
    {
        path: '/admin/create',
        component: React.lazy(() => import('./CreateAdmin')),
        auth: authRoles.sa,
    }
]

export default adminRoutes