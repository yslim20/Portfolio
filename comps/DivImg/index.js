import React from 'react';
import styled from 'styled-components';

const DivCont = styled.div`
width: 100%;
height: ${props => props.height} ;
display: block;
background-image: url("${props => props.url}");
background-repeat: no-repeat;
background-size: contain;
// background-attachment: fixed;
background-position: ${props => props.position}; 
z-index: -10;

@media only screen and (min-width: 1px) and (max-width: 1000px){
  background-size: 150%;
  transition: all 0.3s;
}
`

const DivImg = ({

  height = "100%",
  url = "/images/img_Div_purTop.svg",
  position = "top left",
  
}) => {
  return (
      <DivCont 
        url = {url}
        position = {position}
        height={height}
      />
    );
}

export default DivImg;