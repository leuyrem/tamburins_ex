import React from 'react'
import { Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/section3.scss';
import Slider from "react-slick";
import data_all from '../data_all';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Section3 = () => {
    const [tamburins, setTamburins] = useState(data_all);
    const navigate = useNavigate();
    const origin = data_all;


    const filterItem = (category)=>{
        const copy = [...origin].filter(v => v.category == category);
        setTamburins(copy);
      }
    

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
            <Row className='mid_section2'>
                <Col sm={4} className='jennie' >
                    <button onClick={()=> {
                         filterItem("bam");
                        navigate('/detail/30')
                    }}>LEARN MORE</button>
                </Col>
                <Col sm={8} className='video_perfume'>
                    <video muted autoPlay loop>
                        <source src="/video/PERFUME.mp4" type="video/mp4" />
                    </video>
                </Col>
            </Row>

            <div className='slide_section'>
                <div className="slider-container">
                    <h2>EXHIBITION</h2>
                    <Slider {...settings} className='slider'>
                        <div className='ex1'></div>
                        <div className='ex2'></div>
                        <div className='ex3'></div>
                        <div className='ex4'></div>
                        <div className='ex5'></div>
                    </Slider>
                </div>
            </div>
        </>

    );
}


export default Section3