import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from "@/utils/provider";

import { themes, ltLylac, medBlue } from '@/utils/variables';

// ============ CSS ============== //
const Nav = styled.div`    
  height: ${props=>props.height};  
  width: 100%;
  min-width: 110px;
  border-top: ${props => props.borderT};  
  border-bottom: ${props => props.borderB};
  box-sizing: border-box;
  display: flex;
  align-items:center;
  justify-content:center;
  cursor: pointer; 
  color: #999;
  background-color: #101010;

  :hover h6{
    color: ${props => props.hovColor};     
  }

  :active h6{
    color: ${props => props.hovColor}; 
  }
`;

const Content = styled.h6`
  line-height: ${props=>props.lineH}px;
  color: ${props=>props.color};
  font-size: 1em;
`

// ============ Layout
const NavText =({

// ============ Props  
  height = "8.5vh",
  onClick = () =>{},
  text ="About",
  borderT = "solid 1px #999",
  borderB = "solid 1px #999",
  color="#999",

})=>{

  const {theme, setTheme} = useTheme();

// ============ Layout
  return (
    <Nav 
      // open={open} setOpen={setOpen} 
      onClick = {onClick}      
      height={height} 
      borderT = {borderT}
      borderB = {borderB}  
      hovColor = {medBlue[theme]}   
    >            
      <Content               
        color={color}
        lineH={height}  
      >
        {text}
      </Content>
    </Nav>
  );
}

export default NavText;