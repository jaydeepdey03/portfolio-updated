import { useEffect, useState } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Loader from './components/Loader';



function App() {
  const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        AOS.init()
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [])


  return (
    <div>
      {loading ? <Loader /> : <Home />}
    </div>
  )
}

export default App
