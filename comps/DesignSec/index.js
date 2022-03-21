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
import Scroll from '../Scroll';

// ============ CSS ============== //
const Cont = styled.div`  
  width: 100%;
  display: flex;
  flex-direction: column;
  // padding: 5% 9.02%;
  position: relative;
  background: #101010;
  z-index: 1;  
  box-sizing: border-box;  
  padding-bottom: 100px;
  overflow: hidden;
  position: relative;
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

const DesCont = styled.div`
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

const TwoItem = styled.div`
  width: 50%; height: 350px;
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
  width: 100%; height: 290px;
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

// ========== photoshop
  const [showmov, setShowMov] = useState(false)	

// ========== illustrator
  const [showpos, setShowPos] = useState(false)	

// ========== inDesign
  const [setmag, setShowMagPop] = useState(false)

  // ========== photoshop
  function handleMovClick(e) {
		setShowPos(false)
    setShowMagPop(false)
    setShowMov(true)
	}  
  function handleMovClose(e){
    e.stopPropagation()
    setShowMov(false)
	}// photoshop

// ========== illustrator
  function handlePosClick() {
		setShowPos(true)
    setShowMagPop(false)
    setShowMov(false)
	}  
  function handlePosClose(e){
    e.stopPropagation()
    setShowPos(false)
	} // illustrator

// ========== inDesign
  function handleMagClick() {
    setShowPos(false)
    setShowMagPop(true)
    setShowMov(false)
  }
  function handleMagClose(e) {
    e.stopPropagation()
    setShowMagPop(false)
  } // inDesign

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
      <Scroll />

{/* =========== Photoshop/ Illustrator =========== */}
      <DesCont>
        <TwoItem>
          <ThumbBox
            clickHandler={() => handleMovClick()}            
            title="Photoshop: Movie Poster"
            url="/images/design/design_Photo_Poster.svg"
            bkSize = "130" 
          />
          {showmov === true && <ImagePopOne 
            src="/images/design/photoshop/design_Movie_Poster.svg"
            alt='movie poster'
            marginT = '-26.5' tMarginT = '-37'
            ttWidth = '60' ttMarginL = '-30' ttMarginT = '-45'
            mHeight='auto' mWidth='auto'  mMartinT = '-77.5'
            clickHandler={(e) => handleMovClose(e)}		
          />} 
        </TwoItem>
        
        <TwoItem>
          <ThumbBox
            clickHandler={() => handlePosClick()}
          />
          {showpos === true && <ImagePopTwo 
            clickHandler={(e) => handlePosClose(e)}		
          />}
        </TwoItem>
      </DesCont>   

{/* ===========inDesign =========== */}
      <InCont>
        <InItem>
          <ThumbBox 
            dataAos = 'fade-left'
            clickHandler={() => handleMagClick()}            
            title="InDesign: Magazine"
            url="/images/design/img_Indesign_Magazine.png"
            bkSize = "130"
            mbkPos = '75% 25%'
          />
          {setmag === true && <ImagePopMag 
            clickHandler={(e) => handleMagClose(e)}		
          />} 
        </InItem>
      </InCont>

      <SqCont /> 
    </Cont>
    );
}

export default DesignSec;
