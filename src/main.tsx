import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Estilos de Mantine
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css'; // ✅ Los estilos están bien

import { MantineProvider } from '@mantine/core';


import { Notifications } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider>
            {/* Ahora sí funcionará porque lo hemos importado arriba */}
            <Notifications position="top-right" />
            <App />
        </MantineProvider>
    </React.StrictMode>,
)