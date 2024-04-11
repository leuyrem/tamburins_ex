import React, { useState } from 'react'
import {Table} from 'react-bootstrap';
import { addAge, addCount, changeId, sortItem } from '../buystore';

const Cart = () => {
  const state =useState((state)=> {return state})
  return (
    <>
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
    </Table>
    </>
  )
}

export default Cart