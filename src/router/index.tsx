
import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login.tsx';
import {DashBoard} from "../pages/DashBoard.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/dashBoard',
        element: <DashBoard />,
    },

]);