import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <NavBar/> */}
    <App />
    {/* <Footer/> */}
    </BrowserRouter>
   
  </StrictMode>,
)
