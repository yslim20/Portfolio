import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import {useRouter} from 'next/router';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarouselItem, CCarousel, CImage, CCloseButton } from '@coreui/react';


// ============ CSS ============== //
const PopCont = styled.div`
    height: auto; 
    
    width: ${props => props.width};
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
    z-index: 999;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    :hover {
      transform: scale(1.05);
    }

    @media only screen and (min-width: 1000px) and (max-width: 1250px){   
      width: 55%; height: auto;
      margin-left: -23%;
      margin-top: -36.5%;
    }

    @media only screen and (min-width: 769px) and (max-width: 999px){ 
      width: 55%; height: auto;
      margin-left: -30%;
      margin-top: -37.5%;
    }
  
    @media only screen and (min-width: 1px) and (max-width: 768px){    
      height: auto; width: 93%;
      margin-left: -47%;
      margin-top: -61.5%;
`;

// ============ Function ============== //
const ImagePopTwo = ({
  
// ============ Props

    cbshadow = "rgba(0, 0, 0, 0.24) 0px 6px 18px",
    cdisplay="flex",
    width = "45%",
    marginL = '-20',
    marginT = '-30',
    fistSrc = "./images/design/illust/design_Poster2.jpg",
    altOne = "Concert Poster version 1",
    secSrc = "./images/design/illust/design_Poster1.jpg",
    altTwo = "Concert Poster version 2",

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

        onDoubleClick={(e) => clickHandler(e)}
      >  
        <CCarousel controls indicators dark>
          <CCarouselItem>
            <CImage className="d-block w-100" src={fistSrc} alt={altOne} />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={secSrc} alt={altTwo} />
          </CCarouselItem>
        </CCarousel>        
      </PopCont>
    );
}

export default ImagePopTwo;