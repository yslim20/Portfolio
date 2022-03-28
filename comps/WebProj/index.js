import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@/utils/provider";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../Button";
import { medBlue } from "@/utils/variables";

// ============ CSS ============== //
const WebProjCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 3%;
  margin-bottom: 80px;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    diplay: none;
    width: 0;
    height: 0;
    overflow: hidden;    
  }
`;

const ContCont = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.marginR};

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    diplay: none;
  }
`;

const WebProjTit = styled.h4`
  width: 100%;
  margin-bottom: ${(props) => props.TitMarginB}px;
  z-index: 1;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    font-size: 2.125em;
    diplay: none;
  }
`;

const WebProjText = styled.p`
  width: 100%;
  margin-bottom: ${(props) => props.TxtMarginB}px;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    // font-size: 0.875em;
    diplay: none;
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

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    // font-size: 0.875em;
    diplay: none;
  }
`;

const ProImg = styled.img`
  width: 45%;
  height: auto;
  display: block;
  object-fit: contain;
  margin-left: ${(props) => props.marginL};
  margin-right: ${(props) => props.marginR};

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    // width: 100%;
    // margin-left: 0;
    // margin-right: 0;
    diplay: none;
  }
`;

const BttnCont = styled.div`
  width: 100%;
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

const WebProj = ({
  // ============ Props
  direction = "row",
  justify = "flex-start",

  leftonClick = () => {},

  titleOne = "MyLandlord",
  spanOne = "a website to review Landlord",
  textOne = "A website to review Landlord",
  languageT = "Role: Front-End Developer, UX/UI Designer",
  lanSpanT = "",

  languageB = "Tools: ",
  lanSpanB = 'Next.js, React, React UI, GitHub',

  roleTop = `• Created prototypes and mockups, managed brand quality consistency and designed high-quality graphic images.
  • Collaborated with back-end developers, full-stack students, on improving usability.
  • Created user-friendly web pages by using markup languages, such as React, Next.js.`,

  TitMarginB = 20,
  TxtMarginB = 20,

  srcT = "/images/projects/img_MyLandlord.png",

  marginRT = "5%",
  marginLT = "0",

  imgMarginLT = "5%",
  imgMarginRT = "0",

  bttnTxtL = "Go to Detail page",

}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // ============ Layout
  return (
    <WebProjCont
      direction={direction}
      justify={justify}
      data-aos="fade-up"
      // data-aos-once="true"
    >
      <ContCont marginR={marginRT} marginL={marginLT}>
        <WebProjTit TitMarginB={TitMarginB}>{titleOne}</WebProjTit>

        <WebProjText TxtMarginB={TxtMarginB}>
          {/* <ColorTxt spanColor={medBlue[theme]}>{spanOne}</ColorTxt> */}
          {textOne}
        </WebProjText>

        <LangText TxtMarginB={TxtMarginB}>
          {languageT}
          <ColorTxt spanColor={medBlue[theme]}>{lanSpanT}</ColorTxt>
        </LangText>

        <LangText TxtMarginB={TxtMarginB}>
          {languageB}
          <ColorTxt spanColor={medBlue[theme]}>{lanSpanB}</ColorTxt>
        </LangText>

        {/* <LangText className="new-line">{roleTop}</LangText> */}

        <BttnCont>
          <Button
            onClick={leftonClick}
            text={bttnTxtL}
            width="50%"
            marginright=""
          />
        </BttnCont>
      </ContCont>

      <ProImg src={srcT} marginL={imgMarginLT} marginR={imgMarginRT} />
    </WebProjCont>
  );
};

export default WebProj;
