import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import About from './pages/About.jsx'
import Policy from './pages/Policy.jsx'
import Contact from './pages/Contact.jsx'
import Pagenotfound from './pages/Pagenotfound.jsx'
import RegisterPage from './pages/Auth/RegisterPage.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </>
  )
}

export default App
