import styled from 'styled-components';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';

// ============ CSS ============== //
const MedCont = styled.div`    
  max-width: ${props=>props.cwidth}px;
  height: ${props=>props.cheight};
  margin: ${props=>props.cmargin}px;
  display:flex;
  justify-content:center;
  align-items:center;

  @media only screen and (min-width: 769px) and (max-width: 1024px){   
    top: 2%; left: 25%;
    width: 50%; height: auto;
  }

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    top: 0; left: 0;
    width: 100%;
  } 
`;

// ============ Function ============== //
const Mediabox = ({

// ============ Props
  cwidth = 751,
  cheight = "auto",
  cmargin="auto",
  component = "video" ,
  src = "./video/I_Spy_Constuction_Vehicles.mp4",

  clickHandler=() => {},

}) => {

// ============ Layout
  return (
    <MedCont 
      cwidth={cwidth}
      cheight={cheight}
      cmargin={cmargin}
      onClick={(e) => clickHandler(e)}
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