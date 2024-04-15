import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Row, Button } from 'react-bootstrap';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import '../scss/detail.scss'
import Product from "../components/Product";
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import data_all from "../data_all";
import { Virtual } from 'swiper/modules';


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


  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );



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
                <p className="price">{selproduct.price}</p>
                <p className="content">{selproduct.content}</p>
                <p className="type">{selproduct.type}</p>
                <div className="more_product">
                  <Swiper modules={[Virtual]} spaceBetween={10} slidesPerView={5} virtual>
                     {/* navigate('/detail/' + tamburins.id) */}
                    {relproduct.map((rel, i) => (
                      <SwiperSlide key={rel} virtualIndex={i}>
                        {<img src={process.env.PUBLIC_URL + rel.imgUrl} width="100%" onClick={() => { }} />}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <p className="size">사이즈</p>
                <p className="gram"><span>{selproduct.size}</span></p>
                {/* <p className="gram"><span>{selproduct.size_sub}</span></p> */}
                <Button variant="dark">쇼핑백에 추가</Button>
                <div className="add">
                  <p>제품 상세정보
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.085 9.91406L9.08502 4.91406L7.91504 6.08404L11.7451 9.91406L7.91504 13.7441L9.08502 14.9141L14.085 9.91406Z" fill="#1D1D1D"></path></svg>
                  </p>
                  <p>
                    <span>배송 및 반품</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.085 9.91406L9.08502 4.91406L7.91504 6.08404L11.7451 9.91406L7.91504 13.7441L9.08502 14.9141L14.085 9.91406Z" fill="#1D1D1D"></path></svg>
                  </p>
                  <p>유료 쇼핑백 서비스
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.085 9.91406L9.08502 4.91406L7.91504 6.08404L11.7451 9.91406L7.91504 13.7441L9.08502 14.9141L14.085 9.91406Z" fill="#1D1D1D"></path></svg>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>






        <div className="recommend">
          <div className='together'>
            <h4>고객님을 위한 추천 상품</h4>
            <Swiper 
              className="recommend_swiper"
              spaceBetween={0}
              slidesPerView={5}
              scrollbar={{ hide: true, }}
              modules={[Scrollbar]}
              breakpoints={{
                1800: {
                  slidesPerView: 5,
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

              {tamburins.map((tamburin, i) => (
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