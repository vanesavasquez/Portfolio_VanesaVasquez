import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import BottomNav from './components/BottomNav.jsx'
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <BottomNav />
    </>
  )
}

export default App
