import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';
import Loading from './components/Loading';
import { EFallback } from './components/Errors';

//@ts-expect-error Can't resolve 'usermanagement/UserManager'
const UserManager = React.lazy(() => import('usermanagement/UserManager'))
//@ts-expect-error Can't resolve 'usermanagement/UserManager'
const TaskManager = React.lazy(() => import('taskmanager/TaskManager'))
const Landing = React.lazy(() => import('./pages/Landing'))
const Responses = React.lazy(() => import('./pages/Responses'))

export const paths = {
    ROOT: "/",
    USER_MANAGER: "user_management",
    TASK_MANAGER: "task_manager",
    REPORTS: "reports",
    RESPONSES: "responses"
}

export const fallbackElement = <Loading />

export const routes = [
    {
        path: paths.ROOT,
        element: (<Suspense fallback={fallbackElement}><Landing /></Suspense>)
    },
    {
        path: paths.USER_MANAGER,
        element: (<Suspense fallback={fallbackElement}><UserManager /></Suspense>)
    },
    {
        path: paths.TASK_MANAGER,
        element: (<Suspense fallback={fallbackElement}><TaskManager /></Suspense>)
    },
    {
        path: paths.REPORTS,
        element: <h2>Reports</h2>
    },
    {
        path: paths.RESPONSES,
        element: <Responses />
    },
]

export const allowedRoutes = Object.values(paths)

export const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <EFallback />,
        children: routes,
    },
])

