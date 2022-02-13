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
  width: 100%; height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 9.02%;
  position: relative;
  z-index: -2;  
  
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
  width: 100%;
  height: 100%;
  display: block;  
  position: absolute;
  bottom: 0;
  left: 0px;
  z-index: -99;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    background-size: 150%;
    transition: all 0.3s;
  }
`

const ContCont = styled.div`
  width: 50%;
  margin-left: 45%;
  margin-top: 5%;
  box-sizing: border-box;
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
          url = "./images/img_Div_Black.svg"
          position = "left top"
        />
      </DivCont>
      <ImgCont />

      <ContCont>
        <CirCont />
      </ContCont>

    </Cont>
    );
}

export default ContactSec;
