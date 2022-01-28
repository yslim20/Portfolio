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
  
  onLogoClick = () => {},
  onAboutClick = () =>{},
  onWebClick = () => {},
  onDesClick = () =>{},
  onContClick = () => {},

})=>{
  
  return (
    <Container>   
      <Logo 
        onClick={onLogoClick}
      />

      <LinkCont>
        <NavText 
          onClick = {onAboutClick}
        />

        <NavText 
          onClick = {onWebClick}
          text ="Web"
          borderT=""
        />

        <NavText 
          onClick = {onDesClick}
          text ="Design" 
          borderT=""       
        />

        <NavText 
          onClick = {onContClick}
          text ="Contact" 
          borderT=""         
        />
      </LinkCont>
      
      <LinkVer />
    </Container>
  );
}

export default NaviDef;