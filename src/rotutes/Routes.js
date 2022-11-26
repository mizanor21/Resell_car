import { createBrowserRouter } from 'react-router-dom';
import Error from '../components/404/Error';
import Home from '../components/HomePage/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Login/Signup';
import Blog from '../components/OtherPages/Blog/Blog';
import Dashboard from '../components/OtherPages/Dashboard/Dashboard';
import DashboardLayout from '../components/OtherPages/Dashboard/DashboardLayout';
import Products from '../components/OtherPages/Products/Products';
import Main from '../layouts/Main';
import PrivetRoute from './PrivetRoute/PrivetRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/products/:id',
                element: <PrivetRoute><Products></Products></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;