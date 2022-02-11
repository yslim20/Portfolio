import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import {useRouter} from 'next/router';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarouselItem, CCarousel, CImage, CCloseButton } from '@coreui/react';


// ============ CSS ============== //
const PopCont = styled.div`
    // height: 50vh;
    display:${props=>props.cdisplay}; 
    flex-direction: column;
    align-items:center;
    item-alignment: center;
    box-shadow: ${props=>props.cbshadow}; 
    // padding: 60px 70px;
    // background-color: #fff;
    position: relative;
    z-index: 22;
    transition: all 1s ease-in-out;
    // cursor: pointer;
`;

const ButtonInput = styled.button`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    border: none;
    background-color:${props=>props.bg};
    border-radius:${props=>props.radius}px;
    width: ${props=>props.width};
    height: ${props=>props.height}px;
    font-size: ${props=>props.size}px;    
    box-shadow: ${props=>props.bshadow}; 

    :hover{
        transform: scale(0.95);
        transition-duration: 0.5s;       
    }
`;

const ButtonText = styled.p`
    color:${props=>props.color} ;
    font-size: ${props=>props.fontSize};
    text-align:center;
    font-weight: ${props=>props.fontWeight};
`;



// ============ Function ============== //
const ImagePopTwo = ({
  
// ============ Props

    cbshadow = "rgba(0, 0, 0, 0.24) 0px 6px 18px",

    cdisplay="flex",

    fistSrc = "./images/design/illust/design_Poster1.jpg",
    altOne = "Concert Poster version 1",
    SecSrc = "./images/design/illust/design_Poster2.jpg",
    altTwo = "Concert Poster version 2",


    clickHandler=() => {},

}) => {


// ============ Layout
    return (
      <PopCont 
        cbshadow={cbshadow}
        cdisplay={cdisplay}
        onDoubleClick={(e) => clickHandler(e)}
      >  
        <CCarousel controls indicators dark>
          <CCarouselItem>
            <CImage className="d-block w-100" src={fistSrc} alt={altOne} />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={SecSrc} alt={altTwo} />
          </CCarouselItem>
        </CCarousel>
        
      </PopCont>
    );
}

export default ImagePopTwo;