import './App.css';
import './scss/common.scss';
import Home from './routes/Home';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom'





function App() {
  return (
    <div className="App">
      <div className='head_banner'>TAMBURINS Home Fragrance COMING SOON, March 22nd</div>
      <Navbar expand="lg" className="navbar" >
        <Container fluid>
          <div className='headerWrap'>
            <Navbar.Brand href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="180" viewBox="0 0 210 31" fill="black">
                <g clip-path="url(#clip0_5924_5517)">
                  <path d="M23.5946 0.688843H0.958984V6.11548H1.10101C2.99471 4.90233 5.24348 4.11526 7.52775 4.11526H9.77652V19.5401C9.77652 20.6467 9.67 21.7888 9.56348 22.6114C9.27646 23.434 8.66989 24.5406 8.31482 25.1117V25.3247H16.2417V25.1117C15.8837 24.5406 15.2771 23.434 14.9931 22.6114C14.8865 21.7888 14.78 20.6467 14.78 19.5401V4.11526H17.0288C19.3131 4.11526 21.5618 4.89937 23.4555 6.11548H23.5976V0.688843H23.5946Z"></path>
                  <path d="M45.6591 23.147C45.1591 22.2179 44.659 21.1112 44.0879 19.7205L36.5191 0.688843H31.699L24.2366 19.7205C23.7366 20.9692 23.201 22.2208 22.701 23.147C22.3785 23.7535 21.9169 24.5406 21.5588 25.1117V25.3247H28.0566V25.0022C27.808 24.5021 27.521 23.7535 27.3435 23.147C27.4145 22.1824 27.737 21.0757 28.2371 19.7205L28.5241 18.9364H38.2352L38.5222 19.7945C38.9868 21.0787 39.3063 22.1853 39.3803 23.1499C39.2738 23.7565 38.9158 24.5436 38.6317 25.1146V25.3277H46.7006V25.1146L45.665 23.1499L45.6591 23.147ZM29.5568 16.1491L30.6634 13.1843L33.4832 6.00896H33.5187L36.3741 13.2938L37.3032 16.1491H29.5538H29.5568Z"></path>
                  <path d="M70.4251 0.688843L63.7469 19.0755H63.5694L56.8201 0.688843H48.2866V0.901884C48.6446 1.47295 49.2512 2.57959 49.5353 3.40216C49.6418 4.22474 49.7483 5.36688 49.7483 6.47351V19.543C49.7483 20.6496 49.6418 21.7918 49.5353 22.6144C49.2483 23.4369 48.6417 24.5436 48.2866 25.1146V25.3277H54.7844V25.1146C54.4263 24.5436 53.8198 23.4369 53.5357 22.6144C53.4292 21.7918 53.3227 20.6496 53.3227 19.543V6.00896H53.5357L60.6756 25.3247H65.2116L72.1383 6.222H72.3159V19.5401C72.3159 20.6467 72.2094 21.7888 72.1028 22.6114C71.8158 23.434 71.2093 24.5406 70.8542 25.1117V25.3247H78.7101V25.1117C78.352 24.5406 77.7455 23.434 77.4614 22.6114C77.3549 21.7888 77.2484 20.6467 77.2484 19.5401V6.47351C77.2484 5.36688 77.3549 4.22474 77.4614 3.40216C77.7484 2.57959 78.355 1.47295 78.7101 0.901884V0.688843H70.4251Z"></path>
                  <path d="M96.8837 11.4356V11.3646C99.8101 10.1869 101.381 8.54475 101.381 6.11548C101.381 2.72457 98.452 0.937391 92.6703 0.72435C91.7057 0.688843 90.4925 0.688843 89.8504 0.688843H82.4236V0.901884C82.7816 1.47295 83.3882 2.57959 83.6722 3.40216C83.7788 4.22474 83.8853 5.36688 83.8853 6.47351V19.5401C83.8853 20.6467 83.7788 21.7888 83.6722 22.6114C83.3852 23.434 82.7787 24.5406 82.4236 25.1117V25.3247H93.9219C99.313 25.3247 103.062 23.2535 103.062 18.0754C103.062 13.9329 100.526 12.0777 96.8837 11.4356ZM88.8858 3.50868H91.9217C94.7415 3.50868 96.1706 4.40228 96.1706 7.1156C96.1706 8.97083 95.5286 10.329 94.4219 11.2581H88.8888V3.50868H88.8858ZM93.0993 22.4309L88.8858 22.2179V13.9714H93.3478C96.1322 13.9714 97.8099 15.1845 97.8099 18.1139C97.8099 21.3627 95.8097 22.4339 93.0964 22.4339L93.0993 22.4309Z"></path>
                  <path d="M111.365 14.9005V6.47351C111.365 5.36688 111.471 4.22474 111.578 3.40216C111.865 2.57959 112.471 1.47295 112.826 0.901884V0.688843H104.899V0.901884C105.257 1.47295 105.864 2.57959 106.148 3.40216C106.255 4.22474 106.361 5.36688 106.361 6.47351V14.794C106.361 21.9693 110.288 25.8632 116.966 25.8632C123.644 25.8632 127.464 21.8273 127.464 14.7585V6.54748C127.464 5.36984 127.571 4.2277 127.677 3.40512C127.964 2.58255 128.571 1.47591 128.926 0.904843V0.691802H122.034V0.904843C122.392 1.47591 122.999 2.58255 123.283 3.40512C123.39 4.2277 123.496 5.36984 123.496 6.54748V14.9034C123.496 19.4395 121.602 22.1528 117.534 22.1528C113.465 22.1528 111.356 19.0814 111.356 14.9034L111.365 14.9005Z"></path>
                  <path d="M146.031 13.7554L146.28 13.6489C148.815 12.6132 151.635 10.0775 151.635 6.65105C151.635 3.22463 148.28 0.688843 143.566 0.688843H131.642V0.901884C132 1.47295 132.606 2.57959 132.891 3.40216C132.997 4.22474 133.104 5.36688 133.104 6.47351V19.5401C133.104 20.6467 132.997 21.7888 132.891 22.6114C132.603 23.434 131.997 24.5406 131.642 25.1117V25.3247H139.569V25.1117C139.211 24.5406 138.604 23.434 138.32 22.6114C138.214 21.7888 138.107 20.6467 138.107 19.5401V14.9685H140.249C140.607 14.9685 140.927 14.9685 141.214 14.933L148.105 25.3218H153.748V24.9992L146.037 13.7524L146.031 13.7554ZM144.495 12.1842C144.031 12.2197 143.282 12.2197 142.818 12.2197C142.424 12.2197 140.317 12.1487 138.104 12.0422V3.54419H141.747C144.676 3.54419 146.425 4.5443 146.425 7.72217C146.425 9.79341 145.602 11.1841 144.495 12.1842Z"></path>
                  <path d="M161.991 19.5401V6.47351C161.991 5.36688 162.098 4.22474 162.204 3.40216C162.491 2.57959 163.098 1.47295 163.453 0.901884V0.688843H155.526V0.901884C155.884 1.47295 156.491 2.57959 156.775 3.40216C156.881 4.22474 156.988 5.36688 156.988 6.47351V19.543C156.988 20.6496 156.881 21.7918 156.775 22.6144C156.488 23.4369 155.881 24.5436 155.526 25.1146V25.3277H163.453V25.1146C163.095 24.5436 162.488 23.4369 162.204 22.6144C162.098 21.7918 161.991 20.6496 161.991 19.543V19.5401Z"></path>
                  <path d="M183.84 0.688843V0.901884C184.198 1.47295 184.805 2.57959 185.089 3.40216C185.195 4.22474 185.302 5.36688 185.302 6.47351V18.8625H185.231L174.593 0.688843H166.595V0.901884C166.953 1.47295 167.56 2.57959 167.844 3.40216C167.951 4.22474 168.057 5.36688 168.057 6.47351V19.543C168.057 20.6496 167.951 21.7918 167.844 22.6144C167.557 23.4369 166.951 24.5436 166.595 25.1146V25.3277H173.164V25.1146C172.806 24.5436 172.2 23.4369 171.916 22.6144C171.809 21.7918 171.703 20.6496 171.703 19.543V5.61543H171.774L183.485 25.3247H188.947V6.47351C188.947 5.36688 189.054 4.22474 189.16 3.40216C189.447 2.57959 190.054 1.47295 190.409 0.901884V0.688843H183.84Z"></path>
                  <path d="M201.283 25.8603C207.496 25.8603 209.958 22.1114 209.958 18.2559C209.958 14.0779 207.316 12.0777 203.531 10.8646L202.425 10.5065C200.034 9.72243 197.892 9.00638 197.892 6.68659C197.892 4.36681 200.211 3.3667 202.105 3.3667C204.854 3.3667 207.067 4.65086 208.709 6.61558L208.996 6.50906V2.08253C207.677 1.04691 205.141 0.15332 202.318 0.15332C197.463 0.15332 193.107 2.76012 193.107 7.58018C193.107 10.7225 194.962 13.1873 199.211 14.6845L200.425 15.1136C203.46 16.1847 205.245 16.8623 205.245 19.1495C205.245 21.4368 203.638 22.5759 201.283 22.5759C198.64 22.5759 195.498 21.1468 193.32 18.398L193.033 18.5045V23.3245C194.353 24.6442 197.105 25.8603 201.28 25.8603H201.283Z"></path></g><defs><clipPath id="clip0_5924_5517"><rect width="208.999" height="25.707" transform="translate(0.958984 0.15332)"></rect></clipPath></defs></svg>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav variant="underline" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">PERFUME</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">HAND&LIP</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-3">BODY</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-4">HOME FRAGRANCE</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-5">STORE</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="'룸 스프레이'를 검색해보세요"
                  className="search"
                  aria-label="Search"
                />
              </Form>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="black" className='login'><path d="M17.4462 14.4982C16.5552 13.6072 15.5102 12.9362 14.3772 12.4962C14.6412 12.3092 14.8942 12.1112 15.1362 11.8802C17.3472 9.66919 17.3472 6.0722 15.1362 3.8612C14.0252 2.7502 12.5732 2.2002 11.1322 2.2002C9.6912 2.2002 8.2282 2.7502 7.1282 3.8612C4.9172 6.0722 4.9172 9.66919 7.1282 11.8802C7.3592 12.1112 7.6232 12.3092 7.8872 12.4962C6.7542 12.9362 5.7092 13.6072 4.8182 14.4982C3.1242 16.1922 2.2002 18.4362 2.2002 20.8232H3.8282C3.8282 18.8762 4.5872 17.0392 5.9622 15.6642C7.3372 14.2892 9.13019 13.5522 11.0552 13.5302C11.0772 13.5302 11.0992 13.5302 11.1102 13.5302C11.1212 13.5302 11.1542 13.5302 11.1652 13.5302C13.0902 13.5412 14.8942 14.3002 16.2582 15.6642C17.6222 17.0282 18.3922 18.8762 18.3922 20.8232H20.0422C20.0422 18.4362 19.1072 16.1922 17.4242 14.4982H17.4462ZM8.2832 10.7142C6.7212 9.15219 6.7212 6.60019 8.2832 5.0272C9.0422 4.2682 10.0542 3.8502 11.1212 3.8502C12.1882 3.8502 13.2002 4.2682 13.9592 5.0272C15.5212 6.5892 15.5212 9.14119 13.9592 10.7142C13.2112 11.4622 12.2322 11.8692 11.1762 11.8802C11.1542 11.8802 11.1322 11.8802 11.1212 11.8802C11.1102 11.8802 11.0772 11.8802 11.0662 11.8802C10.0102 11.8692 9.0312 11.4512 8.2832 10.7142Z"></path></svg>
              <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M18.9529 5.49995H15.1139C15.0809 3.67395 13.3759 2.19995 11.2859 2.19995C9.19595 2.19995 7.50195 3.67395 7.45795 5.49995H3.61895L2.19995 19.7999H20.3829L18.9639 5.49995H18.9529ZM11.2859 3.84995C12.4629 3.84995 13.4199 4.58695 13.4639 5.49995H9.11895C9.16295 4.58695 10.1199 3.84995 11.2969 3.84995H11.2859ZM4.01494 18.15L5.10395 7.14995H17.4569L18.546 18.15H4.00395H4.01494Z"></path></svg>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      {/* <Link to='/'>홈</Link>
            <Link to='/PERFUME'>상세페이지</Link> */}

      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>

      
    </div>
  );
}

export default App;