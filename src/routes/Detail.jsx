import React, { useState } from "react";
import { Col, Row, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch } from "react-redux";

import data_all from "../data_all";
import { addItem } from "../store.js";
import '../scss/detail.scss'
import Product from "../components/Product";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';


const Detail = (props) => {
  const { tamburins, setTamburins } = props;
  const { id } = useParams();
  console.log(tamburins, id)
  const selproduct = tamburins.find(x => x.id == id)
  const relproduct = tamburins.filter(x => x.id !== id && x.category === selproduct.category)
  console.log(relproduct)

  const origin = data_all;
  const filterItem = (category) => {
    const copy = [...origin].filter(v => v.category == category);
    setTamburins(copy);
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  const moveCart = () => {
    dispatch(addItem({
      id: selproduct.id, imgUrl: selproduct.imgUrl, item: selproduct.title, content: selproduct.content
      , price: selproduct.price, amount: 1
    }));
    navigate('/cart');
  }


  return (
    <>
      <div className='detailWrap'>
        <Row className="detail_inner">
          <Col lg={6} className='product'>
            <img src={selproduct.imgUrl} width="100%" />
            <img src={selproduct.imgUrl_sub} width="100%" />
          </Col>

          <Col lg={6} className='buy'>
            <div className="info">
              <div className="product_detail">
                <h4 className="title">{selproduct.title}</h4>
                <p className="price">₩ {selproduct.price.toLocaleString()}</p>
                <p className="content">{selproduct.content}</p>
                <p className="type">{selproduct.type}</p>
                <div className="more_product">
                  <Swiper modules={[Virtual]} spaceBetween={10} slidesPerView={5} virtual>
                    {relproduct.map((rel, i) => (
                      <SwiperSlide key={rel} virtualIndex={i} onClick={() => {navigate('/detail/' + rel.id)}}>
                        {<img src={process.env.PUBLIC_URL + rel.imgUrl} width="100%" onClick={() => { }} />}
                        {rel.title}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <p className="size">사이즈</p>
                <p className="gram"><span>{selproduct.size}</span></p>
                <Button variant="dark" onClick={moveCart}>쇼핑백에 추가</Button>

                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>제품 상세정보</Accordion.Header>
                    <Accordion.Body className="details">
                      <div className="txtBox">
                        <span>사용방법</span>
                        <p>용기 하단에 적혀있는 내용을 참고하세요.</p>
                      </div>
                      <div className="txtBox">
                        <span>사용할 때의 주의사항</span>
                        <p>1. 손목 등에 가볍게 테스트 후 사용하세요. <br />
                          2. 사용 시 묻어날 수 있으니 잘 흡수시켜 사용해주세요. <br />
                          3.제형 특성상 온도에 민감하여 고온 보관시 스웨팅 현상이 발생할 수 있으니 유의해주세요. <br />
                          * 본 제품에 이상이 있을 경우 공정거래위원회 고시 소비자 분쟁 해결 기준에 의해 보상해 드립니다.</p>
                      </div>
                      <div className="txtBox">
                        <span>사용기한</span>
                        <p>사용기한 24개월(상품 발송일 기준으로 사용기한이 12개월 이상 남은 상품만을 판매합니다.)</p>
                      </div>
                      <div className="txtBox">
                        <span>제조업자</span>
                        <p>코스맥스(주)</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="delivery">배송 및 반품</Accordion.Header>
                    <Accordion.Body>
                      <p>3만원 이상 구매하실 경우 배송 비용은 무료입니다.</p>
                      <p>주문일로부터 1-2 영업일 이내 출고됩니다.</p>
                      <p>배송은 지역 택배사 사정에 따라 약간의 지연이 생길 수 있습니다. 배송이 시작되면 구매자에게는 이메일, 수령인에게는 카카오 알림톡으로 배송 정보를 전송해 드립니다. <br />
                        CJ대한통운(https://www.cjlogistics.com)</p>
                      <p>상품 혹은 증정품의 포장(랩핑)을 개봉 및 훼손한 경우 반품이 불가합니다.</p>
                      <p>단순 변심 또는 주문 실수로 인한 교환이 불가합니다. 신중한 구매 부탁드립니다.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>유료 쇼핑백 서비스</Accordion.Header>
                    <Accordion.Body className="shoppingBag">
                      <img src={process.env.PUBLIC_URL + '/img/shoppingBag.jpg'} width='100%' />
                      <p><b>쇼핑백 S사이즈를 추천드립니다.</b></p>
                      <p>선물포장 패키지가 제공되는 품목 혹은 여러개의 제품을 함께 구매하실 경우 1:1 문의하기를 통해 적합한 사이즈를 추천 받으실 수 있습니다.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Col>
        </Row>

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

export default Detail;