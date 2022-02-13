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
    display: none;  

  @media only screen and (min-width: 1px) and (max-width: 1000px){ 
    display: block;   
    width: 100%;
    display: flex;
    flex-direction: ${props => props.direction}; 
    align-items: center;
    justify-content: center;  
    position: relative;
    padding: 0 3%;
    margin-bottom: 50px;
  } 
`;

const ContCont = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  margin-bottom: ${props => props.contContMB}px;
`

const WebProjTit = styled.h4`
  width: 100%;
  margin-bottom: ${props => props.TitMarginB}px; 
  z-index: 1;
  font-size: 2.125em;
`

const WebProjText = styled.p`
  width:100%;
  margin-bottom: ${props => props.TxtMarginB}px;
  font-size: 0.875em;
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
  transform: scale(0.7);
  transition: all 1s;
`
const ProImg = styled.img`
  width: 100%; height: auto;
  display: block;
  object-fit: contain;
  margin-bottom: 50px;
`

const BttnCont = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;  
`


// ============ Function ============== //

const WebProjMob = ({ 

// ============ Props
  direction = "column",
  justify="flex-start", 

  leftonClick = () => {},
  rightonClick = () => {},

  url = "./images/projects/img_MyLandlord.png",
  top = "",
  left = -20, 

  title = "MyLandlord",
  span = "MyLandlord",
  text = "is a website that is targeted towards residents looking to find an ideal Landlord to rent from in the lower mainland. MyLandlord provides a safe platform for tenants and landlords to communicate and allows tenants to leave honest reviews during their time with the landlord to help other prospective renters.",
  TitMarginB = 20,
  TxtMarginB = "",

  src = "./images/projects/img_MyLandlord.png",

  contContMB = 50,

  imgMarginL = "5%",
  imgMarginR = "0",

  shapeWidth = "",
  shapeHeight = "",

  bttnTxtL = 'Homepage',
  bttnTxtR = 'GitHub',

}) => {
  
  const router = useRouter();
  const {theme, setTheme} = useTheme();
  useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

// ============ Layout
  return (
    <WebProjCont 
      data-aos="fade-up"
      direction={direction}
      justify={justify}
    >
      <ProImg 
        src = {src}  
        marginL = {imgMarginL}
        marginR = {imgMarginR} 
      />

      <ContCont contContMB ={contContMB}>
        <ShapeCont
          url = {url} 
          top = {top}
          left = {left}  
          width = {shapeWidth}
          height = {shapeHeight}
        />
        <WebProjTit TitMarginB = {TitMarginB} >            
          {title}
        </WebProjTit>

        <WebProjText TxtMarginB = {TxtMarginB} >
          <ColorTxt
            spanColor = {medBlue[theme]}
          >{span}</ColorTxt>
          {text}
        </WebProjText>

        <BttnCont>
          <Button 
            onClick={leftonClick}
            text = {bttnTxtL}
            width='100%'
            marginright = "20"
          />
          <Button 
            onClick= {rightonClick}
            text = {bttnTxtR}
            width='100%'
          />
        </BttnCont>

      </ContCont>
    </WebProjCont>
  );
}

export default WebProjMob;
