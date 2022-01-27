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

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    width: 72.46%;
  }   
`;

const DescTit = styled.h3`
  width: 100%;
  margin-bottom: 20px; 

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    font-size: 2.125em;
    // font-weight: 700; 
  } 
`

const DescText = styled.p`
  width:100%;

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    font-size: 0.875em;
  } 

`

const ArrowCont = styled.div`
  width: 54px;
  height: 96px;
  background-image: url("./images/img_VerTriangle.svg");
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  top: -20px; left: -20px;
  z-index: -1;

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    top: 20px; 
    left: 80%;
    transition: all 1s;
  } 
`

// ============ Function ============== //

const DescT = ({

// ============ Props
  title = "Front-end Development",
  text="My studies at British Columbia Institute of Technology gave me a solid foundation in front-end development, such as HTML, CSS, JavaScript, and jQuery, as well as tools such as Adobe Illustrator, InDesign, Photoshop, and Figma. I bring excellent time management, problem-solving, adaptability, and collaboration skills to my role as a front-end developer.",
  justify="flex-start",
  color = ""

}) => {
    const router = useRouter();

// ============ Layout
  return (
    <DescCont 
      justify={justify}
    >
      <ArrowCont />
      <DescTit>
        {title}
      </DescTit>

      <DescText>
        {text}
      </DescText>
    </DescCont>
  );
}

export default DescT;
