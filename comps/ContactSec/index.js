import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css';
import Desc from '@/comps/Desc';
import DivImg from '@/comps/DivImg';
import Contact from '@/comps/Contact';

import { useTheme } from "@/utils/provider";
import { themes, ltLylac } from '@/utils/variables';


// ============ CSS ============== //
const Cont = styled.div`  
  width: 100%; height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0 9.02%;
  padding-down: 5%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    flex-direction: column;
    align-items: center;  
    justify-content center; 
    height: 100%; 
  }
`

const ImgCont = styled.div`
  width: 100%; height: 100%; 
  background-image: url("./images/img_Background_contact.svg");
  background-repeat: no-repeat;
  background-size: cover;
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

const DivCont = styled.div`
  width: 101%;
  height: 100%;
  display: block;  
  position: absolute;
  top: -1px;
  left: -1px;
  z-index: -99;
  over-flow: hidden;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    background-size: 150%;
    transition: all 0.3s;
  }
`

const ContCont = styled.div`
  width: 55%;
  margin-right: 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 481px) and (max-width: 1000px){
    width: 80%;
    margin-right: 0; 
  }

  @media only screen and (min-width: 1px) and (max-width: 480px){
    width: 100%;
    margin-right: 0; 
  }
`

const CirCont = styled.div`
  width: 4.0625em; height: 6.6875em;
  background-image: url("./images/img_CircleCross.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  position: absolute;
  bottom: 2em; right: 7em;
  z-index: -1;

  @media only screen and (min-width: 551px) and (max-width: 1000px){    
    width: 3.5em;
    bottom: -4.5em;  right: 2em;
    transition: all 0.3s;
  }

  @media only screen and (min-width: 1px) and (max-width:550px){    
    display: none;
  }
`


const ContactSec = ({
  topL = 15,
  topR = 50,

}) => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Cont>
      <DivCont>
        <DivImg 
          url = "/images/img_Div_Black.svg"
          position = "left top"
        />
      </DivCont>
      <ImgCont />

      <ContCont>
        <Contact />
      </ContCont>


      <ContCont>
        <CirCont />
      </ContCont>

    </Cont>
    );
}

export default ContactSec;
