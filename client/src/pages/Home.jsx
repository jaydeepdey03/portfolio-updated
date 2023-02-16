import Navbar from '../components/Navbar'
import About from './About'
import Mainbanner from './Mainbanner'
import Project from './Project'

const Home = () => {

    return (
        <div style={{ overflow: 'hidden' }} data-aos="fade-zoom-in">
            <>
                <Navbar />
                <Mainbanner />
                <About />
                <Project />
            </>

        </div>
    )
}

export default Home
