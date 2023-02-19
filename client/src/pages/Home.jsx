import Navbar from '../components/Navbar'
import About from './About'
import Mainbanner from './Mainbanner'
import Project from './Project'
import Skill from './Skill'

const Home = () => {

    return (
        <div style={{ overflow: 'hidden' }} data-aos="fade-zoom-in">
            <>
                <Navbar />
                <Mainbanner />
                <About />
                <Project />
                <Skill />
            </>

        </div>
    )
}

export default Home
