import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import styles from "@/styles/Home.module.css";
import Desc from "@/comps/Desc";
import DivImg from "@/comps/DivImg";
import Resume from "@/comps/Resume";
import Scroll from "../Scroll";
import About from "@/comps/About";

import { useTheme } from "@/utils/provider";
import { themes, lylac, medBlue, lightTxt, ltLylac } from "@/utils/variables";

// ============ CSS ============== //

const ContCont = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 9.02%;
  box-sizing: border-box;

  @media only screen and (max-width: 1000px) {
    height: 100%;
    padding: 9.02%;
    flex-wrap: wrap;
  }
`;

const Cont = styled.div`  
  width: 100%; height: 100%;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    flex-direction: column;
    align-items: center;  
    justify-content center; 
    height: 100%; 
  }
`;

const SubTitle = styled.h5`
  width: 100%;
  margin-bottom: 3rem;
  color: ${(props) => props.titColor};
  transition: all 0.3s;
  position: relative;

  :before {
    content: "";
    width: 50px;
    position: absolute;
    left: 0;
    top: 35px;
    height: 1.5px;
    background: ${(props) => props.lineColor};
    transform-origin: left center;

    @media only screen and (min-width: 460px) {
      width: 65px;
      top: 40px;
    }
  }

  @media only screen and (min-width: 461px) and (max-width: 1000px) {
    margin-bottom: 4rem;
  }

  @media only screen and (min-width: 1px) and (max-width: 460px) {
    font-size: 1.25em;
    font-weight: 700;
    margin-bottom: 3em;
  }
`;

const ImgCont = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./images/img_Background.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-attachment: fixed;
  opacity: 0.2;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -999;
  box-sizing: border-box;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    background-size: 100%;
  }
`;

const DesContL = styled.div`
  width: 45%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all 0.3s;
  position: relative;

  :hover img {
    opacity: 1;
  }

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    width: 100%; height: 80%;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

const Prof = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  object-fit: cover;
  transition: all 0.3s;
  display: block;
  border-radius: 1rem;
  overflow: hidden;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    width: 50%;
    height: auto;
  }
`;

const ProfBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: #181818;
  position: absolute;
  top: 0; left: 0;
  z-index: -1;
  transition: all 0.3s;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    width: 50%;
    margin-left: 25%;
  }
`

const DesContR = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all 0.3s;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    position: static;
    left: 10%;
  }
`;

const DivCont = styled.div`
  width: 101%;
  height: 100%;
  display: block;
  position: absolute;
  top: -1px;
  left: -1px;
  z-index: -99;
  over-flow: hidden;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    background-size: 150%;
    transition: all 0.3s;
  }
`;

const AboutSec = ({ topL = 10, topR = 35 }) => {
  const { theme, setTheme } = useTheme();

  return (
    <ContCont>
      <DivCont>
        <DivImg url="./images/img_Div_Black.svg" position="left top" />
      </DivCont>
      <SubTitle titColor={medBlue[theme]} lineColor={lylac[theme]}>
        About me
      </SubTitle>

      <Cont>
        <DesContL top={topL}>
          <Prof src="./images/img_profile.png" alt="profile image" />
          <ProfBox/>
        </DesContL>

        <DesContR top={topR}>
          <About />
        </DesContR>
        <ImgCont />
      </Cont>
    </ContCont>
  );
};

export default AboutSec;
