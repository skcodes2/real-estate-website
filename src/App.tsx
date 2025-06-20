import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Guide from './pages/Guide'
import "./assets/styles/variables.css"
import "./assets/styles/global.css"
import NavBar from './components/NavBar/NavBar'
import Properties from './pages/Properties'
import PropertyDetails from './pages/PropertyDetails'
import ScrollToTop from './ScrollToTop'
import { LanguageProvider } from './hooks/useLanguage'


export default function App() {
  return (
    <> 
      <LanguageProvider>

    <NavBar />
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:address" element={<PropertyDetails />} />

    </Routes>
      </LanguageProvider>

    </>
  )
  
}
