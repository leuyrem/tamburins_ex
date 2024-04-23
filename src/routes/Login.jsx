import React, { useRef } from 'react'
import {Tab, Tabs, Form, InputGroup, Button } from 'react-bootstrap';
import '../scss/login.scss'

const Login = () => {
    const id = useRef();
    const password = useRef();
    
     // const id = useRef();
    // const password = useRef();

    // function pass() {
    //     const idIv = id.current.value;
    //     const passIv = password.current.value;
    //     const emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    //     const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    //     if (!emailRegEx.test(idIv)) {
    //         alert('이메일을 다시 입력해주세요.');
    //         id.current.focus();
    //         return false
    //     } else {
    //         if (false === reg.test(passIv)) {
    //             alert('비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.');
    //             password.current.focus();
    //             return false
    //         } else if (passIv.search(/\s/) != -1) {
    //             alert('비밀번호는 공백 없이 입력해주세요.');
    //             password.current.focus();
    //             return false;
    //         } else if (/(\w)\1\1\1/.test(passIv)) {
    //             alert('같은 문자를 4번 이상 사용할 수 없습니다.');
    //             password.current.focus();
    //             return false;
    //         }
    //         else {
    //             alert('환영합니다.')
    //         }
    //     }
    // }

    return (
        <>
        <div className='logWrap'>
            <Tabs id="controlled-tab-example" className="mb-3">
                <Tab eventKey="home" title="로그인">
                    <InputGroup className="mb-3 my-5">
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

                    <Button variant="dark" className='start'>로그인</Button>
                    <div className='find'><p>아이디 찾기</p> <b>|</b> <p>비밀번호 찾기</p> <b>|</b> <p>회원가입</p></div>
        
                    <Button variant="dark" className='kakao'>
                    <img src={process.env.PUBLIC_URL + '/img/kakao.png'} width='5%' /> 
                        카카오 로그인</Button>
                        <br />
                    <Button variant="dark" className='naver'>
                    <img src={process.env.PUBLIC_URL + '/img/naver.png'} width='5%' /> 
                        네이버 로그인</Button>
                </Tab>

                <Tab eventKey="profile" title="비회원 주문조회">
                 <p className='mt-5 number'>휴대폰 번호</p> 
                <InputGroup className="mb-3">
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="'-'없이 숫자만 입력"
                        />
                    </InputGroup>
                    
                    <p className='mt-4 number'>주문 번호</p> 
                    <InputGroup className="mb-5">
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="18자리 주문번호 입력"
                        />
                    </InputGroup>

                    <Button variant="dark" className='orderFind'>주문조회</Button>
                    <Button variant="dark" className='join'>신규회원가입</Button>
                </Tab>
            </Tabs>
            </div>
        </>
    )
}

export default Login