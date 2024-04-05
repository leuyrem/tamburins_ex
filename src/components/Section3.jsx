import React from 'react'

import { Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/section3.scss';
import Slider from "react-slick";


const Section3 = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
    };

    return (
        <>
            <Row className='mid_section2'>
                <Col sm={4} className='jennie' >

                    <button>LEARN MORE</button>
                </Col>
                <Col sm={8} className='video_perfume'>
                    <video muted autoPlay loop>
                        <source src="/video/PERFUME.mp4" type="video/mp4" />
                    </video>
                </Col>
            </Row>

            <div className="slider-container">
                <h2>EXHIBITION</h2>
                <div className='arrows'>

                </div>
                <Slider {...settings} className='slider'>
                    <div className='ex1'>

                    </div>
                    <div className='ex2'>

                    </div>
                    <div className='ex3'>

                    </div>
                    <div className='ex4'>

                    </div>
                    <div className='ex5'>

                    </div>
                </Slider>
            </div>


        </>





    );
}


export default Section3