import "@fontsource/plus-jakarta-sans"; // Defaults to weight 400
import "@fontsource/plus-jakarta-sans/700.css"; // Optional: Add bold weight
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
