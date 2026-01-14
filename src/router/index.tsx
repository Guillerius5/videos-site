
import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login.tsx';
import {DashBoard} from "../pages/DashBoard.tsx";
import Stadistics from "../pages/Stadistics.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/dashBoard',
        element: <DashBoard />,
    },

    {
        path: '/stadistics',
        element: <Stadistics />,
    },
]);