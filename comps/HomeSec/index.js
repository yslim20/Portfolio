import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css'
import { useTheme } from "@/utils/provider";
import { lylac, ltLylac, medBlue } from '@/utils/variables';

import Button from '../Button';
import DivImg from '../DivImg';
import Scroll from '../Scroll';

// ============ CSS ============== //
const Cont = styled.div`  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 9.02%;
  background: #101010;
  position: relative;
  overflow: hidden;
  z-index: 1;  
  box-sizing: border-box;
  position: relative;
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
    justify-content: flex-start;
    align-items:flex-start;
  }
`

const SubTit = styled.p`
  width: 100%;
  color: ${props => props.subColor};

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    font-size: 0.875em;
    font-weight: 500;
  }
`

const NameTxt = styled.h2`
  width: 100%;
  color: ${props => props.h2Color};

  background-image: linear-gradient(
    -225deg,
    #CA91F2 0%,
    #5550F2 29%,
    #D7AEF2 67%,
    #CA91F2 100%      
  );

  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 6s linear infinite;
  display: inline-block;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }

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
  line-height: 1.5em;
  color: ${props => props.h3Color};

  :after {
    content:"front-end developer 👩‍💻";
    -webkit-animation: spin 5s linear infinite;
       -moz-animation: spin 5s linear infinite;
        -ms-animation: spin 5s linear infinite;
         -o-animation: spin 5s linear infinite;
            animation: spin 5s linear infinite; 


// test

      -webkit-animation-name: spin;
      -webkit-animation-duration: 5s;
      -webkit-animation-delay: 0s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-timing-function: ease;
      -webkit-animation-direction: linear;
      -webkit-animation-fill-mode: none;
      -webkit-animation-play-state: running;

      animation-name: spin;
      animation-duration: 5s;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-timing-function: ease;
      animation-direction: linear;
      animation-fill-mode: none;
      animation-play-state: running;

// test

  }

  @keyframes spin {
    0% { content:"front-end developer 👩‍💻";}
    50% { content: "UX/UI designer 🎨"; }
  }

  -webkit-@keyframes spin {
    0% { content:"front-end developer 👩‍💻";}
    50% { content: "UX/UI designer 🎨"; }
  }

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
  width: 101%;
  height: 100%;
  display: block;  
  position: absolute;
  bottom: -1px;
  left: 0px;
  z-index: -99;

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
    bottom: 15%;
    transition: all 0.3s ease-in-out; 
    -webkit-transition: all 0.3s ease-in-out; 
    -o-transition: all 0.3s ease-in-out; 
    -moz-transition: all 0.3s ease-in-out; 
  }

  @media only screen and (min-width: 1px) and (max-width:460px){    
    width: 2.5em; height: 2.5em;    
    bottom: 10%;
    transition: all 0.3s ease-in-out; 
    -webkit-transition: all 0.3s ease-in-out; 
    -o-transition: all 0.3s ease-in-out; 
    -moz-transition: all 0.3s ease-in-out; 
  }
`


const HomeSec = ({

  onButtonClick = () => {},

}) => {

  const {theme, setTheme} = useTheme();

  return (
    <Cont>
      <Scroll />

      <TxtCont>
        <SubTit
          subColor = {medBlue[theme]}
        >
          Hello, I am ...
        </SubTit>
        <NameTxt
          h2Color = {lylac[theme]}
        >
          Youn Soo Lim,
        </NameTxt>
        <Position
          h3Color = {ltLylac[theme]}
        >

        </Position>
        <ExTxt>
          Passionate about front-end development and UX/UI design. I am excited to bring my creativity  and marketing expertise to digital design and development through my previous professional experience in design and manufacturing.
        </ExTxt>
        
        <Button
          conwidth = ''
          onClick={onButtonClick}   
          width='242px'     
        />
      </TxtCont>

      <DivCont>
        <DivImg 
          url = "./images/img_Div_whiteBttm.svg"
          position = "left bottom"
        />
      </DivCont>
      <SqCont />
    </Cont>
    );
}

export default HomeSec;
