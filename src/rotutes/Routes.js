import { createBrowserRouter } from 'react-router-dom';
import Error from '../components/404/Error';
import Home from '../components/HomePage/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Login/Signup';
import Blog from '../components/OtherPages/Blog/Blog';
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
                element: <PrivetRoute><Blog></Blog></PrivetRoute>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;