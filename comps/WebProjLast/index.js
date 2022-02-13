import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import {useRouter} from 'next/router';
import { useTheme } from "@/utils/provider";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Button from '../Button';
import { medBlue } from '@/utils/variables';

// ============ CSS ============== //
const WebProjCont = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: ${props => props.direction}; 
  align-items: center;
  justify-content: center;  
  position: relative;
  padding: 0 3%;
  margin-bottom: 80px;

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    width: 100%;
    flex-direction: column;    
  } 
`;

const ContCont = styled.div`
  width: 45%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  margin-right: ${props => props.marginR};
  margin-left: ${props => props.marginL};

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    width: 100%;
    margin-bottom: 50px;
    margin-right: 0;
    margin-left: 0;
  } 
`

const WebProjTit = styled.h4`
  width: 100%;
  margin-bottom: ${props => props.TitMarginB}px; 
  z-index: 1;

  // @media only screen and (min-width: 1px) and (max-width: 1000px){    
  //   font-size: 2.125em;
  // } 
`

const WebProjText = styled.p`
  width:100%;
  margin-bottom: ${props => props.TxtMarginB}px;

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    font-size: 0.875em;
  } 
`

const ColorTxt = styled.span`
  color: ${props => props.spanColor};
  display: inline; margin-right: 5px;
  font-weight: 500;
`

const ShapeCont = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  position: relative;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  z-index: -9;

  @media only screen and (min-width: 801px) and (max-width: 1024px){   
    transform: scale(0.8);
    top: ${props => props.topM}px;
    left: ${props => props.leftM}px;
    transition: all 1s;
  }

  @media only screen and (min-width: 1px) and (max-width: 800px){    
    transform: scale(0.7);
    top: ${props => props.topM}px;
    left: ${props => props.leftM}px;
    transition: all 1s;
  } 
`
const ProImg = styled.img`
  width: 45%; height: auto;
  display: block;
  object-fit: contain;
  margin-left: ${props => props.marginL};
  margin-right: ${props => props.marginR};

  @media only screen and (min-width: 1px) and (max-width: 1000px){   
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`

const BttnCont = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;  
`


// ============ Function ============== //

const WebProjLast = ({ 

// ============ Props
  flip = false,
  direction = "row",
  justify="flex-start", 

  onClick = () => {},

  url = "./images/img_Pro_Triangle-line.svg",
  top = 15,
  left = -260, 
  topM = 20, 
  leftM = 0,

  TitMargin = 20,
  TxtMargin = "",

  title = "About Kingdom",
  span ='About Kingdom',
  text ='is a blog site with information about the Korean drama series, The Kingdom, which aired on Netflix in 2019. The website features character profiles, synopses, and bios for the writer and producer. Additionally, it contains information about the original comic book, costumes, filming locations, and news about the upcoming season.',
  
  src = "./images/projects/img_Kingdom.png",

  marginR = "0",
  marginL = "5%",
  imgMarginL = "0",
  imgMarginR = "5%",
  shapeWidth = 41,
  shapeHeight = 41,

  bttnTxt = 'Homepage',

}) => {
  
  const router = useRouter();
  const {theme, setTheme} = useTheme();

  useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

// ============ Layout
  return (
    <WebProjCont 
      direction={direction}
      justify={justify}
      data-aos="fade-up"
    >
      <ProImg 
        src = {src}
        marginL = {imgMarginL}
        marginR = {imgMarginR} 
      />

      <ContCont  marginR = {marginR} marginL = {marginL}>
        <ShapeCont
          url = {url} 
          top = {top}
          left = {left}  
          width = {shapeWidth}
          height = {shapeHeight}
          topM = {topM}   
          leftM = {leftM}
        />
        <WebProjTit TitMarginB = {TitMargin} >
          {title}
        </WebProjTit>

        <WebProjText TxtMarginB = {TxtMargin} >
          <ColorTxt
            spanColor = {medBlue[theme]}
          >{span}</ColorTxt>
          {text}
        </WebProjText>

        <BttnCont>
          <Button 
            onClick={onClick}
            text = {bttnTxt}
            width='50%'
            marginright = "20"
          />
        </BttnCont>
      </ContCont>        
    </WebProjCont>
  );
}

export default WebProjLast;
