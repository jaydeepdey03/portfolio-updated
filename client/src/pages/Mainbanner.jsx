import './Mainbanner.css'
import Typewriter from 'typewriter-effect'

const Mainbanner = () => {
    return (
        <div className='flex flex-col space-y-10 sm:flex-row justify-center sm:justify-around mt-3 items-center'>
            <div className='flex flex-col space-y-5 text-box '>
                <div className='flex sm:items-start flex-col items-center'>
                    <p className='font-bold text-gray-700 uppercase text-xl ml-3'>Hello, I am</p>
                    <div className='flex p-4 pl-0 name1 text-5xl sm:text-6xl font-bold'>
                        <p className=''>Jaydeep Dey</p>
                    </div>
                </div>
                <div className='flex font-semibold text-2xl ml-1'>
                    <div className=''>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                strings: [
                                    "Web Developer",
                                    "Software Engineer"
                                ],
                            }}
                        />
                    </div>
                    <p className=''>by Passion</p>
                </div>
            </div>
            <img src="/bitmoji.png" className='object-cover h-[30rem]' alt="" />
        </div>
    )
}

export default Mainbanner
