import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@/utils/provider";
import AOS from "aos";
import "aos/dist/aos.css";
import { medBlue } from "@/utils/variables";

// ============ CSS ============== //
const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 3%;
  margin-bottom: 80px;
  background: ${props => props.background};

  @media only screen and (min-width: 1px) and (max-width: 1000px) { 
  }
`;

const ContCont = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 0;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    width: 80%;
  }
`;

const Title = styled.h5`
  width: 100%;
  margin-bottom: 50px;
  color: ${props => props.titColor};
  transition: all 0.3s;
  position: relative;

  @media only screen and (min-width: 461px) and (max-width:1000px){    

  }

  @media only screen and (min-width: 1px) and (max-width:460px){    
    font-size: 1.25em;
    font-weight: 700; 
  }
`

const Text = styled.p`
  width: 100%;
  margin-bottom: ${(props) => props.TxtMarginB}px;
  color: ${(props) => props.lancolor};
  line-height: 1.75em;

  @media only screen and (max-width:480px) {
    font-size: 0.875em;
  }
`;

const ImgCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: ${props => props.width}%;
  max-width: 900px;

  @media only screen and (max-width: 1000px){
    width: ${props => props.mWidth}%;
  }
`

// ============ Function ============== //

const StyleGuide = ({
  // ============ Props
  direction = "column",
  justify = "flex-start",
  background = 'none',
  aos = "fade-left",

  TxtMarginB = 50,
  children = `To represent the theme of our website, we decided to use a house, text balloon, and checkmark as our logo. The logo conveys the message of honesty and free communication. 

  We chose purple and blue as our theme's predominant colours since purple symbolizes wealth and luxury, and blue symbolizes calm and responsibility.`,

  title='Persona',  
  src='/images/projects/MyLandlord/mylandlord_persona.png',
  alt='persona',
  imgWidth=100,
  imgMWidth=90,

}) => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // ============ Layout
  return (
    <Cont
      direction={direction}
      justify={justify}
      data-aos={aos}
      background={background}
    >
      <ContCont>
        <Title titColor = {medBlue[theme]}>
          {title}      
        </Title>

        <Text TxtMarginB={TxtMarginB}>
          {children}
        </Text>

        <ImgCont>
          <Image 
            src = {src}
            alt = {alt}
            width = {imgWidth}
            mWidth = {imgMWidth}
          />
        </ImgCont>

      </ContCont>
    </Cont>
  );
};

export default StyleGuide;
