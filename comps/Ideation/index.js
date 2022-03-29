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
  background: ${props => props.bkColor};

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
  margin-bottom: 30px;
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

// ============ Function ============== //

const Ideation = ({
  // ============ Props
  direction = "column",
  justify = "flex-start",
  background = '#F0F8FC',

  titletxt = 'Ideation',
  TxtMarginB = 20,
  children = ' is a website that is targeted towards residents looking to find an ideal Landlord to rent from in the lower mainland. MyLandlord provides a safe platform for tenants and landlords to communicate and allows tenants to leave honest reviews during their time with the landlord to help other prospective renters.',

  marginR = "5%",
  marginL = "0",

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
      data-aos="fade-right"
      bkColor={background}
    >
      <ContCont marginR={marginR} marginL={marginL}>
        <Title titColor = {medBlue[theme]}>
          {titletxt}     
        </Title>

        <Text TxtMarginB={TxtMarginB} className = 'new-line'>
          {children}
        </Text>

      </ContCont>
    </Cont>
  );
};

export default Ideation;
