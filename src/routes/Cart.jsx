import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount } from '../store.js';
import { useNavigate } from 'react-router-dom';

import data_all from "../data_all";
import Product from "../components/Product";
import '../scss/cart.scss';
import '../scss/detail.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';


const Cart = (props) => {
    const { tamburins, setTamburins } = props;
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
                                        <img src={process.env.PUBLIC_URL + '/img/p1.jpg'} width='100%' />
                                    </div>

                                    <div className='shopping'>
                                        <div className='productItem'>{v.item}</div>
                                        <div className='productContent'>{v.content}</div>
                                        <div className='countWrap'>
                                            <div className='count'>
                                                <button onClick={() =>
                                                    dispatch(addCount(v.id))
                                                }>+</button>
                                                <div className='productCount'>{v.amount}</div>
                                                <button onClick={() =>
                                                    dispatch(addCount(v.id))
                                                }>+</button>
                                            </div>
                                            <div className='productPrice'>{v.price}</div>
                                        </div>
                                        <div className='tabs'>
                                            <button>Move to favorites</button>
                                            <button>Remove</button>
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
                                <p>₩ 45,800</p>
                            </div>
                            <div className='ship'>
                                <p>배송비 <span>3만원 이상 구매시 무료</span></p>
                                <p>₩ 0</p>
                            </div>
                            <div className='all_order'>
                                <p>총 주문금액</p>
                                <p>₩ 45,800</p>
                            </div>
                            <button>결제하기</button>
                        </div>
                        

                        <div className='bag_add'>
                            <p>쇼핑백을 추가하시겠습니까?</p>
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

            </div>
        </>
    )
}

export default Cart