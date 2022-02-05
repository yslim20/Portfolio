import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const DescCont = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;  
  position: relative;

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    width: 72.46%;
  }   
`;

const DescTit = styled.h3`
  width: 100%;
  margin-bottom: ${props => props.TitMarginB}px; 
  z-index: 1;

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    font-size: 2.125em;
  } 
`

const DescText = styled.p`
  width:100%;
  margin-bottom: ${props => props.TxtMarginB}px;

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    font-size: 0.875em;
  } 

`

const ArrowContOne = styled.div`
  width: 54px;
  height: 96px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  top: 0px; left: ${props => props.left}px
  z-index: -1;

  @media only screen and (min-width: 801px) and (max-width: 1024px){   
    transform: scale(0.8);
  }

  @media only screen and (min-width: 1px) and (max-width: 800px){    
    top: ${props => props.topM}px;
    left: ${props => props.leftM};
    transform: scale(0.7);
    transition: all 1s;
  } 
`

const ArrowContTwo = styled.div`
  width: 69px;
  height: 40px;
  background-image: url("./images/img_TriangleLine.svg");
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  bottom: 0.5em; right: 15%;
  z-index: -1;

  @media only screen and (min-width: 801px) and (max-width: 1024px){    
    right: 5%;
    transform: scale(0.8);
    transition: all 1s;
  } 

  @media only screen and (min-width: 1px) and (max-width: 800px){    
    right: 15%;
    transform: scale(0.7);
    transition: all 1s;
  } 
`

// ============ Function ============== //

const WebProj = ({

// ============ Props
  urlOne = "./images/img_VerTriangle.svg",
  leftOne = -20, 
  topMOne = 50, 
  leftMOne = "95%",
  titleOne = "Front-end Development",
  textOne = "My studies at British Columbia Institute of Technology gave me a solid foundation in front-end development, such as HTML, CSS, JavaScript, and jQuery, as well as tools such as Adobe Illustrator, InDesign, Photoshop, and Figma. I bring excellent time management, problem-solving, adaptability, and collaboration skills to my role as a front-end developer.",
  TitMarginB = 20,
  TxtMarginB = "",

  titleTwo = "Design",
  textTwo = "Besides studying Fashion Design at Ewha Woman's University in Seoul, Korea, and Visual Presentation & Exhibition Design at FIT in New York, I studied Digital Design and Development at BCIT. Additionally, I have more than ten years of experience working as a fashion designer in New York and Seoul. I gained a unique insight into the digital design from my previous professional career in UX/UI design.",
  TxtMarginBT = 20,
  TitMarginBT = "",
  
  justify="flex-start",
  flip = false

}) => {
    const router = useRouter();

// ============ Layout
  return (
    <DescCont 
      justify={justify}
    >
      {flip=== false ? <>
        <ArrowContOne 
          url = {urlOne} 
          left = {leftOne}  
          topM = {topMOne}   
          leftM = {leftMOne}
        />
        <DescTit TitMarginB = {TitMarginB} >
          {titleOne}
        </DescTit>

        <DescText TxtMarginB = {TxtMarginB} >
          {textOne}
        </DescText>

      </> : 
      <>
        <ArrowContTwo />
        <DescText  TxtMarginB = {TxtMarginBT} >
          {textTwo}
        </DescText>

        <DescTit  TitMarginB = {TitMarginBT}>
          {titleTwo}
        </DescTit>
      </>
      }
    </DescCont>
  );
}

export default WebProj;
