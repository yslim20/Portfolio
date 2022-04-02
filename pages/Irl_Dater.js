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
import Footer from '@/comps/Footer';

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

const Irl_Dater = ({
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
            url = "/images/projects/irl_Dater/irl_dater_cover.png"
            urlMobile = "/images/projects/irl_Dater/irl_Dater_cover_900.png"
            src ="/video/arrow_gray-down-arrow.gif"
          />
        </SecCont>

        <SecCont>
          <Description 
            title = "irl_Dater"
            span = "irl_Dater "
            text = " is a dating application designed to help users meet that special someone while having fun with an unique point system."
            languageT = "Role: Front-End Developer, UX/UI Designer"
            lanSpanT = ""

            languageB = "Tools: "
            lanSpanB = 'HTML, CSS, jQuery, GitHub, Figma'

            year = 'Year: 2021'
            bttnTxtL = 'Go to Marketing page'
            leftonClick = {() => window.open('http://irldater.younsoolim.com/', '_blank')}
            rightonClick = {() => window.open('https://github.com/yslim20/irl_Dater', '_blank')}
          />
        </SecCont>

        <SecCont>
          <Ideation 
            background = '#FDF3F5'
            text = {`
              irl_Dater is designed to help singles meet other singles in a fun environment. The game aspect of this dating app will allow users to have fun while forming meaningful relationships. 

              Our app offers the most suitable choices for users. Using our app, users can find their own irl_Love with high-quality matches they can imagine. It is especially convenient for users to share their points with someone they have matched with, so the points can be redeemed by both of them. In this way, users can redeem their points for movie tickets or dinners.
            `}
          />
        </SecCont>

        <SecCont>
          <Process 
            src='/images/projects/irl_Dater/irl_dater_persona.png'       
          />
        </SecCont>

        <SecCont>
          <Process 
            title='Site Map'
            background = 'rgba(253, 243, 245, 0.5)'
            aos = "fade-right"
            src='/images/projects/irl_Dater/irl_dater_lo-fi.png'
            alt='task model'
          />
        </SecCont>

        <SecCont>
          <StyleGuide 
            src='/images/projects/irl_Dater/irl_dater_styleguide.png'
          />
        </SecCont>

        <SecCont>
          <Process 
            background = 'rgba(253, 243, 245, 0.5)'
            aos = "fade-right"
            title='High-fidelity Prototype'
            src='/images/projects/irl_Dater/irl_dater_hi-fi.png'
            alt='lo-fi prototype'
          />
        </SecCont>

        <SecCont>
          <Process 
            title='Marketing Page'
            src='/images/projects/irl_Dater/irl_dater_marketingpage.png'
            alt='hi-fi prototype'
          />
        </SecCont>

        <SecCont>
          <Ideation 
            background = '#FDF3F5'
            titletxt = 'Conclusion'
            text = {`We started with a low-fidelity prototype, which we gradually developed into a beautifully designed application over time. We designed all aspects of irl_Dater, including colours, icons, and typography. During the usability test, we learned what was working well and what needed to be changed on our app. We revised and updated the prototype based on this and created a spec sheet for full-stack students who would code out the front-end.

            In addition, we created a marketing page and a video to promote the irl_Dater app.`}
          />
        </SecCont>

        <SecCont height = '50'>
          <ScrollArrow/>
        </SecCont>

        <Footer />
      </Cont>

    </Wrap>
  )
}

export default Irl_Dater;
