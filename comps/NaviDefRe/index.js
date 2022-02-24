import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

import Logo from '../Logo';
import LinkVer from '../LinkVer';
import NavText from '../NavText';

// ============ CSS ============== //
const Container = styled.div`    
  display: block;
  height: calc(100vh);
  width: 110px;
  background-color: #202020;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  padding-top: calc(5.37vh);
  box-sizing: border-box;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
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
const NaviDefRe =({
  
  onLogoClick = () => {},


})=>{
  
  return (
    <Container>   
      <Logo 
        onClick={onLogoClick}
      />
      
      <LinkVer />
    </Container>
  );
}

export default NaviDefRe;