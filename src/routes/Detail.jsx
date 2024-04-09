import React from "react";
import { Col, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../scss/detail.scss'



const Detail = (props) => {
  const { tamburins } = props;
  const { id } = useParams();
  console.log(tamburins, id)
  const selproduct = tamburins.find(x=>x.id==id)


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
                <div className="more_product">다른 상품 이미지</div>
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
      </div>
    </>


  )
}

export default Detail;