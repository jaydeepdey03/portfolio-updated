import './Project.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from 'react';
import useDimension from '../hook/useDimension';

const Project = () => {
    const swiperRef = useRef()
    const { width } = useDimension();

    let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam similique, praesentium esse explicabo, nostrum asperiores ut beatae tempora repellat a facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem alias modi et, magnam quidem placeat iusto facilis, sed corrupti praesentium ut iste in reiciendis vitae labore molestias delectus tenetur consectetur."

    return (
        <div className='m-4 mb-7 font-poppins'>
            <h1 className='text-3xl font-bold text-center mb-10'>Projects</h1>
            <div className='flex justify-center items-center space-x-3'>
                <button className='bg-gray-200 rounded-full flex items-center justify-center p-4' onClick={() => swiperRef.current.slidePrev()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <Swiper
                    slidesPerView={width < 768 ? '1' : '3'}
                    spaceBetween={20}
                    pagination={false}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    centeredSlides={true}
                    centerInsufficientSlides={true}
                    centeredSlidesBounds={true}
                    navigation={false}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {[1, 2, 3, 4, 5, 6].map(() => {
                        return <SwiperSlide>
                            <div className='max-w-sm rounded-xl shadow-lg p-6 m-3'>
                                <img src="/blog1.png" className='rounded-xl' alt="" />
                                <h3 className='text-center font-light mt-3 text-xl'>Project Title</h3>
                                <p className={`${width<640? 'text-center': 'text-justify'} text-sm text-gray-500 pt-3`}>{width < 768 ?text.slice(0,100) + '...': text.slice(0,250) + '...'}</p>
                            </div>
                        </SwiperSlide>
                    })
                    }

                </Swiper>
                <button className='bg-gray-200 rounded-full flex items-center justify-center p-4' onClick={() => swiperRef.current.slideNext()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>
        </div>
    )
}


export default Project
