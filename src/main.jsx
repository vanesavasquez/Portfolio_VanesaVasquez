import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Experience from './pages/Experience.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import NotFound from './pages/NotFound.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="proyectos/:slug" element={<ProjectDetail />} />
          <Route path="experiencia" element={<Experience />} />
          <Route path="sobre-mi" element={<About />} />
          <Route path="resumen" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
