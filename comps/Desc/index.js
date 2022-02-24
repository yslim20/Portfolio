import styled from 'styled-components';
import React, { useEffect } from 'react';
import {useRouter} from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

const DescTit = styled.h4`
  width: 100%;
  margin-bottom: ${props => props.TitMarginB}px; 
  line-height: 1.25em;
  z-index: 1;

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    font-size: 2em;
  } 
`

const DescText = styled.p`
  width:100%;
  margin-bottom: ${props => props.TxtMarginB}px;

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    font-size: 0.875em;
  } 

`

// ============ Function ============== //

const Desc = ({

// ============ Props
  // urlOne = "./images/img_VerTriangle.svg",
  // leftOne = -20, 
  // topMOne = 50, 
  // leftMOne = "95%",
  titleOne = "Front-end Development 👩‍💻",
  textOne = "My studies at British Columbia Institute of Technology gave me a solid foundation in front-end development, including HTML, CSS, JavaScript, jQuery, and React. As a front-end developer, I am excellent at managing time, resolving problems, and adapting to changing environments.",
  TitMarginB = 20,
  TxtMarginB = "",

  titleTwo = "🎨 Design",
  textTwo = "I studied Fashion Design at Ewha Woman's University in Seoul, Korea, and Visual Presentation & Exhibition Design at FIT in New York, as well as design tools, such as Adobe Illustrator, InDesign, Photoshop, and Figma, at BCIT. Furthermore, I gained a unique insight into the digital design from my previous career in fashion for over ten years.",
  TxtMarginBT = 20,
  TitMarginBT = "",
  
  justify="flex-start",
  flip = false

}) => {
    const router = useRouter();
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

// ============ Layout
  return (
    <DescCont 
      justify={justify}
    >
      {flip=== false ? <>
        <div data-aos = 'fade-down'>
          <DescTit TitMarginB = {TitMarginB} >
            {titleOne}
          </DescTit>

          <DescText TxtMarginB = {TxtMarginB}>
            {textOne}
          </DescText>
        </div>
      </> : 
      <>
        <div data-aos = 'fade-up'>
          <DescText  TxtMarginB = {TxtMarginBT} >
            {textTwo}
          </DescText>

          <DescTit  TitMarginB = {TitMarginBT} >
            {titleTwo}
          </DescTit>
        </div>
      </>
      }
    </DescCont>
  );
}

export default Desc;
