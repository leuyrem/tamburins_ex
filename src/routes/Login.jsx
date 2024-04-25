import React from 'react'
import { Tab, Tabs, Form, InputGroup, Button } from 'react-bootstrap';
import '../scss/login.scss'


function Logincheck(id2, pw2) {
    var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    var hangulcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    if (false === reg.test(pw2)) {
        alert('비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.');
    } else if (/(\w)\1\1\1/.test(pw2)) {
        alert('같은 문자를 4번 이상 사용하실 수 없습니다.');
    } else if (pw2.search(id2) > -1) {
        alert("비밀번호에 아이디가 포함되었습니다.");
    } else if (pw2.search(/\s/) != -1) {
        alert("비밀번호는 공백 없이 입력해주세요.");
    } else if (hangulcheck.test(pw2)) {
        alert("비밀번호에 한글을 사용 할 수 없습니다.");
    } else {
        console.log("통과");
    }
}

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const pw2 = document.getElementById("pw1").value;
        const id2 = document.getElementById("id1").value;
        Logincheck(id2, pw2);
    };

    return (
        <>
            <div className='logWrap'>
                <Tabs mdefaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
                    <Tab eventKey="home" title="로그인">
                        <InputGroup className="mb-3 my-5">
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="아이디(이메일)"
                                id='id1'
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="비밀번호"
                                id='pw1'
                            />
                        </InputGroup>
                        <Button variant="dark" className='start' onClick={handleSubmit}>로그인</Button>
                        <div className='find'><p>아이디 찾기</p> <b>|</b> <p>비밀번호 찾기</p> <b>|</b> <p>회원가입</p></div>
                        <Button variant="dark" className='kakao'><img src={process.env.PUBLIC_URL + '/img/kakao.png'} width='5%' />카카오 로그인</Button><br />
                        <Button variant="dark" className='naver'><img src={process.env.PUBLIC_URL + '/img/naver.png'} width='5%' /> 네이버 로그인</Button>
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