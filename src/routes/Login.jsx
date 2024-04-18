import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';

import '../scss/login.scss'

const Login = () => {


    return (
        <>
        <div className='logWrap'>
            <Tabs id="controlled-tab-example" className="mb-3">
                <Tab eventKey="home" title="로그인">
                    <InputGroup className="mb-3">
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="아이디(이메일)"
                        />
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="비밀번호"
                        />
                    </InputGroup>

                    <Button variant="dark">로그인</Button>

                    <div>아이디 찾기 | 비밀번호 찾기 | 회원가입</div>

                    <Button variant="dark">
                    <img src={process.env.PUBLIC_URL + '/img/kakao.png'} width='10%' /> 
                        카카오 로그인</Button>
                        <br />
                    <Button variant="dark">
                    <img src={process.env.PUBLIC_URL + '/img/naver.png'} width='10%' /> 
                        네이버 로그인</Button>

                </Tab>

                <Tab eventKey="profile" title="비회원 주문조회">
                <InputGroup className="mb-3">
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="'-'없이 숫자만 입력"
                        />
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="18자리 주문번호 입력"
                        />
                    </InputGroup>

                    <Button variant="dark">주문조회</Button>
                    <Button variant="dark">신규회원가입</Button>
                </Tab>
            </Tabs>
            </div>
        </>
    )
}

export default Login