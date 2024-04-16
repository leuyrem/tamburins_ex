import React from 'react'
import '../scss/cart.scss';
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, sortName } from '../store.js';

const Cart = () => {
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);
    
    const dispatch = useDispatch();

    return (
        <>
            <div className='cartWrap'>
                <h2>SHOPPING CART</h2>

                <div className='buying'>
                    <div className='bag'>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>상품명</th>
                                    <th>수량</th>
                                    <th>변경하기</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td className='productImg'>
                                    <img src={process.env.PUBLIC_URL + '/img/perfume1.jpg'} width='20%' /> 
                                    </td>
                                    <div className='zip'>
                                    <td className='productName'>상품명</td>
                                    <td className='productPrice'>가격</td>
                                    <td className='productCount'>수량</td>                                        
                                    </div>
                                </tr> */}

                                {
                                    cart.map((v,i) =>
                                <tr key={i}>
                                    <td>{v.id}</td>
                                    <td>{v.item}</td>
                                    <td>{v.amount}</td>
                                    <td><button onClick={()=> 
                                        dispatch(addCount(v.id))
                                        }>+</button></td>
                                </tr>
                                )
                                }
                            
                            </tbody>
                        </Table>

                        <button variant="outline-primary" onClick={()=> {
                            dispatch(sortName())
                        }}>이름순정렬</button>{' '}
                    </div>


                    <div className='total'>
                        <h4>TOTAL</h4>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Cart