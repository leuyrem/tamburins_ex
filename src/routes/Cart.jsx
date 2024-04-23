import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { addCount, minusCount, deleteItem } from '../store.js';
import data_all from "../data_all";
import Product from "../components/Product";
import '../scss/cart.scss';
import '../scss/detail.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';

const Cart = (props) => {
    let total = () => {
        let sum = 0;
        for (let i in cart) {
            sum += cart[i].price * cart[i].amount
        }
        return sum
    }

    let [deliveryFee, setDeliveryFee] = useState(2500)
    useEffect(() => {
        function fee() {
            if (total() >= 30000) {
                setDeliveryFee(0)
            } else {
                setDeliveryFee(2500)
            }
        }
        fee()
    })

    const { tamburins, setTamburins } = props;
    const state = useSelector(state => state);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const origin = data_all;



    return (
        <>
            <div className='cartWrap'>
                <h2>SHOPPING CART</h2>
                <div className='buying'>
                    <div className='bag'>
                        {
                            cart.map((v, i) =>
                                <div className='zip' key={i}>
                                    <div className='productImg' onClick={() => { navigate('/detail/' + v.id) }}>
                                        <img src={process.env.PUBLIC_URL + v.imgUrl} width='100%' />
                                    </div>
                                    <div className='shopping'>
                                        <div className='productItem'>{v.item}</div>
                                        <div className='productContent'>{v.content}</div>
                                        <div className='countWrap'>
                                            <div className='count'>
                                                <button onClick={() =>
                                                    dispatch(minusCount(v.id))
                                                }>-</button>
                                                <div className='productCount'>{v.amount}</div>
                                                <button onClick={() =>
                                                    dispatch(addCount(v.id))
                                                }>+</button>
                                            </div>
                                            <div className='productPrice'>₩ {v.price.toLocaleString()}</div>
                                        </div>
                                        <div className='tabs'>
                                            <button>Move to favorites</button>
                                            <button onClick={() => {
                                                dispatch(deleteItem(v.id))
                                            }}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>


                    <div className='total'>
                        <h4>TOTAL</h4>
                        <div className='payment'>
                            <div className='order'>
                                <p>주문금액</p>
                                <p className='order_price'>₩ {total().toLocaleString()}</p>
                            </div>
                            <div className='ship'>
                                <p>배송비 <span>3만원 이상 구매시 무료</span></p>
                                <p className='order_price'>₩ {deliveryFee.toLocaleString()}</p>
                            </div>
                            <div className='all_order'>
                                <p>총 주문금액</p>
                                <p className='order_price'>₩ {(total() + deliveryFee).toLocaleString()}</p>
                            </div>
                            <Button variant="dark">결제하기</Button>

                        </div>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>ADD SHOPPINGBAG</Accordion.Header>
                                <Accordion.Body>
                                    <div className='shoppingBag_S'>
                                        <div className='bag_wrap'><img src={process.env.PUBLIC_URL + '/img/Thumbnail_ShoppingBag_S.jpg'} width='100%' /></div>
                                        <div className='bag_Buy'>
                                            <div className='bag_size'>
                                                <span className='diy'>쇼핑백 (S)</span> <br />
                                                <span className='diy'>140X195X97mm</span> <br />
                                                <span className='diy'>₩ 1,000</span> <br />
                                                <span className='drop diy'>수량
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            1
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='shoppingBag_M'>
                                        <div className='bag_wrap'><img src={process.env.PUBLIC_URL + '/img/Thumbnail_ShoppingBag_M.jpg'} width='100%' /></div>
                                        <div className='bag_Buy'>
                                            <div className='bag_size'>
                                                <span className='diy'>쇼핑백 (M)</span> <br />
                                                <span className='diy'>235X300X110mm</span> <br />
                                                <span className='diy'>₩ 1,500</span> <br />
                                                <span className='drop diy'>수량
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                            1
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>ADD PROMO CODE</Accordion.Header>
                                <Accordion.Body>
                                    <Form className="d-flex promo">
                                        <Form.Control
                                            type="search"
                                            placeholder="프로모션 코드를 입력하세요."
                                            className="add_search"
                                            aria-label="Search"
                                        />
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>ADD A GIFT MESSAGE</Accordion.Header>
                                <Accordion.Body>
                                    <Form className="d-flex gift">
                                        <Form.Control
                                            type="search"
                                            placeholder="메세지를 입력하세요."
                                            className="add_search"
                                            aria-label="Search"
                                        />
                                    </Form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>


                    </div>
                </div>
            </div>

            <div className="recommend">
                <div className='together'>
                    <h4>MAYBE YOU LIKE</h4>
                    <Swiper
                        className="recommend_swiper"
                        spaceBetween={'20px'}
                        slidesPerView={5}
                        scrollbar={{ hide: true, }}
                        modules={[Scrollbar]}
                        breakpoints={{
                            1800: {
                                slidesPerView: 5,
                            },
                            1500: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            200: {
                                slidesPerView: 1,
                            },
                        }} >

                        {origin.map((tamburin, i) => (
                            <SwiperSlide className="recommend_slide" key={tamburins} virtualIndex={i}>
                                <Product tamburins={tamburin} i={i} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


        </>
    )
}

export default Cart