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
import ContactSec from '@/comps/ContactSec';
import Contact from '@/comps/Contact';
import Hero from '@/comps/Hero';
import Description from '@/comps/Description'

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





// const ContCont = styled.div`
//   width: 45%; height: 100%;
//   display: flex;
//   justify-content: center;
//   items-align: center;
//   position: absolute;
//   margin-left: 25%;
//   box-sizing: border-box;
//   transition: all 0.3s ease-in-out;

//   @media only screen and (min-width: 1001px) and (max-width:1100px){    
//     width: 50%;
//     margin-left: 10%;
//   }

//   @media only screen and (min-width: 481px) and (max-width:1000px){    
//     width: 100%;
//     margin-left: 0;
//     padding: 0 9.02%;
//   }

//   @media only screen and (min-width: 1px) and (max-width:480px){    
//     width: 100%;
//     margin-left: 0;
//     padding: 0 9.02%;
//   }
// `


const MyLandlord = ({
  conwidth ="",  
  height = "100vh",
  heightAll = "",

}) => {

  const sectionOne = useRef();
  const sectionTwo = useRef();
  const sectionThree = useRef();
  const sectionFour = useRef();
  const sectionFive = useRef();
  const router = useRouter();

  


  function scrollViewTwo() {
    document.getElementById('sectionTwo').scrollIntoView({behavior: 'smooth'});
  }

  function scrollViewThree() {
    document.getElementById('sectionThree').scrollIntoView({behavior: 'smooth'});
  }

  function scrollViewFour() {
    document.getElementById('sectionFour').scrollIntoView({behavior: 'smooth'});
  }
   
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
        <NaviMobile 
          onLogoClick={ () => {

            sectionOne.current.scrollIntoView(
              {behavior: "smooth"}
            )
          }}
          
          onWebClick = {() => {
            sectionTwo.current.scrollIntoView(
              {behavior: "smooth"}
            )
          }}
          onDesClick = {() => {
            sectionThree.current.scrollIntoView(
              {behavior: "smooth"}
            )
          }}
          onAboutClick = {() => {
            sectionFour.current.scrollIntoView(
              {behavior: "smooth"}
            )
          }}      
        />        
      </MobCont> 
{/* Navigation ends */}

      <Cont
        conwidth={conwidth}
      >

        {/* <SecCont ref = {sectionOne} height = {height}>
            <HomeSec 
              // onButtonClick={() => window.open('mailto:yslim.bcit@gmail.com', '_blank')}
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
        </SecCont> */}
        <SecCont>
          <Hero />
        </SecCont>

        <SecCont>
          <Description />
        </SecCont>


      </Cont>

    </Wrap>
  )
}

export default MyLandlord;
