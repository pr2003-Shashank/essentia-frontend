import { BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Header.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  return (
    <Router>
    <div className='main-container'>
      <Navbar/>
        <AppRoutes/>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
