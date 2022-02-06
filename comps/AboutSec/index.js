import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css';
import Desc from '@/comps/Desc';
import DivImg from '@/comps/DivImg';

import { useTheme } from "@/utils/provider";
import { themes, ltLylac } from '@/utils/variables';


// ============ CSS ============== //
const Cont = styled.div`  
  width: 100%; height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  padding: 0 9.02%;
  position: relative;
  // overflow: hidden;
  z-index: -1;  
  
  box-sizing: border-box;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    flex-direction: column;
    align-items: center;  
    justify-content center; 
    height: 100%; 
    margin-bottom: 100px;
  }
`

const ImgCont = styled.div`
  width: 100%; height: 100%; 
  background-image: url("./images/img_Background.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-attachment: fixed; 
  opacity: 0.2;
  position: absolute;
  bottom: 0; left: 0;
  z-index: -999;  
  box-sizing: border-box;  

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    background-size: 100%;
  }
`

const DesContL = styled.div`
  width: 45%; 
  display: flex;
  flex-direction: column;  
  align-items: flex-start;
  // margin-top: ${props => props.marginT}%;
  box-sizing: border-box;
  position: relative;
  top: ${props => props.top}%;
  transition: all 0.3s;
  
  @media only screen and (min-width: 1px) and (max-width: 1000px){
    width: 100%;
    align-items: center;
    justify-content: center;
    top: 5%; left: -10%;
    margin-bottom: 48px;    
  }
`

const DesContR = styled.div`
  width: 45%; 
  display: flex;
  flex-direction: column;  
  align-items: flex-end;
  box-sizing: border-box;
  position: relative;
  top: ${props => props.top}%;
  transition: all 0.3s;
  
  @media only screen and (min-width: 1px) and (max-width: 1000px){
    width: 100%;
    align-items: center;
    justify-content: center;
    position: static;
    left: 10%;
  }
`

const DivCont = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: -1px;
  left: 0px;
  z-index: -10;
`

const CirCont = styled.div`
  width: 4.0625em; height: 4.0625em;
  background-image: url("./images/img_Circles.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  position: absolute;
  top: -6em;
  left: 0;
  z-index: -1;

  @media only screen and (min-width: 461px) and (max-width: 1000px){    
    width: 3em; height: 3em;    
    transition: all 0.3s;
  }

  @media only screen and (min-width: 1px) and (max-width:460px){    
    display: none;
  }
`


const AboutSec = ({
  topL = 15,
  topR = 50,

}) => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Cont>
      <DivCont>
        <DivImg url ="" />
      </DivCont>

      <DesContL
        top ={topL}
      >
        <Desc 
          bkColor={ltLylac[theme]}
          TxtMarginB = "30"  
                  
        />
      </DesContL>

      <DesContR 
        top = {topR}
      >
        <CirCont />
        <Desc flip = {true} />
      </DesContR>      
      <ImgCont/>
    </Cont>
    );
}

export default AboutSec;
