import { createRoot } from 'react-dom/client'
//This is used to connect React with the HTML page.

import './index.css'
//css will apply throughout the application.

import App from './App.tsx'
//This imports the main component of your application.
//contains all pages/routes/components.

import {BrowserRouter} from 'react-router-dom'
//It enables routing/navigation in React.
//React routes will not work.
//BrowserRouter enables client-side routing in React applications. It allows navigation between pages without refreshing the browser by managing the URL using browser history API.

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
