import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css'
import { useTheme } from "@/utils/provider";
import { useRouter } from 'next/router';
import { lylac, medBlue, themes } from '@/utils/variables';

import Button from '../Button';
import Scroll from '../Scroll';
import DivImg from '../DivImg';
import WebProj from '../WebProj';
import WebProjMob from '../WebProjMob';

// ============ CSS ============== //
const Cont = styled.div`  
  width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 9.02%;
  position: relative;
  overflow: hidden;
  z-index: 1;  
  box-sizing: border-box;

  @media only screen and (max-width: 600px){
    padding: 9.02%;
  }
`

const ImgCont = styled.div`
  width: 100%; height: 100%; 
  background-image: url("./images/img_ProBackground.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-attachment: fixed; 
  opacity: 0.2;
  position: absolute;
  bottom: -1px; left: 0;
  z-index: -999;  
  box-sizing: border-box;  

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    background-size: 100%;
  }
`

const WebCont = styled.div`
  display: block;
  width: 100%; 

  @media only screen and (min-width: 1px) and (max-width:1000px){    
    diplay: none;
    width: 0; height: 0;
    overfolow: hiden;
  }
`
  
const Title = styled.h5`
  width: 100%;
  margin-bottom: 80px;
  color: ${props => props.titColor};
  transition: all 0.3x;
  position: relative;

  :before {
    content: "";
    width: 50px;
    position: absolute;
    left: 0;
    top: 35px;
    height: 1.5px;
    background: ${props => props.lineColor};
    transform-origin: left center;

    @media only screen and (min-width: 460px){
      width: 65px;
      top: 40px;
    }
  }

  @media only screen and (min-width: 461px) and (max-width:1000px){    

  }

  @media only screen and (min-width: 1px) and (max-width:460px){    
    font-size: 1.25em;
    font-weight: 700; 
  }
`

const DivConB = styled.div`
  width: 101%;
  height: 100%;
  display: block;
  position: absolute;
  bottom: -1px;
  left: 0;
  z-index: -99;
  overflow: hidden;

  @media only screen and (min-width: 1px) and (max-width:1000px){
    background-size: 150%;
    transition: all 0.3s;
  }
`


