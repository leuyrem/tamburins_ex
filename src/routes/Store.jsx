import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../scss/store.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper/modules';

const Store = () => {
  return (
    <>
      <div className='store_section'>
        <div className='storeWrap'>
         <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide className='store1'></SwiperSlide>
          <SwiperSlide className='store2'></SwiperSlide>
          <SwiperSlide className='store3'></SwiperSlide>
          <SwiperSlide className='store4'></SwiperSlide>
          <SwiperSlide className='store5'></SwiperSlide>
          <SwiperSlide className='store6'></SwiperSlide>
          <SwiperSlide className='store7'></SwiperSlide>
          <SwiperSlide className='store8'></SwiperSlide>
          <SwiperSlide className='store9'></SwiperSlide>
          <SwiperSlide className='store10'></SwiperSlide>
        </Swiper>
        <div className='store_info'>
          <div className='left_txt'>
            <h5>플래그십 스토어 한남</h5>
            <p>지도보기</p>
          </div>
          <div className='right_txt'>
            <p>서울특별시 용산구 이태원로 238</p>
            <p>+82 70-4101-3274</p>
            <p>월-일 11:00am-9:00pm</p>
          </div>
        </div> 
        </div>
        
      </div>

    </>
  )
}

export default Store
