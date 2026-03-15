import { useState } from 'react'
import TopBar from './components/TopBar'
import TopNavbar from './components/TopNavbar'
import BottomNavbar from './components/BottomNavbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContentPage from './pages/ContentPage'
import './styles/global.css'

export default function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopBar />
      <TopNavbar activePage={activePage} setActivePage={setActivePage} />

      <main style={{ flex: 1 }}>
        {activePage === 'home'
          ? <HomePage setActivePage={setActivePage} />
          : <ContentPage page={activePage} setActivePage={setActivePage} />
        }
      </main>

      <BottomNavbar activePage={activePage} setActivePage={setActivePage} />
      <Footer setActivePage={setActivePage} />
    </div>
  )
}
