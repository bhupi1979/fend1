import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navbartop } from './Navbartop.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.min.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Navbartop/>
  <App/>
  </StrictMode>,
)
