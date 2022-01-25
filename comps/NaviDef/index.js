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
  display: block;
  height: calc(100vh);
  width: 110px;
  background-color: #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

  @media only screen and (min-width: 1px) and (max-width: 768px){
    display: none;
  }
`;


// ============ Layout
const NaviDef =({

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

export default NaviDef;