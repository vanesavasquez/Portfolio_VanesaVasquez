import { Outlet } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageProvider.jsx'
import Navbar from './components/Navbar.jsx'
import BottomNav from './components/BottomNav.jsx'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <BottomNav />
    </LanguageProvider>
  )
}

export default App
