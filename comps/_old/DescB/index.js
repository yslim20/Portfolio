import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const DescCont = styled.div`
  width: 33.61%;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;  
  position: relative;

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    width: 72.46%;
  }   
`;

const DescTit = styled.h3`
  width: 100%;  

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    font-size: 2.125em;
    // font-weight: 700; 
  } 
`

const DescText = styled.p`
  width:100%;  
  margin-bottom: 20px; 

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    font-size: 0.875em;
  } 
`

const ArrowCont = styled.div`
  width: 69px;
  height: 40px;
  background-image: url("./images/img_TriangleLine.svg");
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  bottom: 0.5em; right: 15%;
  z-index: -1;

  @media only screen and (min-width: 1024px) and (max-width: 769px){    
    right: 5%;
    transition: all 1s;
  } 

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    right: 15%;
    transition: all 1s;
  } 
`

// ============ Function ============== //

const DescB = ({

// ============ Props
  title = "Design",
  text="Besides studying Fashion Design at Ewha Woman's University in Seoul, Korea, and Visual Presentation & Exhibition Design at FIT in New York, I studied Digital Design and Development at BCIT. Additionally, I have more than ten years of experience working as a fashion designer in New York and Seoul. I gained a unique insight into the digital design from my previous professional career in UX/UI design.",
  justify="flex-start",

}) => {
    const router = useRouter();

// ============ Layout
  return (
    <DescCont 
      justify={justify}
    >
      <ArrowCont />
      <DescText>
        {text}
      </DescText>

      <DescTit>
        {title}
      </DescTit>

    </DescCont>
  );
}

export default DescB;
