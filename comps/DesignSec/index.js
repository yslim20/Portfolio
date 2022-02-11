import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css'
import { useTheme } from "@/utils/provider";
import { lylac, themes } from '@/utils/variables';

import Button from '../Button';
import Scroll from '../Scroll';
import DivImg from '../DivImg';
import ImageBox from '../ImageBox';
import ImagePopOne from '../ImagePopOne';
import ImagePopTwo from '../ImagePopTwo';
import Mediabox from '../Mediabox';
import IllustBox from '../IllustBox';

// ============ CSS ============== //
const Cont = styled.div`  
  width: 100%;
  display: flex;
  flex-direction: column;
  // padding: 5% 9.02%;
  position: relative;
  // overflow: hidden;
  background: #000;
  z-index: 1;  
  box-sizing: border-box;
  
`

const Title = styled.h5`
  width: 100%;
  padding: 5% 9.02%;
  margin-bottom: 30px;
  color: ${props => props.titColor};
  transition: all 0.3x;
  position: relative;

  @media only screen and (min-width: 461px) and (max-width:1000px){    
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 1px) and (max-width:460px){    
    font-size: 1.25em;
    font-weight: 700; 
    margin-bottom: 30px;
  }
`

const ShapeCont = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: -9;

  @media only screen and (min-width: 1000px) and (max-width: 1024px){   
    transform: scale(0.8);
    top: ${props => props.topM};
    left: ${props => props.leftM};
  }

  @media only screen and (min-width: 1px) and (max-width: 800px){    
    top: ${props => props.topM}px;
    left: ${props => props.leftM};
    transform: scale(0.7);
    transition: all 1s;
    diplay: none; 
  } 
`

const IllCont = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: row;
  margin: 0; padding: 0;

  @media only screen and (min-width: 769px) and (max-width: 1024px){   

    flex-direction: column;
  }

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    width: 100%; 
    flex-direction: column;
  }  
`

const IllItem = styled.div`
  width: 30%; height: 500px;
  display: flex;

  @media only screen and (min-width: 769px) and (max-width: 1024px){   
    width: 100%; 
  }

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    width: 100%; 
  } 


   
`

const InCont = styled.div`
  width: 100%; height: 500px;
  background: blue;
`

const PhoCont = styled.div`
  width: 100%; height: 500px;
`


const DesignSec = ({

  // onButtonClick = () => {},
  url = "./images/img_Cross.svg",
  top = "10%",
  left ="5%", 
  topM = "5%",
  leftM = "",
  shapeWidth = 13,
  shapeHeight = 57,


}) => {

  const {theme, setTheme} = useTheme();
  const [showpos, setShowPos] = useState(false)	
  const [showVidPop, setShowVidPop] = useState(false)	

  function handleClick() {
		setShowPos(true)	
	}  
  function handleClickClose(e){
    e.stopPropagation()
    setShowPos(false)
	}
  
  function handleVidClick() {
    setShowVidPop(true)
  }
  function handleVideoClose(e){
		e.stopPropagation()
    setShowVidPop(false)
	}

  return (
    <Cont>
      <Title titColor = {lylac[theme]}>
        Digital Design      
      </Title>
      <ShapeCont
        url = {url} 
        top = {top}
        left = {left}  
        topM = {topM}   
        leftM = {leftM}
        width = {shapeWidth}
        height = {shapeHeight}
      />

      <IllCont>
        <IllItem>
          <IllustBox
            clickHandler={() => handleClick()}
          />
          {showpos === true && <ImagePopTwo 
            clickHandler={(e) => handleClickClose(e)}				
          />}
        </IllItem>

         {/*<IllItem
          onClick={() => handleClick()}
        >
          {showpop === true && <ImagePopTwo 
            clickHandler={(e) => handleClickClose(e)}				
          />} 
        </IllItem>*/}

      </IllCont>
      

      <InCont
        onDoubleClick={() => handleVidClick()}
      >
        {showVidPop === true && <Mediabox 
          clickHandler={(e) => handleVideoClose(e)}				
        />}
      </InCont>

      <PhoCont>

      </PhoCont>      
    </Cont>
    );
}

export default DesignSec;
