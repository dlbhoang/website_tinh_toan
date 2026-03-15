import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CourseSections from './components/CourseSections'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Hero />
      <Features />
      <CourseSections />
      <Footer />
    </div>
  )
}

export default App
