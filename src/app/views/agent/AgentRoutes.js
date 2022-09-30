import React from 'react'
import { authRoles } from '../../auth/authRoles'

const agentRoutes = [
    {
        path: '/agents',
        component: React.lazy(() => import('./Agents')),
        auth: authRoles.sa,
    },
    {
        path: '/agent/create',
        component: React.lazy(() => import('./CreateAgent')),
        auth: authRoles.sa,
    }
]

export default agentRoutes