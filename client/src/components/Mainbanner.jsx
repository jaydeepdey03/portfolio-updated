import './Mainbanner.css'
import Typewriter from 'typewriter-effect'

const Mainbanner = () => {
    return (
        <div className='flex flex-col'>
            <div className="container">
                <p className='text-2xl font-semibold ml-2'>Hello, I am</p>
                <p className='text-6xl font-bold'>Jaydeep Dey</p>
                <div className='flex mt-7 font-semibold text-xl'>
                    <div className='text-red-500'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                strings: [
                                    "Web Developer",
                                    "Software Engineer"
                                ],
                                cursor: "|",
                            }}
                        />
                    </div>
                    <p>by Passion</p>
                </div>
            </div>
            <img src="" alt="" />
        </div>
    )
}

export default Mainbanner
