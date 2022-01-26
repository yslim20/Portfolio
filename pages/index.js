import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import FocusLock from 'react-focus-lock';

import NaviMobile from '@/comps/NaviMobile';
import NaviDef from '@/comps/NaviDef';
import LinkHor from '@/comps/LinkHor';


// ============ CSS ============== //
const Cont = styled.div`  
  display: flex;
  flex-direction: row;
`

const DefCont = styled.div`
  height: calc(100vh);
  width: 110px;
  position: relative;
  top: 0;
  left: 0;

  @media only screen and (min-width: 1px) and (max-width: 768px){
    display: none;
  }
`
const MobCont = styled.div`
  display: none;
  
  @media only screen and (min-width: 1px) and (max-width: 768px){    
    display: block;
  }
`

const SecCont = styled.div`  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`

export default function Home() {

  return (
    <Cont>
{/* Navigations */}
      <DefCont>
        <NaviDef />
      </DefCont>      
      <MobCont>
        <NaviMobile />        
      </MobCont> 
{/* Navigation ends */}

      <SecCont>

      </SecCont>

      
      
      
    </Cont>
  )
}
