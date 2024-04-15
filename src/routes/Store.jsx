import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../scss/store.scss';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';



const Store = () => {
  return (
    <>
      <div className='store_section'>
        {/* 한남스토어 */}
        <div className='hannam'>
          <Swiper
            className="mySwiper1"
            spaceBetween={0}
            scrollbar={{ hide: true, }}
            modules={[Scrollbar]}
            breakpoints={{
              1800: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              200: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide className='hannam_store1'>
            <img src={process.env.PUBLIC_URL + '/img/store_hannam_01.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='hannam_store2'>
            <img src={process.env.PUBLIC_URL + '/img/store_hannam_02.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='hannam_store3'>
            <img src={process.env.PUBLIC_URL + '/img/store_hannam_03.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='hannam_store4'>
            <img src={process.env.PUBLIC_URL + '/img/store_hannam_04.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='hannam_store5'>
            <img src={process.env.PUBLIC_URL + '/img/store_hannam_05.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='hannam_store6'>
            <img src={process.env.PUBLIC_URL + '/img/store_hannam_06.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='hannam_store7'>
            <img src={process.env.PUBLIC_URL + '/img/store_hannam_07.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='hannam_store8'>
            <img src={process.env.PUBLIC_URL + '/img/store_hannam_08.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='hannam_store9'>
            <img src={process.env.PUBLIC_URL + '/img/store_hannam_09.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='hannam_store10'>
            <img src={process.env.PUBLIC_URL + '/img/store_hannam_10.jpg'} height='100%' /> 
            </SwiperSlide>
          </Swiper>
          <div className='store_info'>
            <div className='left_txt'>
              <p>플래그십 스토어 한남</p>
              <span><a href="https://www.google.com/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%9A%A9%EC%82%B0%EA%B5%AC+%EC%9D%B4%ED%83%9C%EC%9B%90%EB%A1%9C+238/@37.5359564,126.9973752,17z/data=!3m1!4b1!4m6!3m5!1s0x357ca3b383284cc9:0x7c7eb7fa03f28f10!8m2!3d37.5359522!4d126.9999555!16s%2Fg%2F11bzndrwzy?entry=tts"
                target="_blank">지도보기</a></span>
            </div>
            <div className='right_txt'>
              <p>서울특별시 용산구 이태원로 238</p>
              <p>+82 70-4101-3274</p>
              <p>월-일 11:00am-9:00pm</p>
            </div>
          </div>
        </div>


        {/* 성수스토어 */}
        <div className='seongsu'>
          <Swiper
            className="mySwiper2"
            scrollbar={{ hide: true, }}
            modules={[Scrollbar]}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide className='seongsu_store1'>
                          <img src={process.env.PUBLIC_URL + '/img/pc_seongsu_1.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='seongsu_store2'>
                          <img src={process.env.PUBLIC_URL + '/img/pc_seongsu_2.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='seongsu_store3'>
                          <img src={process.env.PUBLIC_URL + '/img/pc_seongsu_3.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='seongsu_store4'>
                          <img src={process.env.PUBLIC_URL + '/img/pc_seongsu_4.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='seongsu_store5'>
                          <img src={process.env.PUBLIC_URL + '/img/pc_seongsu_5.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='seongsu_store6'>
                          <img src={process.env.PUBLIC_URL + '/img/pc_seongsu_6.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='seongsu_store7'>
                          <img src={process.env.PUBLIC_URL + '/img/pc_seongsu_7.jpg'} height='100%' /> 
            </SwiperSlide>
          </Swiper>
          <div className='store_info'>
            <div className='left_txt'>
              <p>플래그십 스토어 성수</p>
              <span><a href="https://www.google.com/maps/place/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD+%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%84%B1%EB%8F%99%EA%B5%AC+%EC%97%B0%EB%AC%B4%EC%9E%A55%EA%B8%B8+8/@37.5437671,127.0500295,17z/data=!3m1!4b1!4m6!3m5!1s0x357ca490cc5188af:0x18dd0af0962d6656!8m2!3d37.5437671!4d127.0526044!16s%2Fg%2F11bzf3jxry?entry=tts"
                target="_blank">지도보기</a></span>
            </div>
            <div className='right_txt'>
              <p>서울 성동구 연무장5길 8</p>
              <p>+82 70 4266 6142</p>
              <p>월-일 11:00am-9:00pm</p>
            </div>
          </div>
        </div>


        {/* 삼청스토어 */}
        <div className='samcheong'>
          <Swiper
            className="mySwiper3"
            scrollbar={{ hide: true, }}
            modules={[Scrollbar]}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide className='samcheong_store1'>
                                        <img src={process.env.PUBLIC_URL + '/img/samchung_fs_01.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='samcheong_store2'>
                                        <img src={process.env.PUBLIC_URL + '/img/samchung_fs_02.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='samcheong_store3'>
                                        <img src={process.env.PUBLIC_URL + '/img/samchung_fs_03.jpg'} height='100%' /> 
            </SwiperSlide>
            <SwiperSlide className='samcheong_store4'>
                                        <img src={process.env.PUBLIC_URL + '/img/samchung_fs_04.jpg'} height='100%' /> 
            </SwiperSlide>
          </Swiper>
          <div className='store_info'>
            <div className='left_txt'>
              <p>플래그십 스토어 삼청</p>
              <span><a href="https://www.google.com/maps/place/%ED%83%AC%EB%B2%84%EB%A6%B0%EC%A6%88+%EC%82%BC%EC%B2%AD+%ED%94%8C%EB%9E%98%EA%B7%B8%EC%8B%AD%EC%8A%A4%ED%86%A0%EC%96%B4/@37.5793989,126.9796458,17z/data=!3m1!4b1!4m6!3m5!1s0x357ca310873a0217:0x48767bcb989ef154!8m2!3d37.5793989!4d126.9822207!16s%2Fg%2F11khm926xj?entry=tts"
                target="_blank">지도보기</a></span>
            </div>
            <div className='right_txt'>
              <p>서울 종로구 율곡로3길 84</p>
              <p>+82 70 4139 7450</p>
              <p>월-일 11:00am - 8:00pm</p>
            </div>
          </div>
        </div>


        {/* 도산스토어 */}
        <div className='dosan'>
          <Swiper
            className="mySwiper4"
            scrollbar={{ hide: true, }}
            modules={[Scrollbar]}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide className='dosan_store1'>
              <video muted autoPlay loop>
                <source src="/video/Dosan1.mp4" type="video/mp4" />
              </video>
            </SwiperSlide>
            <SwiperSlide className='dosan_store2'>
                                                      <img src={process.env.PUBLIC_URL + '/img/Dosan2.jpg'} height='100%' />
            </SwiperSlide>
            <SwiperSlide className='dosan_store3'>
                                                      <img src={process.env.PUBLIC_URL + '/img/Dosan3.jpg'} height='100%' />
            </SwiperSlide>
            <SwiperSlide className='dosan_store4'>
                                                      <img src={process.env.PUBLIC_URL + '/img/Dosan4.jpg'} height='100%' />
            </SwiperSlide>
            <SwiperSlide className='dosan_store5'>
                                                      <img src={process.env.PUBLIC_URL + '/img/Dosan5.jpg'} height='100%' />
            </SwiperSlide>
          </Swiper>
          <div className='store_info'>
            <div className='left_txt'>
              <p>플래그십 스토어 도산</p>
              <span><a href="https://www.google.com/maps/place/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD+%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B0%95%EB%82%A8%EA%B5%AC+%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C46%EA%B8%B8+50/@37.525382,127.03312,17z/data=!3m1!4b1!4m6!3m5!1s0x357ca388c360498b:0x2b6dd635682b17ba!8m2!3d37.525382!4d127.0356949!16s%2Fg%2F11bzkst06y?entry=tts"
                target="_blank">지도보기</a></span>
            </div>
            <div className='right_txt'>
              <p>서울 강남구 압구정로46길 50</p>
              <p>+82 70 4128 2124</p>
              <p>월-일 11:00am - 9:00pm</p>
            </div>
          </div>
        </div>


        {/* 신사스토어 */}
        <div className='sinsa'>
          <Swiper
            className="mySwiper5"
            scrollbar={{ hide: true, }}
            modules={[Scrollbar]}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide className='sinsa_store1'>
                <img src={process.env.PUBLIC_URL + '/img/Sinsa1.jpg'} height='100%' />
            </SwiperSlide>
            <SwiperSlide className='sinsa_store2'>
                <img src={process.env.PUBLIC_URL + '/img/Sinsa2.jpg'} height='100%' />
            </SwiperSlide>
            <SwiperSlide className='sinsa_store3'>
                <img src={process.env.PUBLIC_URL + '/img/Sinsa3.jpg'} height='100%' />
            </SwiperSlide>
            <SwiperSlide className='sinsa_store4'>
                <img src={process.env.PUBLIC_URL + '/img/Sinsa4.jpg'} height='100%' />
            </SwiperSlide>
            <SwiperSlide className='sinsa_store5'>
                <img src={process.env.PUBLIC_URL + '/img/Sinsa5.jpg'} height='100%' />
            </SwiperSlide>
            <SwiperSlide className='sinsa_store6'>
                <img src={process.env.PUBLIC_URL + '/img/Sinsa6.jpg'} height='100%' />
            </SwiperSlide>
            <SwiperSlide className='sinsa_store7'>
                <img src={process.env.PUBLIC_URL + '/img/Sinsa7.jpg'} height='100%' />
            </SwiperSlide>
          </Swiper>
          <div className='store_info'>
            <div className='left_txt'>
              <p>플래그십 스토어 신사</p>
              <span><a href="https://www.google.com/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B0%95%EB%82%A8%EA%B5%AC+%EC%95%95%EA%B5%AC%EC%A0%95%EB%A1%9C10%EA%B8%B8+44/data=!3m1!4b1!4m6!3m5!1s0x357ca3eb0892eca7:0xc73353b10f669cab!8m2!3d37.5206264!4d127.0220599!16s%2Fg%2F11bz5w9zc0?entry=ttu"
                target="_blank">지도보기</a></span>
            </div>
            <div className='right_txt'>
              <p>서울 강남구 압구정로10길 44</p>
              <p>+82 02 511 1246</p>
              <p>월-일 11:00am-9:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Store
