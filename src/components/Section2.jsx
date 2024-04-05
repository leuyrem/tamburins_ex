import React, { useState } from 'react'
import '../scss/section2.scss';
import { Button, Row, Col } from 'react-bootstrap';
import data_all from '../data_all'


const Section2 = () => {
let [tamburins] = useState(data_all);
console.log(tamburins[0].price);

    return (
        <div className='mid_section'>
            <div className='Wrap'>
                <div className='tab'>
                    <p className='tab_txt'>SHOP BY <br /> ESSENTIALS</p>
                    <div className='btns'>
                        <Button variant="outline-dark">ALL</Button>
                        <Button variant="outline-dark">PERFUME</Button>
                        <Button variant="outline-dark">HAND&LIP</Button>
                        <Button variant="outline-dark">BODY </Button>
                        <Button variant="outline-dark">HOME FRAGRANCE</Button>
                    </div>
                </div>
                <div className='menu_list'>
                    <Row className='itemWrap'>
                        <Col md={4} className='item'>
                            <img src={tamburins[0].imgUrl} width='100%' alt="tamburins" />
                            <h4>{tamburins[0].title}</h4>
                            <p className='item_c'>{tamburins[0].content}</p>
                            <p className='item_p'>{tamburins[0].price}</p>
                        </Col>
                        <Col md={4} className='item'>
                            <img src={tamburins[1].imgUrl} width='100%' alt="tamburins" />
                            <h4>{tamburins[1].title}</h4>
                            <p className='item_c'>{tamburins[1].content}</p>
                            <p className='item_p'>{tamburins[1].price}</p>
                        </Col>
                        <Col md={4} className='item'>
                            <img src={tamburins[2].imgUrl} width='100%' alt="tamburins" />
                            <h4>{tamburins[2].title}</h4>
                            <p className='item_c'>{tamburins[2].content}</p>
                            <p className='item_p'>{tamburins[2].price}</p>
                        </Col>                        
                        <Col md={4} className='item'>
                            <img src={tamburins[3].imgUrl} width='100%' alt="tamburins" />
                            <h4>{tamburins[3].title}</h4>
                            <p className='item_c'>{tamburins[3].content}</p>
                            <p className='item_p'>{tamburins[3].price}</p>
                        </Col>
                        <Col md={4} className='item'>
                            <img src={tamburins[4].imgUrl} width='100%' alt="tamburins" />
                            <h4>{tamburins[4].title}</h4>
                            <p className='item_c'>{tamburins[4].content}</p>
                            <p className='item_p'>{tamburins[4].price}</p>
                        </Col>
                        <Col md={4} className='item'>
                            <img src={tamburins[5].imgUrl} width='100%' alt="tamburins" />
                            <h4>{tamburins[5].title}</h4>
                            <p className='item_c'>{tamburins[5].content}</p>
                            <p className='item_p'>{tamburins[5].price}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    
    )
}

export default Section2