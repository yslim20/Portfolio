import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
import NavAbout from '../NavAbout';
import NavContact from '../NavContact';
import NavDesign from '../NavDesign';
import NavWeb from '../NavWeb';
import Logo from '../Logo';
import LinkVer from '../LinkVer';

// ============ CSS ============== //
const Container = styled.div`    
  display: block;
  height: calc(100vh);
  width: 110px;
  background-color: #181818;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  padding-top: calc(5.37vh);
  box-sizing: border-box

  @media only screen and (min-width: 1px) and (max-width: 768px){
    display: none;
  }
`;

const LinkCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

`

// ============ Layout
const NaviDef =({


})=>{
  
  return (
    <Container>   
      <Logo />
      <LinkCont>
        <NavAbout />
        <NavWeb />
        <NavDesign />
        <NavContact /> 
      </LinkCont>
      
      <LinkVer />
    </Container>
  );
}

export default NaviDef;