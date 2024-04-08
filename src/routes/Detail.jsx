import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../scss/detail.scss'

const Detail = (props) => {

  const { tamburins } = props;
  const { id } = useParams();
  console.log(id)

  return (

      <Row>
        <Col md={6} className='product'>
          <img src={tamburins[id].imgUrl} width="100%" />
        </Col>
        <Col md={6} className='info'>
          <h4 className="pt-5">{tamburins[id].title}</h4>
          <p>{tamburins[id].content}</p>
          <p>{tamburins[id].price}</p>
          <Button variant="danger">주문하기</Button>
        </Col>
      </Row>


  )
}

export default Detail;