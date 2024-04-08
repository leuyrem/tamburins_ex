import React from 'react'
import '../scss/section2.scss';
import Product from './Product';
import { Button, Row } from 'react-bootstrap';


const Section2 = (props) => {
const { tamburins, setTamburins, no, setNo} = props

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
                        {
                            tamburins.map((tamburin, i)=>
                                <Product tamburins={tamburin} key={i} i={i} no={no}/>
                            )
                        }

                    </Row>
                </div>
            </div>
        </div>
    
    )
}

export default Section2