import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
// import login from '../../scripts/auth/login'

// ============ CSS ============== //
const ButtonCont = styled.div`
    margin-top: ${props=>props.mtop}px;
    margin-right: ${props=>props.mright}px;
    width: 100%;
    display:flex;
    justify-content:${props=>props.justify};    
`;

const ButtonInput = styled.button`
    type: ${props=>props.type};
    display:flex;
    background-color:${props=>props.bg};
    border:${props => props.border};
    border-radius:${props=>props.radius}px;
    width: ${props=>props.width}px;
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
      background: rgba(230,5,118,0.3);
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

    @media only screen and (min-width: 1px) and (max-width: 1000px){    
      min-width: 182px;
    } 
`;

const ButtonText = styled.p`
    font-family: 'Heebo', sans-serif;
    color:${props=>props.color} ;
    font-size: ${props=>props.fontSize};
    text-align:center;
    font-weight: ${props=>props.fontWeight};
`;

// ============ Function ============== //

const Button = ({

// ============ Props
    type = "",
    text="Contact me",
    margintop = 40,
    minWidth= 242,
    marginright="",
    bgcolor = "transparent",
    radius = 10,
    width = 182,
    height = 48,
    border = "2px solid #E60576",
    routeTo = "/Contact",
    bshadow = "",
    color="#E60576",
    justify="flex-start",
    onClick = () =>{},

}) => {
    const router = useRouter();

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
        border={border}
        bshadow={bshadow}
        minWidth={minWidth}
      >
        <ButtonText
          color={color}
        >
          {text}
        </ButtonText>
      </ButtonInput>
    </ButtonCont>
  );
}

export default Button;
