import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/About/AboutPage'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword'
import VerificationEmail from './pages/Auth/VerificationEmail/VerificationEmail'
import VerificationPhone from './pages/Auth/VerificationPhone/VerificationPhone'
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification-email" element={<VerificationEmail />} />
        <Route path="/verification-phone" element={<VerificationPhone />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  )
}

export default App
