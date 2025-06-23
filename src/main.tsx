import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import CarManagement from './pages/CarManagement'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <div className="page-wrapper">
          <Home />
          <CarManagement />
        </div>
  </StrictMode>,
)
