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
import ImagePopMag from '../ImagePopMag';
import Mediabox from '../Mediabox';
import ThumbBox from '../ThumbBox';

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
  // margin-bottom: 30px;
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
  margin-bottom: 20px;

  @media only screen and (min-width: 769px) and (max-width: 1024px){   

    flex-direction: column;
  }

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    width: 100%; 
    flex-direction: column;
  }  
`

const IllItem = styled.div`
  width: 33.33%; height: 500px;
  display: flex;
  box-sizing: border-box;

  @media only screen and (min-width: 769px) and (max-width: 1024px){   
    width: 100%; 
  }

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    width: 100%; 
  } 
`

const InCont = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: row;
  margin: 0; padding: 0;
  margin-bottom: 20px;

  @media only screen and (min-width: 769px) and (max-width: 1024px){
    flex-direction: column;
  }

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    width: 100%; 
    flex-direction: column;
  }  
`

const InItem = styled.div`
  width: 50%; height: 320px;
  display: flex;
  box-sizing: border-box;

  @media only screen and (min-width: 769px) and (max-width: 1024px){   
    width: 100%; 
  }

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    width: 100%; 
  } 
`

const PhoCont = styled.div`
  width: 100%; height: 500px;
`

const DesignSec = ({
  url = "./images/img_Cross.svg",
  top = "1%",
  left ="5%", 
  topM = "5%",
  leftM = "",
  shapeWidth = 13,
  shapeHeight = 57,


}) => {

  const {theme, setTheme} = useTheme();
  const [showpos, setShowPos] = useState(false)	
  const [showtech, setShowTech] = useState(false)	
  const [showart, setShowArt] = useState(false)	
  const [setmag, setShowMagPop] = useState(false)
  const [setmed, setShowMedPop] = useState(false)	

  function handlePosClick() {
		setShowPos(true)
    setShowTech(false)
    setShowArt(false)	
	}  
  function handlePosClose(e){
    e.stopPropagation()
    setShowPos(false)
	}

  function handleTechClick(e) {
		setShowTech(true)	
    setShowPos(false)
    setShowArt(false)	
	}  
  function handleTechClose(e){
    e.stopPropagation()
    setShowTech(false)
	}
  
  function handleArtClick(e) {
		setShowArt(true)
    setShowPos(false)
    setShowTech(false)	
	}  
  function handleArtClose(e){
    e.stopPropagation()
    setShowArt(false)
	}

  function handleMagClick() {
    setShowMagPop(true)
  }

  function handleMagClose(e) {
    e.stopPropagation()
    setShowMagPop(false)
  }

  function handleMedClick() {
    setShowMedPop(true)
  }
  function handleMedClose(e){
		e.stopPropagation()
    setShowMedPop(false)
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
          <ThumbBox
            clickHandler={() => handlePosClick()}
          />
          {showpos === true && <ImagePopTwo 
            clickHandler={(e) => handlePosClose(e)}				
          />}
        </IllItem>

         <IllItem>
          <ThumbBox
            clickHandler={() => handleTechClick()}            
            title="Technical Drawing"
            url="./images/design/img_Illust_technical.svg"
            bkSize = "130%"
          />
          {showtech === true && <ImagePopOne 
            clickHandler={(e) => handleTechClose(e)}		
            width = "60"
            marginL = '-25'
            marginT = '-20'
            tMarginL = '-25'
            tMarginT = '-20'
          />} 
        </IllItem>

        <IllItem>
          <ThumbBox
            clickHandler={() => handleArtClick()}            
            title="Digital Art"
            url="./images/design/img_Illust_art.svg"
            bkSize = "130"
          />
          {showart === true && <ImagePopOne 
            src="./images/design/illust/design_Illust_CreativeArt.svg"
            clickHandler={(e) => handleArtClose(e)}		
          />} 
        </IllItem>
      </IllCont>
      

      <InCont>
        <InItem>
          <ThumbBox
              clickHandler={() => handleMagClick()}            
              title="Magazine"
              url="./images/design/img_Indesign_Magazine.png"
              bkSize = "130"
              mbkPos = '75% 25%'
            />
            {setmag === true && <ImagePopMag 
              clickHandler={(e) => handleMagClose(e)}		
            />} 
        </InItem>

        <InItem>
          <ThumbBox
              clickHandler={() => handleMedClick()}            
              title="eBook: Images by EAKEAK, kostymo, absent84, MicroOne,andriocolts and more - stock.adobe.com"
              url="./images/design/img_Indesign_eBook.png"
              bkSize = "130"
              mbkPos = '75% 25%'
            />
            {setmed === true && <Mediabox 
              clickHandler={(e) => handleMedClose(e)}		
            />} 
        </InItem>
      </InCont>

      <PhoCont>

      </PhoCont>      
    </Cont>
    );
}

export default DesignSec;
