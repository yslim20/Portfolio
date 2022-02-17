import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
import { useTheme } from "@/utils/provider";
import { themes, ltLylac, medBlue } from '@/utils/variables';

// ============ CSS ============== //
const ButtonCont = styled.div`
    margin-top: ${props=>props.mtop}px;
    margin-right: ${props=>props.mright}px;
    width: 100%;
    display:flex;
    justify-content:${props=>props.justify}; 
    z-index: 0;
`;

const ButtonInput = styled.button`
    type: ${props=>props.type};
    display:flex;
    background-color:${props=>props.bg};
    border-style:${props => props.borderStyle};
    border-color: ${props => props.borderColor};
    border-radius:${props=>props.radius}px;
    width: ${props=>props.width};
    min-width: ${props=>props.minWidth}px;
    height: ${props=>props.height}px;
    align-items:center;
    justify-content:center;
    box-shadow: ${props=>props.bshadow}; 
    cursor: pointer;
    overflow: hidden; 

    position: relative;
    z-index: 1;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    box-sizing: border-box;
    

    :after {
      content: "";
      width: 0%;
      height: 100%;
      position: absolute;
      top: 0;      
      left: 0;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -ms-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      background: ${props => props.bgafter};      
      transform: skewX(15deg);
      z-index: -1;
  }
    
    :hover p{
        color: #fff;
    }

    :hover:after {
      left: -10%;
      width: 120%;
    }

    @media only screen and (min-width: 1001px) and (max-width: 1100px){    
      min-width: 0;
    } 

    @media only screen and (min-width: 1px) and (max-width: 1000px){    
      min-width: 0;
    } 
`;

const ButtonText = styled.p`
    color:${props=>props.color} ;
    font-size: ${props=>props.fontSize};
    text-align:center;
    font-weight: ${props=>props.fontWeight};
    margin: 0;
`;

// ============ Function ============== //

const Button = ({

// ============ Props
    type = "",
    text="Contact me",
    margintop = 40,
    width = "100%",
    minWidth = 182,
    marginright="",
    bgcolor = "transparent",
    radius = 10,
    height = 48,
    borderStyle = "solid",
    bshadow = "",
    justify="flex-start",
    bgafter = "rgba(85, 80, 242, 0.5)",
    onClick = () =>{},

}) => {
    const router = useRouter();
    const {theme, setTheme} = useTheme();

// ============ Layout
  return (
    <ButtonCont 
      mtop={margintop}
      mright={marginright}
      justify={justify}

// ============ onClick function
      onClick={onClick}
    >
      <ButtonInput
        type={type}
        bg={bgcolor}
        radius={radius}
        width={width}
        height={height}
        borderStyle={borderStyle}
        borderColor = {medBlue[theme]}
        bshadow={bshadow}
        minWidth={minWidth}
        bgafter={bgafter}
      >
        <ButtonText
          color={medBlue[theme]}
        >
          {text}
        </ButtonText>
      </ButtonInput>
    </ButtonCont>
  );
}

export default Button;
