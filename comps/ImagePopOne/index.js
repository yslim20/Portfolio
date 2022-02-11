import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import {useRouter} from 'next/router';
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarouselItem, CCarousel, CImage } from '@coreui/react';


// ============ CSS ============== //
const PopCont = styled.div`
    width: 50%;
    display:${props=>props.cdisplay}; 
    flex-direction: column;
    align-items:center;
    item-alignment: center;
    border-radius: 30px;
    box-shadow: ${props=>props.cbshadow}; 
    padding: 60px 70px;
    // background-color: #fff;
    // position: absolute;
    z-index: 22;
    transition: all 1s ease-in-out;
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
const ImagePopOne = ({
  
// ============ Props
    errortext = "You need to login first.",
    text="Log In",
    bgcolor = "#5333ED",
    radius = 20,
    width = "80%",
    height = 72,
    cbshadow = "rgba(0, 0, 0, 0.24) 0px 6px 18px",
    bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    color="#fff",
    fontSize="24px",
    fontWeight="500",
    cdisplay="flex",

    src = "./images/design/illust/design_Poster1.jpg",
    alt = "",

    clickHandler=() => {}

}) => {

  // const [showpop, setShowPop] = useState(false);

  // function onClick(){
  //   setShowPop(false)
  // }	

// ============ Layout
    return (
      <PopCont 
        cbshadow={cbshadow}
        cdisplay={cdisplay}
        oonDoubleClick={(e) => clickHandler(e)}
      >  
        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage className="d-block w-100" src={src} alt={alt} />
          </CCarouselItem>
        </CCarousel>

      </PopCont>
    );
}

export default ImagePopOne;