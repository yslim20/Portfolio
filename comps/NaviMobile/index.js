import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
import NavAbout from '../NavAbout';
import NavContact from '../NavContact';
import NavDesign from '../NavDesign';
import NavWeb from '../NavWeb';
import Logo from '../Logo';

// ============ CSS ============== //
const Container = styled.div`      
  height: calc(100vh);
  width: 100%;
  min-width: 110px;
  background-color: #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  display: none;

  @media only screen and (min-width: 1px) and (max-width: 768px){
    display: block;
    display: flex;
  }
`;


// ============ Layout
const NaviMobile =({

// ============ Props  

})=>{
  
  return (
    <Container>   
      <Logo />
      <NavAbout />
      <NavWeb />
      <NavDesign />
      <NavContact /> 
    </Container>
  );
}

export default NaviMobile;