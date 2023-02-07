import './About.css'

const About = () => {
    return (
        <div className="h-screen flex items-start justify-start flex-col space-y-10">
            <div className="title font-poppins">About</div>
            <div className='about-section flex p-[2rem] lg:space-x-10 lg:ml-20'>
                <img src="/photo_blank.png" className='photo' alt="" />
                <div className='text-xl flex space-y-3 flex-col font-poppins  font-light'>
                    <p className='text-slate-500'>About Me</p>
                    <p className='font-semibold text-4xl text-slate-700'>Introduction</p>
                    <p className='text-slate-400 text-lg text-justify max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta aliquid, tempore sequi commodi maiores. Eaque consequuntur, consectetur cum ab quibusdam fuga asperiores tenetur aut quod itaque, aliquid corporis numquam, officiis architecto repellat eos voluptates porro facere dolorum dignissimos eligendi deleniti rerum dicta. Eveniet sint facilis at illo? Illo quis ex deleniti exercitationem? At voluptatibus est accusamus. Tempora illo ad sunt commodi eos! Dolor harum odit repellendus numquam incidunt commodi nemo et, rerum laudantium tempore inventore accusamus, sequi iusto iure dicta exercitationem suscipit accusantium. Distinctio quibusdam earum ad voluptatibus aperiam est temporibus recusandae aspernatur, necessitatibus fugit, nulla nobis culpa. Eveniet?</p>
                </div>
            </div>
        </div>
    )
}

export default About
