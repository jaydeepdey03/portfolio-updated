import './Navbar.css'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-6 lg:mx-8 navbar">
            <p className="name2 text-2xl sm:text-3xl text-gray-700 tracking-wide">{`<jaydeep/>`}</p>
            <ul className="hidden lg:flex justify-end space-x-7 font-semibold text-gray-600 text-xl">
                <li className="list-items">Home</li>
                <li className="list-items">Resume</li>
                <li className="list-items">Skills</li>
                <li className="list-items">Contact</li>
            </ul>
            <div className="lg:hidden responsive-navbar">
                <svg width="51" height="51" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className='text-black'>
                    <path d="M21 10H7"></path>
                    <path d="M21 6H3"></path>
                    <path d="M21 14H3"></path>
                    <path d="M21 18H7"></path>
                </svg>
            </div>
        </div>
    )
}

export default Navbar
