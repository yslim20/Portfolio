import styled from 'styled-components';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';

// ============ CSS ============== //
const MedCont = styled.div`    
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
  z-index: 999;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  @media only screen and (min-width: 769px) and (max-width: 1000px){ 
    width: 80%;
    margin-left: -41%; margin-top: -30%;
  }

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    height: auto; width:100%;
    top: 50%; left: 0;
    margin: 0;
    margin-top: ${props=>props.mMarginT}%;
  } 
`;

// ============ Function ============== //
const Mediabox = ({

// ============ Props
  cbshadow = "rgba(0, 0, 0, 0.24) 0px 6px 18px",
  cdisplay="flex",
  width = "60",
  marginL = '-28',
  marginT = '-22.5',
  mMarginT = '-33.33',
  component = "video" ,
  src = "./video/I_Spy_Constuction_Vehicles.mp4",

  clickHandler=() => {},

}) => {

// ============ Layout
  return (
    <MedCont 
      width = {width}
      cdisplay = {cdisplay}
      cbshadow = {cbshadow}
      marginL = {marginL}
      marginT = {marginT}
      mMarginT = {mMarginT}

      onDoubleClick={(e) => clickHandler(e)}
    >
      <CardMedia
        component={component}                       
        loop
        autoPlay
        controls 
        src={src}
      />  
    </MedCont>
  );
}

export default Mediabox;