const WebSec = ({

  // onButtonClick = () => {},

}) => {

  const {theme, setTheme} = useTheme();
  const router = useRouter();
  
  return (
    <Cont>
      <ImgCont />
      <Title titColor = {medBlue[theme]} lineColor={lylac[theme]}>
        Web Development      
      </Title>

      <WebCont>
{/* ==================== Web Projects */}
        <WebProj 
          // leftonClickT = {() => window.open('https://mylandlord-front-end.vercel.app', '_blank')}
          // rightonClickT = {() => window.open('https://github.com/yslim20/MyLandlord-Front-End', '_blank')}  
          leftonClick = {() => router.push('/MyLandlord')}
        />

        <WebProj
          shapeHeightT = "34"
          shapeWidthT = "60"
          top = "45"
          left = "50"
          
          topM = ""
          leftM ='-10'

          titleOne = "reVamp"
          spanOne = "reVamp"
          textOne = "An an educational app to recycle or to upcycle old clothes"

          // textOne = "is an application that shows how old clothes can be repurposed through its tutorials. Also, it offers many different methods for upcycling clothing items."
          languageone = 'Next.js, React, GitHub'
          languageT = "Role: Front-End Developer, UX/UI Designer"
          lanSpanT = ''
          roleTop = {`• Contributed to all stages of development, including planning, testing, and coding.
          • Constructed a user-interactive site architecture.
          • Built reusable and scalable code and components.`}
          roleBttm = ''
          languageB = "Tools: "
          lanSpanB = 'Next.js, React, GitHub'
          srcT = "/images/projects/img_reVamp.png"

          leftonClick = {() => router.push('/Revamp')}

          // leftonClick = {() => window.open('https://revamp-yslim.vercel.app', '_blank')}
          // rightonClick = {() => window.open('https://github.com/yslim20/reVamp', '_blank')}
        />

        <WebProj      
          shapeHeightT = "34"
          shapeWidthT = "60"
          top = "45"
          left = "50"
          
          topM = ""
          leftM ='-10'

          titleOne = "irl_Dater"
          spanOne = "irl_Dater"
          textOne = "A dating application and marketing website"

          // textOne = "is a dating application designed to help users meet that special someone while having fun with an unique point system."
          languageT = "Role: Front-End Developer(Marketing Page), UX/UI Designer"
          lanSpanT = ''
          roleTop = {`• Collected, researched, investigated and evaluated user requirements. 
          • Provided an exceptional user experience through intuitive application design. 
          • Designed and developed a marketing website for the application.`}
          roleBttm = ''
          languageB = "Tools: "
          lanSpanB = 'HTML, CSS, jQuery, GitHub, Figma'
          srcT = "/images/projects/img_irl_Dater.png"

          leftonClick = {() => router.push('/Irl_Dater')}

          // rightonClick = {() => window.open('https://github.com/yslim20/irl_Dater', '_blank')}
          // leftonClick = {() => window.open('http://irldater.younsoolim.com/', '_blank')}
        />

        <WebProj 
          shapeHeightT = "34"
          shapeWidthT = "60"
          top = "45"
          left = "50"
          
          topM = ""
          leftM ='-10'

          titleOne = "About Kingdom"
          spanOne = ""
          textOne = "A blog site about the Korean drama series, The Kingdom"

          // textOne = "is a dating application designed to help users meet that special someone while having fun with an unique point system."
          languageT = "Role: Web Developer"
          lanSpanT = ''
          roleTop = {`• Collected, researched, investigated and evaluated user requirements. 
          • Provided an exceptional user experience through intuitive application design. 
          • Designed and developed a marketing website for the application.`}
          roleBttm = ''
          languageB = "Tool: "
          lanSpanB = "WordPress"
          srcT = "/images/projects/img_Kingdom.png"

          bttnTxtL = 'Go to Homepage'

          leftonClick = {() => window.open('http://kingdom.younsoolim.com/', '_blank')}  
        />
      </WebCont>

{/* ==================== Mobile Projects */}
      <WebProjMob 
        // leftonClick = {() => window.open('https://mylandlord-front-end.vercel.app', '_blank')}
        // rightonClick = {() => window.open('https://github.com/yslim20/MyLandlord-Front-End', '_blank')}   
        leftonClick = {() => router.push('/MyLandlord')}
      />

      <WebProjMob 
        src = "/images/projects/img_reVamp.png"
        title = "reVamp"
        span = "reVamp"
        text = "is an application that shows how old clothes can be repurposed through its tutorials. Also, it offers many different methods for upcycling clothing items."
        languageT = "Role: Front-End Developer, UX/UI Designer"
        lanSpanT = ''
        languageB = "Tools: "
        lanSpanB = 'Next.js, React, GitHub'
        role = {`• Contributed to all stages of development, including planning, testing, and coding.
          • Constructed a user-interactive site architecture.
          • Built reusable and scalable code and components.`}

        leftonClick = {() => router.push('/Revamp')}
        // leftonClick = {() => window.open('https://revamp-yslim.vercel.app', '_blank')}
        // rightonClick = {() => window.open('https://github.com/yslim20/reVamp', '_blank')}
      />

      <WebProjMob 
        src = "/images/projects/img_irl_Dater.png"
        title = "irl_Dater"
        span = "irl_Dater"
        text = "is a dating application designed to help users meet that special someone while having fun with an unique point system."
        languageT = "Role: Web Developer(Marketing Page), UX/UI Designer"
        lanSpanT = ''
        languageB = "Tools: "
        role = {`• Collected, researched, investigated and evaluated user requirements. 
          • Provided an exceptional user experience through intuitive application design. 
          • Designed and developed a marketing website for the application.`}
        lanSpanB = 'HTML, CSS, jQuery, GitHub, Figma'

        leftonClick = {() => router.push('/Irl_Dater')}
        // leftonClick = {() => window.open('http://irldater.younsoolim.com/', '_blank')}
        // rightonClick = {() => window.open('https://github.com/yslim20/irl_Dater', '_blank')}
      
      />    

      <WebProjMob 
        src = "/images/projects/img_Kingdom.png"
        title = "About Kingdom"
        contMarginB = '80'
        span = ""
        text = "A blog site about the Korean drama series, The Kingdom"
        languageT = "Role: Web Developer"
        lanSpanT = ''
        languageB = "Tools: "
        role = {`• Collected, researched, investigated and evaluated user requirements. 
          • Provided an exceptional user experience through intuitive application design. 
          • Designed and developed a marketing website for the application.`}
        lanSpanB = 'WordPress'
        bttnTxtL = 'Homepage'
        leftonClick = {() => window.open('http://kingdom.younsoolim.com/', '_blank')}      
      />   
      
      <DivConB>
        <DivImg 
          url = "/images/img_Div_blackBttm.svg"
          position = "left bottom"
        />
      </DivConB>
      <Scroll />      
      
    </Cont>
    );
}

export default WebSec;
