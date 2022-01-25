import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
import NaviMobile from '../NaviMobile';
import NaviDef from '../NaviDef';


// ============ CSS ============== //
const Container = styled.div`    
  height: calc(100vh);
  // width: 110px;
  // min-width: 110px;
  // background-color: #000;
  // box-sizing: border-box;
  // display: flex;
  // flex-direction: column;
  // align-items:center;
  // justify-content:center;

  // @media only screen and (min-width: 1px) and (max-width: 768px){
  //   width: 100%;
  // }
`;


// ============ Layout
const NavWeb =({

// ============ Props  

})=>{
  
  return (
    <Container>   
      <NaviDef />
      <NaviMobile />
    </Container>
  );
}

export default NavWeb;