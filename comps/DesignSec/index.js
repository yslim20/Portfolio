import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css'
import { useTheme } from "@/utils/provider";
import { lylac, themes } from '@/utils/variables';

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
  background: #000;
  z-index: 1;  
  box-sizing: border-box;  
  padding-bottom: 100px;
  background-color: #000;
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

const ThreeCont = styled.div`
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

const ThreeItem = styled.div`
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
const SqCont = styled.div`
  width: 4.25em; height: 4.25em;
  background-image: url("./images/img_Square.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  position: absolute;
  bottom: 2.5%;
  right: 8%;
  z-index: -1;

  @media only screen and (min-width: 459px) and (max-width: 1000px){    
    width: 3em; height: 3em;    
    bottom: 1.5%;
    transition: all 0.3s ease-in-out; 
    -webkit-transition: all 0.3s ease-in-out; 
    -o-transition: all 0.3s ease-in-out; 
    -moz-transition: all 0.3s ease-in-out; 
  }

  @media only screen and (min-width: 1px) and (max-width:460px){    
    width: 2.5em; height: 2.5em;    
    bottom: 1.5%;
    transition: all 0.3s ease-in-out; 
    -webkit-transition: all 0.3s ease-in-out; 
    -o-transition: all 0.3s ease-in-out; 
    -moz-transition: all 0.3s ease-in-out; 
  }
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
// ========== illustrator
  const [showpos, setShowPos] = useState(false)	
  const [showtech, setShowTech] = useState(false)	
  const [showart, setShowArt] = useState(false)	

// ========== inDesign
  const [setmag, setShowMagPop] = useState(false)
  const [setmed, setShowMedPop] = useState(false)	

// ========== photoshop
  const [showmov, setShowMov] = useState(false)	
  const [showpho, setShowPhoPop] = useState(false)	
  const [showport, setShowPortPop] = useState(false)	

// ========== illustrator
  function handlePosClick() {
		setShowPos(true)
    setShowTech(false)
    setShowArt(false)	
    setShowMagPop(false)
    setShowMedPop(false)
    setShowMov(false)
    setShowPhoPop(false)
    setShowPortPop(false)
	}  
  function handlePosClose(e){
    e.stopPropagation()
    setShowPos(false)
	}

  function handleTechClick(e) {
		setShowPos(false)
    setShowTech(true)
    setShowArt(false)	
    setShowMagPop(false)
    setShowMedPop(false)
    setShowMov(false)
    setShowPhoPop(false)
    setShowPortPop(false)
	}  
  function handleTechClose(e){
    e.stopPropagation()
    setShowTech(false)
	}
  
  function handleArtClick(e) {
		setShowPos(false)
    setShowTech(false)
    setShowArt(true)	
    setShowMagPop(false)
    setShowMedPop(false)
    setShowMov(false)
    setShowPhoPop(false)
    setShowPortPop(false)	
	}  
  function handleArtClose(e){
    e.stopPropagation()
    setShowArt(false)
	} // illustrator

// ========== inDesign
  function handleMagClick() {
    setShowPos(false)
    setShowTech(false)
    setShowArt(false)	
    setShowMagPop(true)
    setShowMedPop(false)
    setShowMov(false)
    setShowPhoPop(false)
    setShowPortPop(false)
  }
  function handleMagClose(e) {
    e.stopPropagation()
    setShowMagPop(false)
  }

  function handleMedClick() {
    setShowPos(false)
    setShowTech(false)
    setShowArt(false)	
    setShowMagPop(false)
    setShowMedPop(true)
    setShowMov(false)
    setShowPhoPop(false)
    setShowPortPop(false)
  }
  function handleMedClose(e){
		e.stopPropagation()
    setShowMedPop(false)
	} // inDesign

// ========== photoshop
  function handleMovClick(e) {
		setShowPos(false)
    setShowTech(false)
    setShowArt(false)	
    setShowMagPop(false)
    setShowMedPop(false)
    setShowMov(true)
    setShowPhoPop(false)
    setShowPortPop(false)	
	}  
  function handleMovClose(e){
    e.stopPropagation()
    setShowMov(false)
	}

  function handlePhoClick() {
    setShowPos(false)
    setShowTech(false)
    setShowArt(false)	
    setShowMagPop(false)
    setShowMedPop(false)
    setShowMov(false)
    setShowPhoPop(true)
    setShowPortPop(false)
  }
  function handlePhoClose(e) {
    e.stopPropagation()
    setShowPhoPop(false)
  }

  function handlePortClick() {
    setShowPos(false)
    setShowTech(false)
    setShowArt(false)	
    setShowMagPop(false)
    setShowMedPop(false)
    setShowMov(false)
    setShowPhoPop(false)
    setShowPortPop(true)
  }
  function handlePortClose(e){
		e.stopPropagation()
    setShowPortPop(false)
	} // photoshop

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

{/* =========== Illustrator =========== */}
      <ThreeCont>
        <ThreeItem>
          <ThumbBox
            clickHandler={() => handlePosClick()}
          />
          {showpos === true && <ImagePopTwo 
            clickHandler={(e) => handlePosClose(e)}				
          />}
        </ThreeItem>

         <ThreeItem>
          <ThumbBox
            clickHandler={() => handleTechClick()}            
            title="Illustrator: Technical Drawing"
            url="./images/design/img_Illust_technical.svg"
            bkSize = "130"
          />
          {showtech === true && <ImagePopOne 
            clickHandler={(e) => handleTechClose(e)}		
            width = "60"
            marginL = '-25'
            marginT = '-20'
            tMarginL = '-25'
            tMarginT = '-20'
          />} 
        </ThreeItem>

        <ThreeItem>
          <ThumbBox
            clickHandler={() => handleArtClick()}            
            title="Illustrator: Digital Art"
            url="./images/design/img_Illust_art.svg"
            bkSize = "130"
          />
          {showart === true && <ImagePopOne 
            src="./images/design/illust/design_Illust_CreativeArt.svg"
            clickHandler={(e) => handleArtClose(e)}		
          />} 
        </ThreeItem>
      </ThreeCont>   

{/* ===========inDesign =========== */}
      <InCont>
        <InItem>
          <ThumbBox
              clickHandler={() => handleMagClick()}            
              title="InDesign: Magazine"
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
              title="InDesign: eBook - Images by EAKEAK, kostymo, absent84, MicroOne,andriocolts and more - stock.adobe.com"
              url="./images/design/img_Indesign_eBook.png"
              bkSize = "130"
              mbkPos = '75% 25%'
            />
            {setmed === true && <Mediabox 
              clickHandler={(e) => handleMedClose(e)}		
            />} 
        </InItem>
      </InCont>

{/* =========== Photoshop =========== */}
      <ThreeCont>
        <ThreeItem>
          <ThumbBox
              clickHandler={() => handleMovClick()}            
              title="Photoshop: Movie Poster"
              url="./images/design/design_Photo_Poster.svg"
              bkSize = "130" 
            />
            {showmov === true && <ImagePopOne 
              src="./images/design/photoshop/design_Movie_Poster.svg"
              marginT = '-26.5' tMarginT = '-37'
              mHeight='auto' mWidth='auto'  mMartinT = '-77.5'
              clickHandler={(e) => handleMovClose(e)}		
            />} 
          </ThreeItem>

         <ThreeItem>
         <ThumbBox
            clickHandler={() => handlePhoClick()}            
            title="Photoshop: Digital Art"
            url="./images/design/img_Photo_Digital_art.png"
            bkSize = "130"
          />
          {showpho === true && <ImagePopOne 
            src="./images/design/photoshop/design_Photo_CreativeArt.png"
            mHeight='auto' mWidth='auto'  mMartinT = '-65'
            clickHandler={(e) => handlePhoClose(e)}		
          />} 
        </ThreeItem>

        <ThreeItem>
          <ThumbBox
            clickHandler={() => handlePortClick()}            
            title="Photoshop: Portrait"
            url="./images/design/img_Photo_Portrait.svg"
            bkSize = "130"
          />
          {showport === true && <ImagePopOne 
            src="./images/design/photoshop/design_Portrait.svg"
            marginT = '-30' tMarginT = '-37'
            mHeight='auto' mWidth='auto'  mMartinT = '-77.5'
            clickHandler={(e) => handlePortClose(e)}		
          />} 
        </ThreeItem>
      </ThreeCont>   

      <SqCont /> 
    </Cont>
    );
}

export default DesignSec;
