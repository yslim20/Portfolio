import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useTheme } from "@/utils/provider";
import { useRouter } from 'next/router';

import NaviMobile from '@/comps/NaviMobile';
import NaviDef from '@/comps/NaviDef';
import HomeSec from '@/comps/HomeSec';
import AboutSec from '@/comps/AboutSec';
import WebSec from '@/comps/WebSec';
import DesignSec from '@/comps/DesignSec'
import Scroll from '@/comps/Scroll';

// ============ CSS ============== //
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const SideBar = styled.div`
  overflow-x: hidden;
  position: fixed;
  z-index:999;
  top: 0;
  left: 0;  

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    display: none;
  }
`
const DefCont = styled.div`
  height: calc(100vh);
  width: 110px;  

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    display: none;
  }
`
const MobCont = styled.div`
  display: none;
  z-index: 999;
  position: sticky;
  top: 0;
  
  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    display: block;
  }
`

const Cont = styled.div`  
  width:100%;
  display: flex;
  flex-direction: column;  
  padding-left: 109px;
  width: ${props=>props.conwidth};

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    padding-left:  0;
    transition: all 0.3s;
  }
`

const SecCont = styled.div`  
  height: ${props => props.height};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;  
  position: relative; 
  box-sizing: border-box; 
`

const Home = ({
  conwidth ="",  
  height = "100vh",
  heightAll = "",

}) => {

  const sectionOne = useRef();
  const sectionTwo = useRef();
  const sectionThree = useRef();
  const sectionFour = useRef();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      document.getElementById(router.query.section || 'sectionOne').scrollIntoView({behavior: 'smooth'});
    }, 1000);
  }, [router.query.section]);
  
  return (
    <Wrap>
      <Head>
        <title>YounSoo Lim Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
{/* Navigations */}
      <SideBar>
        <DefCont>
          <NaviDef/>
        </DefCont>      
      </SideBar>
      <MobCont>
        <NaviMobile/>        
      </MobCont> 
{/* Navigation ends */}
      <Cont
        conwidth={conwidth}
      >

        <SecCont ref = {sectionOne} id = 'sectionOne' height = {height}>
          <HomeSec 
            onButtonClick={() => sectionFour.current.scrollIntoView(
              {behavior: "smooth"}
            )}
          />
        </SecCont>

        <SecCont ref = {sectionTwo} id = 'sectionTwo' height = {heightAll}>
          <WebSec />
        </SecCont>

        <SecCont ref = {sectionThree} id = 'sectionThree' height = {heightAll}>
          <DesignSec />
        </SecCont>
           
        <SecCont ref = {sectionFour} id = 'sectionFour' height = {heightAll}>
          <AboutSec />
        </SecCont>
      </Cont>

    </Wrap>
  )
}

export default Home;
