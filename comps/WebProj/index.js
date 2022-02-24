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
    // width: 100%;
    // margin-bottom: 50px;
    // margin-right: 0;
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
`;

const LangText = styled.p`
  width: 100%;
  margin-bottom: ${(props) => props.TxtMarginB}px;
  color: ${(props) => props.lancolor};
  font-style: italic;

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
  flip = false,
  direction = "row",
  justify = "flex-start",

  leftonClickT = () => {},
  rightonClickT = () => {},

  leftonClickB = () => {},
  rightonClickB = () => {},

  titleOne = "MyLandlord",
  spanOne = "MyLandlord",
  textOne = "is a website that is targeted towards residents looking to find an ideal Landlord to rent from in the lower mainland. MyLandlord provides a safe platform for tenants and landlords to communicate and allows tenants to leave honest reviews during their time with the landlord to help other prospective renters.",
  languageone = "Next.js, React, React UI",

  TitMarginB = 20,
  TxtMarginB = 20,

  titleTwo = "reVamp",
  spanTwo = "reVamp",
  textTwo = "is an application that shows how old clothes can be repurposed through its tutorials. It offers many different methods for upcycling clothing items. Additionally, the app aims to educate users about the relationship between sustainability and fast fashion.",
  languagetwo = "Next.js, React",

  srcT = "./images/projects/img_MyLandlord.png",
  srcB = "./images/projects/img_reVamp.png",

  marginRT = "5%",
  marginLT = "0",
  marginRB = "0",
  marginLB = "5%",

  imgMarginLT = "5%",
  imgMarginRT = "0",
  imgMarginLB = "0",
  imgMarginRB = "5%",

  shapeWidthT = "",
  shapeHeightT = "",
  shapeWidthB = 41,
  shapeHeightB = 41,

  bttnTxtL = "Homepage",
  bttnTxtR = "GitHub",
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
      {flip === false ? (
        <>
          <ContCont marginR={marginRT} marginL={marginLT}>
            <WebProjTit TitMarginB={TitMarginB}>{titleOne}</WebProjTit>

            <WebProjText TxtMarginB={TxtMarginB}>
              <ColorTxt spanColor={medBlue[theme]}>{spanOne}</ColorTxt>
              {textOne}
            </WebProjText>

            <LangText lancolor={medBlue[theme]}>{languageone}</LangText>

            <BttnCont>
              <Button
                onClick={leftonClickT}
                text={bttnTxtL}
                width="100%"
                marginright="20"
              />
              <Button onClick={rightonClickT} text={bttnTxtR} width="100%" />
            </BttnCont>
          </ContCont>

          <ProImg src={srcT} marginL={imgMarginLT} marginR={imgMarginRT} />
        </>
      ) : (
        <>
          <ProImg src={srcB} marginL={imgMarginLB} marginR={imgMarginRB} />

          <ContCont marginR={marginRB} marginL={marginLB}>
            <WebProjTit TitMarginB={TitMarginB}>{titleTwo}</WebProjTit>

            <WebProjText TxtMarginB={TxtMarginB}>
              <ColorTxt spanColor={medBlue[theme]}>{spanTwo}</ColorTxt>
              {textTwo}
            </WebProjText>

            <LangText lancolor={medBlue[theme]}>{languagetwo}</LangText>

            <BttnCont>
              <Button
                onClick={leftonClickB}
                text={bttnTxtL}
                width="100%"
                marginright="20"
              />
              <Button onClick={rightonClickB} text={bttnTxtR} width="100%" />
            </BttnCont>
          </ContCont>
        </>
      )}
    </WebProjCont>
  );
};

export default WebProj;
