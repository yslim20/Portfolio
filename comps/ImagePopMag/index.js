import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import {useRouter} from 'next/router';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarouselItem, CCarousel, CImage, CCloseButton } from '@coreui/react';


// ============ CSS ============== //
const PopCont = styled.div`
    height: auto;     
    width: ${props => props.width}%;
    display:${props=>props.cdisplay}; 
    flex-direction: column;
    align-items:center;
    item-alignment: center;
    box-shadow: ${props=>props.cbshadow}; 
    position: fixed; 
    top: 50%; 
    left: 50%; 
    margin-left: ${props=>props.marginL}%;
    margin-top: ${props=>props.marginT}%;
    z-index: 99999;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    :hover {
      transform: scale(1.05);
    }

    @media only screen and (min-width: 769px) and (max-width: 1000px){    
      height: auto; width:100%;
      top: 50%; left: 0;
      margin: 0;
      margin-top: ${props=>props.mMarginT}%;
    } 
 
    @media only screen and (min-width: 1px) and (max-width: 768px){    
      height: auto; width:100%;
      top: 50%; left: 0;
      margin: 0;
      margin-top: ${props=>props.mMarginT}%;
    } 
`;

// ============ Function ============== //
const ImagePopMag = ({
  
// ============ Props

    cbshadow = "rgba(0, 0, 0, 0.24) 0px 6px 18px",
    cdisplay="flex",
    width = "60",
    marginL = '-30',
    marginT = '-20',
    mMarginT = '-33.33',
    fistSrc = "./images/design/magazine/design_Print_Magazine_01.png",
    altOne = "page 1",
    secSrc = "./images/design/magazine/design_Print_Magazine_02.png",
    altTwo = "page 2",
    thirdSrc = "./images/design/magazine/design_Print_Magazine_03.png",
    altThree = 'page 3',
    forthSrc = "./images/design/magazine/design_Print_Magazine_04.png",
    altFour = 'page 4',

    clickHandler=() => {},

}) => {

// ============ Layout
    return (
      <PopCont 
        width = {width}
        cdisplay = {cdisplay}
        cbshadow = {cbshadow}
        marginL = {marginL}
        marginT = {marginT}
        mMarginT = {mMarginT}

        onDoubleClick={(e) => clickHandler(e)}
      >  
        <CCarousel controls indicators dark>
          <CCarouselItem>
            <CImage className="d-block w-100" src={fistSrc} alt={altOne} />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={secSrc} alt={altTwo} />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={thirdSrc} alt={altThree} />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={forthSrc} alt={altFour} />
          </CCarouselItem>
        </CCarousel>        
      </PopCont>
    );
}

export default ImagePopMag;