import React from 'react'
import { authRoles } from '../../auth/authRoles'

const userRoutes = [
    {
        path: '/users',
        component: React.lazy(() => import('./users')),
        auth: authRoles.sa,
    },
    // {
    //     path: '/agent/create',
    //     component: React.lazy(() => import('./CreateAgent')),
    //     auth: authRoles.sa,
    // }
]

export default userRoutes