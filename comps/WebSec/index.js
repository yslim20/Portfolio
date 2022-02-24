import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css'
import { useTheme } from "@/utils/provider";
import { lylac, medBlue, themes } from '@/utils/variables';

import Button from '../Button';
import Scroll from '../Scroll';
import DivImg from '../DivImg';
import WebProj from '../WebProj';
import WebProjLast from '../WebProjLast';
import WebProjMob from '../WebProjMob';

// ============ CSS ============== //
const Cont = styled.div`  
  width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 9.02%;
  position: relative;
  overflow: hidden;
  z-index: 1;  
  box-sizing: border-box;

  @media only screen and (max-width: 600px){
    padding: 9.02%;
  }
`

const ImgCont = styled.div`
  width: 100%; height: 100%; 
  background-image: url("./images/img_ProBackground.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-attachment: fixed; 
  opacity: 0.2;
  position: absolute;
  bottom: -1px; left: 0;
  z-index: -999;  
  box-sizing: border-box;  

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    background-size: 100%;
  }
`

const WebCont = styled.div`
  display: block;
  width: 100%; 

  @media only screen and (min-width: 1px) and (max-width:1000px){    
    diplay: none;
    width: 0; height: 0;
    overfolow: hiden;
  }
`
  
const Title = styled.h5`
  width: 100%;
  margin-bottom: 80px;
  color: ${props => props.titColor};
  transition: all 0.3x;
  position: relative;

  :before {
    content: "";
    width: 50px;
    position: absolute;
    left: 0;
    top: 35px;
    height: 1.5px;
    background: ${props => props.lineColor};
    transform-origin: left center;

    @media only screen and (min-width: 460px){
      width: 65px;
      top: 40px;
    }
  }

  @media only screen and (min-width: 461px) and (max-width:1000px){    

  }

  @media only screen and (min-width: 1px) and (max-width:460px){    
    font-size: 1.25em;
    font-weight: 700; 
  }
`

const DivConB = styled.div`
  width: 101%;
  height: 100%;
  display: block;
  position: absolute;
  bottom: -1px;
  left: 0;
  z-index: -99;
  overflow: hidden;

  @media only screen and (min-width: 1px) and (max-width:1000px){
    background-size: 150%;
    transition: all 0.3s;
  }
`


const WebSec = ({

  // onButtonClick = () => {},

}) => {

  const {theme, setTheme} = useTheme();
  
  return (
    <Cont>
      <ImgCont />
      <Title titColor = {medBlue[theme]} lineColor={lylac[theme]}>
        Web Development      
      </Title>

      <WebCont>

        <WebProj 
          // leftonClickT = {() => window.open('https://mylandlord-front-end.vercel.app', '_blank')}
          rightonClickT = {() => window.open('https://github.com/yslim20/MyLandlord-Front-End', '_blank')}    
        />

        <WebProj flip = {true} 
          leftonClickB = {() => window.open('https://revamp-yslim.vercel.app', '_blank')}
          rightonClickB = {() => window.open('https://github.com/yslim20/reVamp', '_blank')}
        />

        <WebProj 
          // url = "./images/img_ProTriangle.svg"        
          shapeHeightT = "34"
          shapeWidthT = "60"
          top = "45"
          left = "50"
          
          topM = ""
          leftM ='-10'

          titleOne = "irl_Dater"
          spanOne = "irl_Dater"
          textOne = "is a dating application designed to help users meet that special someone while having fun. The point system in this app helps users break the ice and get to know each other better."
          languageone = 'Figma, HTML, CSS, jQuery'
          srcT = "./images/projects/img_irl_Dater.png"

          rightonClickT = {() => window.open('http://irldater.younsoolim.com/', '_blank')}
          leftonClickT = {() => window.open('https://www.figma.com/proto/RRoFoBBwCjVylyz1niMRwD/idsp-but-its-figma?node-id=447%3A191&scaling=scale-down&page-id=399%3A7384&starting-point-node-id=495%3A10404', '_blank')}
        
          bttnTxtR = "Marketing Page"
          bttnTxtL = "Figma Protptype"
        />
      </WebCont>
      
      <WebProjMob 
        // leftonClick = {() => window.open('https://mylandlord-front-end.vercel.app', '_blank')}
        rightonClick = {() => window.open('https://github.com/yslim20/MyLandlord-Front-End', '_blank')}      
      />

      <WebProjMob 
        src = "./images/projects/img_reVamp.png"
        title = "reVamp"
        span = "reVamp"
        text = "is an application that shows how old clothes can be repurposed through its tutorials. It offers many different methods for upcycling clothing items. Additionally, the app aims to educate users about the relationship between sustainability and fast fashion."
        language = 'Next.js, React'
        leftonClick = {() => window.open('https://revamp-yslim.vercel.app', '_blank')}
        rightonClick = {() => window.open('https://github.com/yslim20/reVamp', '_blank')}
      />

      <WebProjMob 
        src = "./images/projects/img_irl_Dater.png"
        title = "irl_Dater"
        span = "irl_Dater"
        text = "is a dating application designed to help users meet that special someone while having fun. The point system in this app helps users break the ice and get to know each other better."
        language = 'Figma, HTML, CSS, jQuery'
        leftonClick = {() => window.open('https://www.figma.com/proto/RRoFoBBwCjVylyz1niMRwD/idsp-but-its-figma?node-id=495%3A10404&scaling=scale-down&page-id=399%3A7384&starting-point-node-id=495%3A10404', '_blank')}
        rightonClick = {() => window.open('http://irldater.younsoolim.com/', '_blank')}
        bttnTxtL = "Figma Protptype"
        bttnTxtR = "Marketing Page"
      />      

      <WebProjLast 
        onClick = {() => window.open('http://kingdom.younsoolim.com/', '_blank')}
      />

      
      <DivConB>
        <DivImg 
          url = "./images/img_Div_blackBttm.svg"
          position = "left bottom"
        />
      </DivConB>
      <Scroll />      
      
    </Cont>
    );
}

export default WebSec;
