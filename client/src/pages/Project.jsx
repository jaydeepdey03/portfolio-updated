import './Project.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const Project = () => {
    return (
        <div className='p-10'>
            <h1 className='text-3xl font-bold text-center mb-10'>Projects</h1>
            <div className='m-24'>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    modules={[Navigation, Pagination]}
                    className="mySwiper flex justify-center"
                >
                    <SwiperSlide className="">
                        <div className='h-52 w-52 bg-red-400'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className='h-52 w-52 bg-red-400'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className='h-52 w-52 bg-red-400'>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                        <div className='h-52 w-52 bg-red-400'>

                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    )
}


export default Project
