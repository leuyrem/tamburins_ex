import React from 'react'
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

const Home = (props) => {
  const {tamburins, setTamburins}=props

  return (
    <>

          <Section1 />
          <Section2 tamburins={tamburins} setTamburins={setTamburins}/>
          <Section3 />

    </>


      
  )
}

export default Home