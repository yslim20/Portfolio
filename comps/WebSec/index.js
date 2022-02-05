import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css'
import Button from '../Button';
import Scroll from '../Scroll';
import DivImg from '../DivImg';
import WebProj from '../WebProj';

// ============ CSS ============== //
const Cont = styled.div`  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 9.02%;
  background: #2CCCC3;
  position: relative;
  overflow: hidden;
  z-index: 1;  
  `
  
  const TxtCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  justify-content:center;
  align-items:flex-start;
  
  @media only screen and (min-width: 1px) and (max-width: 1000px){
    padding: 0 1.5em;
    justify-content:center;
    align-items:flex-start;
  }
`

const SubTit = styled.p`
  width: 100%;
  color: #E60576;

  @media only screen and (min-width: 1px) and (max-width:1000px){    
    font-size: 0.875em;
    font-weight: 500;
  }
`

const NameTxt = styled.h2`
  width: 100%;
  color: #2CCCC3;

  @media only screen and (min-width: 461px) and (max-width:1000px){    
    font-size: 3em;
    font-weight: 700; 
  }

  @media only screen and (min-width: 1px) and (max-width:460px){    
    font-size: 2.5em;
    font-weight: 700; 
  }
`

const Position = styled.h3`
  width: 100%;
  color: #2CCCC3;

  @media only screen and (min-width: 1px) and (max-width:1000px){    
    font-size: 2.125em;
    font-weight: 700; 
  }
`

const ExTxt = styled.p`
  width: 55%;
  color: #999;

  @media only screen and (min-width: 1px) and (max-width:1000px){    
    width: 100%;
    font-size: 0.875em;
  }
`

const DivConT = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -99;

  @media only screen and (min-width: 1px) and (max-width:1000px){
    background-size: 150%;
    transition: all 0.3s;
  }
`

const DivConB = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -99;

  @media only screen and (min-width: 1px) and (max-width:1000px){
    background-size: 150%;
    transition: all 0.3s;
  }
`


const WebSec = ({

  // onButtonClick = () => {},

}) => {
  return (
    <Cont>
      <DivConT>      
        <DivImg 
          url = "./images/img_Div_white.svg"
        />
      </DivConT>

      <WebProj />


      <DivConB>
        <DivImg 
          url = "./images/img_Div_yellowBttm.svg"
          position = "left bottom"
        />
      </DivConB>
      <Scroll />      
      
    </Cont>
    );
}

export default WebSec;
