import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/section3.scss';
import Slider from "react-slick";


const Section3 = () => {
    const settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='slide_section'>
                <div className="slider-container">
                    <h2>EXHIBITION</h2>
                    <Slider {...settings} className='slider'>
                        <div className='ex1'>
                            <div className='img_ex1'></div>
                            <p className='location'>서울 강남구 압구정로46길 50 하우스도산</p>
                            <h4>토일렛 프래그런스 컬렉션</h4>
                            <p className='date'>2023. 07. 29 - 2023. 08. 29</p>
                        </div>
                        <div className='ex2'>
                            <div className='img_ex2'></div>
                            <p className='location'>서울 성동구 연무장5길 8</p>
                            <h4>하베스트 퍼퓸 비누 컬렉션</h4>
                            <p className='date'>2023. 04. 28 - 2023. 05. 28</p>
                        </div>
                        <div className='ex3'>
                        <div className='img_ex3'></div>
                            <p className='location'>서울 강남구 압구정로46길 50 하우스도산</p>
                            <h4>퍼퓸밤 컬렉션</h4>
                            <p className='date'>2022. 11. 25 - 2022. 12. 18</p>
                        </div>
                        <div className='ex4'>
                        <div className='img_ex4'></div>
                            <p className='location'>서울 성동구 금호로3길 14</p>
                            <h4>향수 컬렉션</h4>
                            <p className='date'>2022. 09. 30 - 2022. 10. 30</p>
                        </div>
                        <div className='ex5'>
                        <div className='img_ex5'></div>
                            <p className='location'>서울 강남구 압구정로46길 50 하우스도산</p>
                            <h4>샤워리바디 컬렉션</h4>
                            <p className='date'>2022. 06. 04 - 2022. 06. 30</p>
                        </div>
                        <div className='ex6'>
                        <div className='img_ex6'></div>
                            <p className='location'>서울특별시 성동구 성수이로 20길 57</p>
                            <h4>코쿤 컬렉션</h4>
                            <p className='date'>2021.10. 20 – 2021.11.21</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </>

    );
}


export default Section3