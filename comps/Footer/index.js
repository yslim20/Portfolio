import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 2rem;
`;

const LogoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  max-width: 112px;
  transition: all 0.3s; 
  cursor: pointer;

  :hover div{
    background-image: url(${(props) => props.urlHover});
    background-color: #d7aef2;
    transform: scale(0.95);
  }

  :hover p{
    transform: scale(0.95);
  }

  :active div{
    background-image: url(${(props) => props.urlHover});
    background-color: #d7aef2;
    transform: scale(0.95);
  }

  :active p{
    transform: scale(0.95);
  }

  @media only screen and (max-width: 480px) {
    padding: 0 0.75rem;
    max-width: 68px;
  }
`;

const Logo = styled.div`
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: ${props => props.bkSize};
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;  
  transition: all 0.3s; 
  box-sizing: border-box;

  @media only screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
    background-size: ${props => props.bkSizeM};
  }
`;

const Txt = styled.p`
  font-size: 0.75em;
  margin-top: 0.375em;
  color: #999;

  @media only screen and (max-width: 480px) {
    font-size: 0.5em;
  }
`

const Footer = ({}) => {
  const router = useRouter();

  return (
    <Cont>
      <LogoCont
        onClick={() => router.push("/MyLandlord")}
        urlHover="/images/logo_mylandlord_w.svg"  
      >
        <Logo
          url="/images/logo_mylandlord.png" 
          title="Go to MyLandlord"
          bkSize='3em auto'
          bkSizeM='2em auto'
        />
        <Txt>
          MyLandlord
        </Txt>
      </LogoCont>

      <LogoCont
        onClick={() => router.push("/Revamp")}
        urlHover="/images/logo_revamp_w.svg" 
      >
        <Logo
          url="/images/logo_revamp.svg" 
          title="Go to reVamp"
          bkSize='2.25em auto'
          bkSizeM='1.625em auto'
        />
        <Txt>
          reVamp
        </Txt>
      </LogoCont>

      <LogoCont
        onClick={() => router.push("/Irl_Dater")}
        urlHover="/images/logo_irl_dater_w.svg"  
      >
        <Logo
          url="/images/logo_irl_dater.svg"
          title="Go to irl_Dater"
          bkSize='2.75em auto'
          bkSizeM='2em auto'
        />
        <Txt>
          irl_Dater
        </Txt>
      </LogoCont>
    </Cont>
  );
};

export default Footer;
