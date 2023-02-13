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
    return (
        <div className='m-10 font-poppins'>
            <h1 className='text-3xl font-bold text-center mb-10'>Projects</h1>
            <div className='flex justify-center items-center'>
                <button className='bg-red-200 rounded-full flex items-center justify-center p-4' onClick={() => swiperRef.current.slidePrev()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <Swiper
                    slidesPerView={width < 768 ? 1 : 3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    navigation={false}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >

                    <SwiperSlide><div className='h-96 w-96 bg-red-200'>Slide 1</div></SwiperSlide>
                    <SwiperSlide><div className='h-96 w-96 bg-red-200'>Slide 1</div></SwiperSlide>
                    <SwiperSlide><div className='h-96 w-96 bg-red-200'>Slide 1</div></SwiperSlide>
                    <SwiperSlide><div className='h-96 w-96 bg-red-200'>Slide 1</div></SwiperSlide>
                    <SwiperSlide><div className='h-96 w-96 bg-red-200'>Slide 1</div></SwiperSlide>
                    <SwiperSlide><div className='h-96 w-96 bg-red-200'>Slide 1</div></SwiperSlide>
                    <SwiperSlide><div className='h-96 w-96 bg-red-200'>Slide 1</div></SwiperSlide>
                    <SwiperSlide><div className='h-96 w-96 bg-red-200'>Slide 1</div></SwiperSlide>
                    <SwiperSlide><div className='h-96 w-96 bg-red-200'>Slide 1</div></SwiperSlide>
                </Swiper>
                <button className='bg-red-200 rounded-full flex items-center justify-center p-4' onClick={() => swiperRef.current.slideNext()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>
        </div>
    )
}


export default Project
