import React from 'react'
import {Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



const Product = (props) => {
    const {tamburins, i, no} = props;        
    const navigate = useNavigate();        


  return (
    <Col md={4} className='item' onClick={()=>{    
        navigate('/detail/' + tamburins.id)
    }}> 
       <img src={process.env.PUBLIC_URL + tamburins.imgUrl} width='100%' alt="tamburins" />
       <h4>{tamburins.title}</h4>
       <p className='item_c'>{tamburins.content}</p>
       <p className='item_p'>₩ {tamburins.price.toLocaleString()}</p>
   </Col>
  )
}

export default Product