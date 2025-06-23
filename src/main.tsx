import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <div className="page-wrapper">
          <Home />
        </div>
  </StrictMode>,
)
