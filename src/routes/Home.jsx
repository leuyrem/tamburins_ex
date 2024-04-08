import React from 'react'
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

const Home = (props) => {
  const {tamburins, no}=props

  return (
    <>

          <Section1 />
          <Section2 tamburins={tamburins} no={no}/>
          <Section3 />

    </>


      
  )
}

export default Home