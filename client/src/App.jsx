import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Mainbanner from './pages/Mainbanner'
import Project from './pages/Project'

function App() {


  return (
    <div className='linear-gradient-main-bg'>
      <Navbar />
      <Mainbanner />
      <About />
      {/* <Project /> */}
    </div>
  )
}

export default App
