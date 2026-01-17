
import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login.tsx';
import {DashBoard} from "../pages/DashBoard.tsx";
import Stadistics from "../pages/Stadistics.tsx";
import SubirVideo from "../pages/SubirVideo.tsx";


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
    {
        path: '/subir-video',
        element: <SubirVideo />,
    },
]);