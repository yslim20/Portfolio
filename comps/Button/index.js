import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
import { useTheme } from "@/utils/provider";
import { themes, ltLylac, medBlue } from '@/utils/variables';

// ============ CSS ============== //
const ButtonCont = styled.div`
    width: ${props=>props.conwidth};
    margin-top: ${props=>props.mtop}px;
    margin-right: ${props=>props.mright}px;
    display:flex;
    flex-direction: column;
    justify-content:${props=>props.justify}; 
    align-items: ${props=>props.align}; 
    z-index: 0;

    @media only screen and (min-width: 1px) and (max-width: 600px) {
      margin-right: ${props=>props.mmright}px;
      margin-top: ${props=>props.mmtop}px;
      min-width: ${props=>props.mminWid}px;
    }
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
      min-width: 170px;
    } 

    @media only screen and (min-width: 481px) and (max-width: 1000px){    
      min-width: 150px; 
    } 

    @media only screen and (min-width: 1px) and (max-width: 480px){    
      min-width: 110px; width:100%;
    } 
`;

const ButtonText = styled.p`
    color:${props=>props.color} ;    
    text-align:center;
    font-weight: ${props=>props.fontWeight};
    margin: 0;

    @media only screen and (min-width: 1px) and (max-width: 480px){    
      font-size: ${props=>props.fontSize}em;
    } 
`;

// ============ Function ============== //

const Button = ({

// ============ Props
    type = "",
    text="Contact me",
    conwidth = "100%",
    mminWid = '',
    margintop = 40,
    mmtop = '20',
    width = "100%",
    minWidth = 182,
    marginright = "",
    mmright = 10,
    justify="center",
    align = 'flex-start',
    bgcolor = "transparent",
    radius = 10,
    height = 48,
    borderStyle = "solid",
    bshadow = "",
    bgafter = "rgba(85, 80, 242, 0.5)",
    fontSize = '0.875',
    onClick = () =>{},

}) => {
    const router = useRouter();
    const {theme, setTheme} = useTheme();

// ============ Layout
  return (
    <ButtonCont 
      conwidth={conwidth}
      mminWid={mminWid}
      mtop={margintop}
      mmtop={mmtop}
      mright={marginright}
      mmright={mmright}
      justify={justify}
      align={align}

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
          fontSize={fontSize}
        >
          {text}
        </ButtonText>
      </ButtonInput>
    </ButtonCont>
  );
}

export default Button;
