import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import "./assets/styles/variables.css"
import "./assets/styles/global.css"
import NavBar from './components/NavBar/NavBar'

export default function App() {
  return (
    <> 
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
  
}
