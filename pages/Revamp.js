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

const Revamp = ({
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
          <Hero 
            url = "/images/projects/reVamp/revamp_cover.png"
            urlMobile = "/images/projects/reVamp/revamp_cover_900.png"
          />
        </SecCont>

        <SecCont>
          <Description 
            title = "reVamp"
            span = "reVamp "
            text = " is an application that shows how old clothes can be repurposed through its tutorials. Also, it offers many different methods for upcycling clothing items."
            languageT = "Role: Front-End Developer, UX/UI Designer"
            lanSpanT = ""

            languageB = "Tools: "
            lanSpanB = 'React, Next.js, JavaScript, GitHub, Figma'

            year = 'Year: 2021'
            leftonClick = {() => window.open('https://revamp-yslim.vercel.app', '_blank')}
            rightonClick = {() => window.open('https://github.com/yslim20/reVamp', '_blank')}
          />
        </SecCont>

        <SecCont>
          <Ideation 
            children = {`
              Our web app idea was to create an app that could repurpose your clothing items in a variety of ways: 

              1. The app provides tutorials for repurposing old clothes, as well as information about how to recycle old clothes.
              2. An educational app that educates users about the impact of fast fashion on the environment
              
              Our research on current and popular sustainable clothing applications helped us determine our competitive edge. Our goal was to focus on ways to repurpose clothes in a creative and interactive way - through DIY crafts. In addition, users can donate their clothes to a few donation centers where clothes can be dropped off. 
            `}
          />
        </SecCont>

        <SecCont>
          <Process 
            src='/images/projects/reVamp/revamp_persona.png'       
          />
        </SecCont>

        <SecCont>
          <Process 
            title='Site Map'
            background = '#E9F6FB'
            aos = "fade-right"
            src='/images/projects/reVamp/revamp_sitemap.png'
            alt='task model'
          />
        </SecCont>

        <SecCont>
          <StyleGuide 
            src='/images/projects/reVamp/revamp_styleguide.png'
          />
        </SecCont>

        <SecCont>
          <Process 
            background = '#E9F6FB'
            aos = "fade-right"
            title='High-fidelity Prototype Ver.1'
            src='/images/projects/reVamp/revamp_lo-fi.png'
            alt='lo-fi prototype'
          />
        </SecCont>

        <SecCont>
          <Process 
            title='High-fidelity Prototype Ver.2'
            src='/images/projects/reVamp/revamp_hi-fi.png'
            alt='hi-fi prototype'
          />
        </SecCont>

        <SecCont>
          <Ideation 
            titletxt = 'Conclusion'
            children = {`When we built the scope and feature document, we identified what features and functions we were going to make for each page. By doing this, we could clearly see how the page layout would look when the app was coded.

            Our final high-fidelity prototype was designed based on user testing between each prototype. We implemented reusable components and routing functions using the tests to design the final high-fidelity prototype.`}
          />
        </SecCont>

        <SecCont height = '50'>
          <ScrollArrow/>
        </SecCont>
      </Cont>

    </Wrap>
  )
}

export default Revamp;
