import styled from "styled-components";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@/comps/Button";

import { useTheme } from "@/utils/provider";
import { themes, ltLylac, medBlue } from "@/utils/variables";

// ============ CSS ============== //
const DescCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  @media only screen and (min-width: 1056px) and (max-width: 1225px) {
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 1001px) and (max-width: 1055px) {
    padding-bottom: 3rem;
  }

  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    width: 72.46%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 0 1.5em;
  }
`;

const DescTit = styled.h4`
  width: ${props => props.wid};
  margin-bottom: ${(props) => props.TitMarginB}px;
  line-height: 1.25em;
  z-index: 1;
  font-size: ${props => props.fsize}em;
  font-weight: ${props => props.titweight};  
  // display: inline;
  display: ${props => props.display};
  color: ${props => props.color};

  @media only screen and (min-width: 481px) and (max-width: 1000px) {
    font-size: 2em;
  }

  @media only screen and (min-width: 1px) and (max-width: 480px) {
    font-size: 1.75em;
  }
`;

const TxtCont = styled.div`
  display: inline-flex;
  @media only screen and (max-width: 1000px) {
    font-size: 1em;
  }

`

const Text = styled.div`
  width: 100%;
  display: inline;
  margin-bottom: ${(props) => props.TxtMarginB}px;  
  font-size: 1em;
  font-weight: 300; 
  line-height: 1.4em;  

  @media only screen and (max-width: 1000px) {
    font-size: 1em;
  }
`;

const BttnCont = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  @media only screen and (min-width: 1px) and (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
  }
`

// ============ Function ============== //

const About = ({
  // ============ Props
  wid = '100%',
  widN = '100%',
  titweight = 400,
  display = 'block',
  displayN = 'inline-block',
  title = "Hello, I am ...",
  fsize = 2,
  fsizeN = 2.5,
  TitMarginB = 10,
  nameMarginB = 20,
  TxtMarginB = 10,
  TxtMarginBB,

  justify = "flex-start",

}) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // ============ Layout
  return (
    <DescCont justify={justify}>
      <div data-aos="fade-up">
        <DescTit fsize={fsize} wid={wid} TitMarginB={TitMarginB} titweight={titweight} display={display}>{title}</DescTit>
        <DescTit fsize={fsizeN} wid={widN} TitMarginB={nameMarginB} display={displayN} color = {medBlue[theme]}>
          Youn Soo Lim 💻🖱️
        </DescTit>
        <TxtCont className='inline-flex'>
          <Text TxtMarginB={TxtMarginB}>
            My studies at British Columbia Institute of Technology gave me a solid foundation in&nbsp;
            <Text className="color-txt">front-end development,</Text>&nbsp;including&nbsp;
            <Text className="color-txt">HTML, CSS, JavaScript, jQuery, and React.</Text>
            &nbsp;As a front-end developer, I am excellent at managing time, resolving problems, and adapting to changing environments.
          </Text> 
        </TxtCont>

        <TxtCont className='inline-flex'>
          <Text TxtMarginB={TxtMarginBB}>
            In addition, I studied <Text className="color-txt">Fashion Design, Visual Presentation &amp; Exhibition Design</Text>, 
            as well as a wide range of <Text className="color-txt">UX/UI design</Text> skills, including Adobe Illustrator, InDesign, Photoshop, and Figma. 
            With my previous experience, I can provide a unique perspective on web development.
          </Text>

        </TxtCont>

      </div>

      <BttnCont data-aos="fade-up" >
        <Button
          width='50%'
          text="Email me"
          marginright="0"
          mmright='0'
          margintop = '20'
          onClick={() => window.open('mailto:yslim.bcit@gmail.com', '_blank')}
        >          
        </Button>
      </BttnCont>
    </DescCont>
  );
};

export default About;
