import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css'
import Button from '../Button';
import DivImg from '../DivImg';

// ============ CSS ============== //
const Cont = styled.div`  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 9.02%;
  background: #000;
  position: relative;
  overflow: hidden;
  z-index: 1;  
  box-sizing: border-box;
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

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    font-size: 0.875em;
    font-weight: 500;
  }
`

const NameTxt = styled.h2`
  width: 100%;
  color: #2CCCC3;

  @media only screen and (min-width: 459px) and (max-width: 1000px){    
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

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    font-size: 2.125em;
    font-weight: 700; 
  }
`

const ExTxt = styled.p`
  width: 55%;
  color: #999;

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    width: 100%;
    font-size: 0.875em;
  }
`

const DivCont = styled.div`
  width: 100%;
  height: 100%;
  display: block;  
  position: absolute;
  bottom: 0;
  left: 0px;
  z-index: -1;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    background-size: 150%;
    transition: all 0.3s;
  }
`

const SqCont = styled.div`
  width: 4.25em; height: 4.25em;
  background-image: url("./images/img_Square.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  position: absolute;
  bottom: 17.57%;
  right: 12.5%;
  z-index: -1;

  @media only screen and (min-width: 459px) and (max-width: 1000px){    
    width: 3em; height: 3em;    
    bottom: 10%;
    transition: all 0.3s;
  }

  @media only screen and (min-width: 1px) and (max-width:460px){    
    width: 2.5em; height: 2.5em;    
    bottom: 6%;
    transition: all 0.3s;
  }

`


const HomeSec = ({

  onButtonClick = () => {},

}) => {
  return (
    <Cont>

      <TxtCont>
        <SubTit>
          Hello, I am ...
        </SubTit>
        <NameTxt>
          Youn Soo Lim,
        </NameTxt>
        <Position>
          front-end developer
        </Position>
        <ExTxt>
          Passionate about front-end development and UX/UI design. I am excited to bring my creativity  and marketing expertise to digital design and development through my previous professional experience in design and manufacturing.
        </ExTxt>
        <Button
          onClick={onButtonClick}        
        />
      </TxtCont>

      <DivCont>
        <DivImg 
          url = "./images/img_Div_purBttm.svg"
          position = "left bottom"
        />
      </DivCont>
      <SqCont />
    </Cont>
    );
}

export default HomeSec;
