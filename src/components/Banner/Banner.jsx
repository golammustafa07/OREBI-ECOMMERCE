import React from 'react'
import banner from '../../assets/banner.jpg'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    return (
        <div className='max-w-containerx mx-auto'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    Array.from({length:10}).map((_,i)=>{
                        return(

                <SwiperSlide key={i}>
                    <img src={banner} alt="" />
                </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Banner