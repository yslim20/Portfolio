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
    width: 100%;
    flex-direction: column;
  }
`;

const ContCont = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.marginR};
  margin-left: ${(props) => props.marginL};

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 50px;
    margin-right: 0;
    margin-left: 0;
  }
`;

const WebProjTit = styled.h4`
  width: 100%;
  margin-bottom: ${(props) => props.TitMarginB}px;
  z-index: 1;

  // @media only screen and (min-width: 1px) and (max-width: 1000px){
  //   font-size: 2.125em;
  // }
`;

const WebProjText = styled.p`
  width: 100%;
  margin-bottom: ${(props) => props.TxtMarginB}px;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
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
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

const BttnCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

// ============ Function ============== //

const WebProjLast = ({
  // ============ Props
  flip = false,
  direction = "row",
  justify = "flex-start",

  onClick = () => {},

  TitMargin = 20,
  TxtMargin = 20,

  title = "About Kingdom",
  span = "About Kingdom",
  text = "A blog site about the Korean drama series, The Kingdom",
  languageT = "Role: Web Developer",
  lanSpanT = "",
  languageB = "Tool: ",
  lanSpanB = "WordPress",
  role = `??? Designed, implemented, and managed websites using WordPress.
  ??? Utilized and customized WordPress plug-ins and themes.
  ??? Formulated an effective and responsive design.
  `,

  src = "/images/projects/img_Kingdom.png",

  marginR = "5%",
  marginL = "0",

  imgMarginL = "5%",
  imgMarginR = "0",

  bttnTxt = "Go to Homepage",
}) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // ============ Layout
  return (
    <WebProjCont direction={direction} justify={justify} data-aos="fade-up">      

      <ContCont marginR={marginR} marginL={marginL}>
        <WebProjTit TitMarginB={TitMargin}>{title}</WebProjTit>

        <WebProjText TxtMarginB={TxtMargin}>
          {/* <ColorTxt spanColor={medBlue[theme]}>{span}</ColorTxt> */}
          {text}
        </WebProjText>

        <LangText TxtMarginB={TxtMargin}>
          {languageT}
          <ColorTxt spanColor={medBlue[theme]}>{lanSpanT}</ColorTxt>
        </LangText>

        <LangText TxtMarginB={TxtMargin}>
          {languageB}
          <ColorTxt spanColor={medBlue[theme]}>{lanSpanB}</ColorTxt>
        </LangText>

        {/* <LangText className="new-line">
          {role}
        </LangText> */}

        <BttnCont>
          <Button
            onClick={onClick}
            text={bttnTxt}
            width="100%"
            conwidth="50%"
          />
        </BttnCont>
      </ContCont>

      <ProImg src={src} marginL={imgMarginL} marginR={imgMarginR} />
    </WebProjCont>
  );
};

export default WebProjLast;
