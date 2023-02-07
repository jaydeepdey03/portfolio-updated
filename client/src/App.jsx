import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Mainbanner from './pages/Mainbanner'

function App() {


  return (
    <div className='linear-gradient-main-bg'>
      <Navbar />
      <Mainbanner />
      <About />
    </div>
  )
}

export default App
