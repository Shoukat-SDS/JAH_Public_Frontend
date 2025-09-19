// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// CSS Libraries
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
