import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@/utils/provider";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../Button";
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
  overflow: hidden;
  
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

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    width: 80%;
  }
`;

const WebProjTit = styled.h4`
  width: 100%;
  margin-bottom: ${(props) => props.TitMarginB}px;
  z-index: 1;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    font-size: 2.125em;
  }
`;

const WebProjText = styled.p`
  width: 100%;
  margin-bottom: ${(props) => props.TxtMarginB}px;

  @media only screen and (max-width:480px) {
    font-size: 0.875em;
  }
`;

const ColorTxt = styled.span`
  color: ${(props) => props.spanColor};
  display: inline;
  margin-right: 5px;
  font-weight: 500;
  font-style: italic;
`;

const LangText = styled.p`
  width: 100%;
  margin-bottom: ${(props) => props.TxtMarginB}px;
  color: ${(props) => props.lancolor};
  line-height: 1.5em;

  @media only screen and (max-width:480px) {
    font-size: 0.875em;
  }
`;

const BttnCont = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1px) and (max-width: 600px) {
    margin-top: 20px;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

// ============ Function ============== //

const Description = ({
  // ============ Props
  direction = "row",
  justify = "flex-start",

  leftonClick = () => {},
  rightonClick = () => {},

  titleOne = "MyLandlord",
  spanOne = "MyLandlord",
  textOne = "is a website that is targeted towards residents looking to find an ideal Landlord to rent from the Greater Vancouver.",
  languageT = "Role: Front-End Developer, UX/UI Designer",
  lanSpanT = "",

  languageB = "Tools: ",
  lanSpanB = 'React, React UI, Next.js, JavaScript, GitHub, Figma',

  year = 'Year: 2021',

  TitMarginB = 20,
  TxtMarginB = 20,

  marginRT = "5%",
  marginLT = "0",

  bttnTxtL = "Homepage",
  bttnTxtR = 'GitHub'

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
      data-aos="fade-up"
      // data-aos-once="true"
    >
      <ContCont marginR={marginRT} marginL={marginLT}>
        <WebProjTit TitMarginB={TitMarginB}>{titleOne}</WebProjTit>

        <WebProjText TxtMarginB={TxtMarginB}>
          <ColorTxt spanColor={medBlue[theme]}>{spanOne}</ColorTxt>
          {textOne}
        </WebProjText>

        <LangText TxtMarginB={TxtMarginB}>
          {languageT}
          <ColorTxt spanColor={medBlue[theme]}>{lanSpanT}</ColorTxt>
        </LangText>

        <LangText TxtMarginB={TxtMarginB}>
          {year}
        </LangText>

        <LangText TxtMarginB={TxtMarginB}>
          {languageB}
          <ColorTxt spanColor={medBlue[theme]}>{lanSpanB}</ColorTxt>
        </LangText>

        <BttnCont>
          <Button
            onClick={leftonClick}
            text={bttnTxtL}
            width="100%"
            marginright="20"
          />
          <Button onClick={rightonClick} text={bttnTxtR} width="100%" />
        </BttnCont>
      </ContCont>
    </Cont>
  );
};

export default Description;
