import React from 'react'
import '../scss/section1.scss';
import { Row, Col } from 'react-bootstrap';



const Section1 = () => {
  return (
    <div className='main_section'>
      <Row className='containerWrap'>
        <Col md={6} className='left'>
          <Row className='graybox'>
            <p className='toptext'>FOR <br /> EVERYONE BUT <br /> NOT ANYONE</p>
            <p className='bottomtext'>We establish personal relationships with our boutiques, to make <br />
              sure each is vetted for a stress-free shopping experience</p>
          </Row>
          <Row>
            <Col className='smallBox1'><p>#PERFUME</p></Col>
            <Col className='smallBox2'><p>#THE SHELL</p></Col>
          </Row>
        </Col>
        <Col md={6} className='right'>
          <video muted autoPlay loop>
            <source src={process.env.PUBLIC_URL + "/video/FRoom.mp4"} type="video/mp4" />
          </video>
        </Col>
      </Row>
      <div className='midtxt'>
        <p className='mid2'>Take the fragrant journey within our 
        space filled with warmth from color 
        harmony of turquoise and gentle<br />inspirations.</p>
      </div>
    </div>
  )
}

export default Section1