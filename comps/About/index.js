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

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
    width: 72.46%;
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

const ColorTxt = styled.span`
  color: ${props => props.color};
`

const DescText = styled.p`
  width: 100%;
  margin-bottom: ${(props) => props.TxtMarginB}px;  

  @media only screen and (min-width: 481px) and (max-width: 1000px) {
    font-size: 1em;
  }

  @media only screen and (min-width: 1px) and (max-width: 480px) {
    font-size: 0.875em;
  }
`;

const BttnCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1px) and (max-width: 600px) {
    flex-direction: column;
  }
`;

const EmailBttn = styled.a`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth}px;
  height: ${(props) => props.height}px;
  display: block;
  display: flex;
  background-color: ${(props) => props.bg};
  border-style: ${(props) => props.borderStyle};
  border-width: 2px;
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.radius}px;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) => props.bshadow};
  cursor: pointer;
  overflow: hidden;
  margin-top: 20px;

  position: relative;
  z-index: 1;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  box-sizing: border-box;

  :after {
    content: "";
    width: 0%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    background: ${(props) => props.bgafter};
    transform: skewX(15deg);
    z-index: -1;
  }

  :hover {
    color: #fff;
  }

  :hover:after {
    left: -10%;
    width: 120%;
  }

  @media only screen and (min-width: 1001px) and (max-width: 1100px) {
    width: 100%;
    min-width: 147px;
  }

  @media only screen and (min-width: 601px) and (max-width: 1000px) {
    width: 100%;
    min-width: 147px;
  }

  @media only screen and (max-width: 601px)  {
    margin-top: 10px;
  }

  @media only screen and (max-width: 330px)  {
    min-width: 0;
  }
`;

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
  textOne = "My studies at British Columbia Institute of Technology gave me a solid foundation in front-end development, including HTML, CSS, JavaScript, jQuery, and React. As a front-end developer, I am excellent at managing time, resolving problems, and adapting to changing environments.",
  TitMarginB = 10,
  nameMarginB = 20,
  TxtMarginB = 10,
  TxtMarginBB = '',
  textTwo = "In addition, I studied Fashion Design, Visual Presentation & Exhibition Design, as well as a wide range of UX/UI design skills, including Adobe Illustrator, InDesign, Photoshop, and Figma. With my previous experience, I can provide a unique perspective on web development.",

  justify = "flex-start",
  routeTo = "/ResumePage",

  width = "100%",
  minWidth = 182,
  radius = 10,
  height = 48,
  borderStyle = "solid",
  bshadow = "",
  bgafter = "rgba(85, 80, 242, 0.5)",

  type = "submit",
  bgcolor = "#fff",

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
        <DescText TxtMarginB={TxtMarginB}>{textOne}</DescText>
        <DescText TxtMarginB={TxtMarginBB}>{textTwo}</DescText>
      </div>

      <BttnCont data-aos="fade-up">
        <Button
          width="100%"
          text="Resume"
          marginright="20"
          mmright='0'
          margintop = '20'
          mmtop = '20'
          bgcolor="#fff"
          onClick={() => router.push(routeTo)}
        />

        <EmailBttn
          type={type}
          bg={bgcolor}
          radius={radius}
          width={width}
          height={height}
          borderStyle={borderStyle}
          borderColor={medBlue[theme]}
          bshadow={bshadow}
          minWidth={minWidth}
          bgafter={bgafter}
          href="mailto:yslim.bcit@gmail.com"
        >
          Email me
        </EmailBttn>
      </BttnCont>
    </DescCont>
  );
};

export default About;
