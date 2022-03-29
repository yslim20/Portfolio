import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useTheme } from "@/utils/provider";
import { useRouter } from 'next/router';

import NaviMobile from '@/comps/NaviMobile';
import NaviDef from '@/comps/NaviDef';
import Hero from '@/comps/Hero';
import Description from '@/comps/Description';
import Ideation from '@/comps/Ideation';
import Process from '@/comps/Process';
import StyleGuide from '@/comps/StyleGuide';
import ScrollArrow from '@/comps/ScrollArrow';

// ============ CSS ============== //
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
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

const MyLandlord = ({
  conwidth ="",  
}) => {
 
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
        <NaviMobile />        
      </MobCont> 
{/* Navigation ends */}

      <Cont conwidth={conwidth}>
        <SecCont>
          <Hero />
        </SecCont>

        <SecCont>
          <Description 
            // leftonClick= {() => window.open('https://mylandlord-front-end.vercel.app', '_blank')}
            rightonClick = {() => window.open('https://github.com/yslim20/MyLandlord-Front-End', '_blank')}  
          />
        </SecCont>

        <SecCont>
          <Ideation />
        </SecCont>

        <SecCont>
          <Process />
        </SecCont>

        <SecCont>
          <Process 
            title='Task Models'
            background = '#F0F8FC'
            aos = "fade-right"
            src='/images/projects/MyLandlord/mylandlord_taskmodel_.png'
            alt='task model'
          />
        </SecCont>

        <SecCont>
          <Process 
            title='Low-fidelity Prototype'
            src='/images/projects/MyLandlord/mylandlord_proto.png'
            alt='lo-fi prototype'
          />
        </SecCont>

        <SecCont>
          <StyleGuide 
            background = '#F0F8FC'
            aos = "fade-right"
            imgWidth='70'
            imgMWidth='70'
          />
        </SecCont>

        <SecCont>
          <Process 
            title='High-fidelity Prototype'
            src='/images/projects/MyLandlord/mylandlord_hifi.png'
            alt='hi-fi prototype'
          />
        </SecCont>

        <SecCont>
          <Ideation 
            titletxt = 'Conclusion'
            span = ''
            text = {`In order to make it more user-friendly, we performed several usability tests after constructing the task model, persona, and wireframe. We then created a final prototype based on these tests to develop our application and to start coding it. 

            We have built the frontend of the application using markup languages, such as React and Next.js, in collaboration with full-stack developers.`}
          />
        </SecCont>

        <SecCont height = '50'>
          <ScrollArrow/>
        </SecCont>
      </Cont>

    </Wrap>
  )
}

export default MyLandlord;
