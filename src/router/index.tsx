
import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login.tsx';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },

]);