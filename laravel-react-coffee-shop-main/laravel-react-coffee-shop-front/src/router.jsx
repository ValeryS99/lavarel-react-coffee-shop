import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import NotFound from './views/NotFound';
import Main from './views/Main';
import User from './views/User';
import AuthLayout from './components/AuthLayout';
import MainLayout from './components/MainLayout';
import UserLayout from './components/UserLayout';
import MenuLayout from './components/MenuLayout';
import CoffeeMenu from './views/CoffeeMenu';
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/menu/coffee" replace />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                index: true,
                element: <Navigate to="login" replace />
            }
        ]
    },
    {
        path: '/user',
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <User />
            }
        ]
    },
    {
        path: '/menu',
        element: <MainLayout />,
        children: [
            {
                path: 'coffee',
                element: <CoffeeMenu />
            },
            {
                index: true,
                element: <Navigate to="coffee" replace />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]
);

export default router;
