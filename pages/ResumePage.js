import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import React from "react";

import { useTheme } from "@/utils/provider";
import { themes, lylac, medBlue, lightTxt, ltLylac } from "@/utils/variables";

import Resume from "@/comps/Resume";
import NaviMobile from "@/comps/NaviMobile";
import NaviDef from "@/comps/NaviDef";


const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const SideBar = styled.div`
  overflow-x: hidden;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    display: none;
  }
`;

const DefCont = styled.div`
  height: calc(100vh);
  width: 110px;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    display: none;
  }
`;
const MobCont = styled.div`
  display: none;
  z-index: 999;
  position: sticky;
  top: 0;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    display: block;
  }
`;

const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 109px;
  width: ${(props) => props.conwidth};
  background: #101010;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    padding-left: 0;
    transition: all 0.3s;
  }
`;

const TitCont = styled.div`
  padding: 5% 9.02% 2%;
`

const SubTitle = styled.h5`
  width: 100%;
  margin-bottom: 20px;
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
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 1px) and (max-width: 460px) {
    font-size: 1.25em;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const ResumePage = ({
  routeTo = "/",
})  => {
  const { theme, setTheme } = useTheme();
  const router = useRouter()

  return (
    <Wrap>
      <Head>
        <title>YounSoo Lim Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Navigations */}
      <SideBar>
        <DefCont>
          <NaviDef
            onLogoClick={() => {
              router.push(routeTo)
              // sectionOne.current.scrollIntoView({ behavior: "smooth" });
            }}
            onAboutClick={() => {
              router.push(routeTo)
              // sectionTwo.current.scrollIntoView({ behavior: "smooth" });
            }}
            onWebClick={() => {
              router.push(routeTo)
              // sectionThree.current.scrollIntoView({ behavior: "smooth" });
            }}
            onDesClick={() => {
              router.push(routeTo)
              // sectionFour.current.scrollIntoView({ behavior: "smooth" });
            }}
            onContClick={() => {
              router.push(routeTo)
              // sectionFive.current.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </DefCont>
      </SideBar>
      <MobCont>
        <NaviMobile
          onLogoClick={() => {
            router.push(routeTo)
            // sectionOne.current.scrollIntoView({ behavior: "smooth" });
          }}
          onAboutClick={() => {
            router.push(routeTo)
            // sectionTwo.current.scrollIntoView({ behavior: "smooth" });
          }}
          onWebClick={() => {
            router.push(routeTo)
            // sectionThree.current.scrollIntoView({ behavior: "smooth" });
          }}
          onDesClick={() => {
            router.push(routeTo)
            // sectionFour.current.scrollIntoView({ behavior: "smooth" });
          }}
          onContClick={() => {
            router.push(routeTo)
            // sectionFive.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </MobCont>
      {/* Navigation ends */}

      <Cont>
        <TitCont>
          <SubTitle titColor={lylac[theme]} lineColor={medBlue[theme]}>
            Resume
          </SubTitle>
        </TitCont>
        <Resume />
      </Cont>
    </Wrap>
  );
}

export default ResumePage;
