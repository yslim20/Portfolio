import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";

import Logo from "../Logo";
import LinkVer from "../LinkVer";
import NavText from "../NavText";

// ============ CSS ============== //
const Container = styled.div`
  display: block;
  height: calc(100vh);
  width: 110px;
  background-color: #202020;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: calc(5.37vh);
  box-sizing: border-box;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    display: none;
  }
`;

const LinkCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// ============ Layout
const NaviDef = ({

}) => {
  const router = useRouter();

  return (
    <Container>
      <Logo
        onClick={() => {
          router.push('/',undefined,{shallow:true})
        }}
      />

      <LinkCont>
        <NavText
          onClick={() => {
            router.push('/?section=sectionTwo',undefined,{shallow:true})
          }}
          text="Web"
        />

        <NavText
          onClick={() => {
            router.push('/?section=sectionThree',undefined,{shallow:true})
          }}
          text="Design"
          borderT=""
        />

        <NavText
          onClick={() => {
            router.push('/?section=sectionFour',undefined,{shallow:true})
          }}
          borderT=""
        />
      </LinkCont>

      <LinkVer />
    </Container>
  );
};

export default NaviDef;
