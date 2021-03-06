import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useTheme } from "@/utils/provider";
import { lylac } from '@/utils/variables';

// ============ CSS ============== //
const Cont = styled.div`    
  display: none;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    display: block;
    height: 25px;
    width: 100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;  
    flex-direction: row;
    margin-bottom: 3em;
    box-sizing: border-box;
  }
`;

const UlCont = styled.ul`
  margin: 0; padding: 0 0 0 1.5em;
  display:flex;
  flex-direction: row;
`

const Img = styled.li`
  width: 25px;
  height: 25px;
  display: block;
  background-image: url("./icons/icon_Links.png");
  background-repeat: no-repeat;
  background-position: ${props=>props.position};
  margin-right: 1em;
  transition: all 0.3s;

  :hover {  
    background-position: ${props=>props.hPosition}; 
    transform: scale(1.1);   
  }
  :last-child{
    margin-right: 1em;
  }
`

const GitHub = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;`

const Line = styled.div`
  width: 70%;
  height: 1px;
  display: block;
  background-color: ${props => props.color} ;
`


// ============ Function ============== //
const LinkHor = ({

// ============ Props  

  altG="GitHub",
  positionG = "left top",
  hPositionG = "left bottom",
  hrefG = 'https://github.com/yslim20?tab=repositories',


  altE="Email",
  positionE = "center top",
  hPositionE = "center bottom",

  altL="Linkedin",
  positionL = "right top",
  hPositionL = "right bottom",
  hrefL = 'https://www.linkedin.com/in/younsoo-lim', 
  

}) => {

// ============ Router
  const router = useRouter();  
  const {theme, setTheme} = useTheme();
// ============ Layout
  return (
    <Cont >
      <UlCont>
        <Img
          alt={altG}   
          position={positionG}   
          hPosition={hPositionG}
        >
          <GitHub 
            onClick={() => window.open(hrefG)}
          />
        </Img>   
        <Img
          alt={altE} 
          position={positionE}   
          hPosition={hPositionE}     
        >
          <GitHub 
            onClick={() => window.open('mailto:yslim.bcit@gmail.com', '_blank')}
          />
        </Img> 
        <Img
          alt={altL} 
          position={positionL}   
          hPosition={hPositionL}     
        >
          <GitHub 
            onClick={() => window.open(hrefL)}
          />
        </Img> 
      </UlCont>
      <Line color = {lylac[theme]}/>
    </Cont>
  );
}

export default LinkHor;

