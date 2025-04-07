import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Header.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  return (
    <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
    </Router>

  )
}

export default App
