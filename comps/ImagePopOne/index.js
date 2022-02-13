import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import {useRouter} from 'next/router';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarouselItem, CCarousel, CImage } from '@coreui/react';


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
    z-index: 22;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    :hover {
      transform: scale(1.05);
    }

    @media only screen and (min-width: 769px) and (max-width: 1250px){   
      width: ${props => props.tWidth}%; height: auto;
      margin-left: ${props=>props.tMarginL}%;
      margin-top: ${props=>props.tMarginT}%;
    }
  
    @media only screen and (min-width: 1px) and (max-width: 768px){    
      height: auto; width: 100vw;
      margin-left: -50%; margin-top: -33.33%;      
    } 
`;


// ============ Function ============== //
const ImagePopOne = ({
  
// ============ Props
    cbshadow = "rgba(0, 0, 0, 0.24) 0px 6px 18px",
    cdisplay="flex",
    width = "35",    
    
    tWidth = '50',
    marginL = '-15',
    marginT = '-23',
    tMarginL = '-20',
    tMarginT = '-33',

    src = "./images/design/illust/design_Tech_Drawing.svg",
    alt = "Technical Drawing",

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
        tMarginL = {tMarginL}
        tMarginT = {tMarginT}
        tWidth = {tWidth}

        onDoubleClick={(e) => clickHandler(e)}
      > 
        <CCarousel>
          <CCarouselItem>
            <CImage className="d-block w-100" src={src} alt={alt} />
          </CCarouselItem>
        </CCarousel>
      </PopCont>
    );
}

export default ImagePopOne;