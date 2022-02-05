import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

import Button from '../Button';

// ============ CSS ============== //
const WebProjCont = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;  
  position: relative;
`;

const ContCont = styled.div`
  width: 50%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    width: 100%;
  } 
`

const WebProjTit = styled.h4`
  width: 100%;
  margin-bottom: ${props => props.TitMarginB}px; 
  z-index: 1;

  // @media only screen and (min-width: 1px) and (max-width: 1000px){    
  //   font-size: 2.125em;
  // } 
`

const WebProjText = styled.p`
  width:100%;
  margin-bottom: ${props => props.TxtMarginB}px;

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    font-size: 0.875em;
  } 
`

const ColorTxt = styled.span`
  color: #5626C4;
`

const ShapeCont = styled.div`
  width: 54px;
  height: 96px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  z-index: -9;

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
const ProImg = styled.div`
  width:50%;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  top: ${props => props.top}px;
  left: ${props => props.left}px;

  @media only screen and (min-width: 1px) and (max-width: 1000px){   

  }
`

const BttnCont = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;  
`


// ============ Function ============== //

const WebProj = ({ 

// ============ Props
  flip = false,
  justify="flex-start", 

  url = "./images/img_VerTriangle.svg",
  top = "",
  left = -20, 
  topM = 50, 
  leftM = "95%",
  titleOne = "Front-end Development",
  textOne = "My studies at British Columbia Institute of Technology gave me a solid foundation in front-end development, such as HTML, CSS, JavaScript, and jQuery, as well as tools such as Adobe Illustrator, InDesign, Photoshop, and Figma. I bring excellent time management, problem-solving, adaptability, and collaboration skills to my role as a front-end developer.",
  TitMarginB = 20,
  TxtMarginB = "",

  imgUrl = "",
  imgTop = "",
  imgLeft = "",


  titleTwo = "Design",
  textTwo = "Besides studying Fashion Design at Ewha Woman's University in Seoul, Korea, and Visual Presentation & Exhibition Design at FIT in New York, I studied Digital Design and Development at BCIT. Additionally, I have more than ten years of experience working as a fashion designer in New York and Seoul. I gained a unique insight into the digital design from my previous professional career in UX/UI design.",
  TxtMarginBT = 20,
  TitMarginBT = "",

}) => {
  
  const router = useRouter();

// ============ Layout
  return (
    <WebProjCont 
      justify={justify}
    >
    {flip=== false ? <>
        <ContCont>
          <ShapeCont
            url = {url} 
            top = {top}
            left = {left}  
            topM = {topM}   
            leftM = {leftM}
          />
          <WebProjTit TitMarginB = {TitMarginB} >
            {titleOne}
          </WebProjTit>

          <WebProjText TxtMarginB = {TxtMarginB} >
            {textOne}
          </WebProjText>

          <BttnCont>
            <Button 
              onClick={() => window.open('https://mylandlord-front-end.vercel.app/', '_blank')}
              bgafter= "rgba(85, 38, 196, 0.5)"
              border = "2px solid #5626C4"
              color = '#5626C4'
              text = 'Homepage'
              width='100%'
              marginright = "12"
            />
            <Button 
              onClick={() => window.open('https://github.com/yslim20/MyLandlord-Front-End', '_blank')}
              bgafter= "rgba(85, 38, 196, 0.5)"
              border = "2px solid #5626C4"
              color = '#5626C4'
              text = 'GitHub'
              width='100%'
            />
          </BttnCont>

        </ContCont>

        <ProImg 
          url = {imgUrl}
          top = {imgTop}
          left = {imgLeft}        
        />
      </> : 

      <>
        <ContCont>
          <ProImg 
            url = {imgUrl}
            top = {imgTop}
            left = {imgLeft}        
          />

          <ShapeCont
            url = {url} 
            top = {top}
            left = {left}  
            topM = {topM}   
            leftM = {leftM}
          />
          <WebProjTit TitMarginB = {TitMarginBT} >
            {titleTwo}
          </WebProjTit>

          <WebProjText  TxtMarginB = {TxtMarginBT} >
            {textTwo}
          </WebProjText>
        </ContCont>        
      </>
    }
    </WebProjCont>
  );
}

export default WebProj;
