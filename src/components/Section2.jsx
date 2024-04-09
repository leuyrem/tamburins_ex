import React, { useEffect } from 'react'
import '../scss/section2.scss';
import Product from './Product';
import data_all from '../data_all';
import { Button, Row } from 'react-bootstrap';



const Section2 = (props) => {
    const { tamburins, setTamburins} = props
    const origin = data_all;

    const filterItem = (category)=>{
        const copy = [...origin].filter(v => v.category == category);
        setTamburins(copy);
    }

    useEffect(()=> {
        filterItem("all");
    },[])

    return (
        <div className='mid_section'>
            <div className='Wrap'>
                <div className='tab'>
                    <p className='tab_txt'>SHOP BY <br /> ESSENTIALS</p>
                    <div className='btns'>
                        <Button variant="outline-dark" onClick={()=> {
                           filterItem("all");                        
                        }}>ALL</Button>
                        <Button variant="outline-dark" onClick={()=> {
                            filterItem("perfume");
                        }}>PERFUME</Button>
                        <Button variant="outline-dark" onClick={()=> {
                            filterItem("hand&lip");
                        }}>HAND&LIP</Button>
                        <Button variant="outline-dark" onClick={()=> {
                            filterItem("body");
                        }}>BODY </Button>
                        <Button variant="outline-dark" onClick={()=> {
                            filterItem("home");
                        }}>HOME FRAGRANCE</Button>
                    </div>
                </div>
                <div className='menu_list'>
                    <Row className='itemWrap'>
                        {
                            tamburins.map((tamburin, i, v)=>
                                <Product tamburins={tamburin} key={i} i={i} />
                            )
                        }

                    </Row>
                </div>
            </div>
        </div>
    
    )
}

export default Section2