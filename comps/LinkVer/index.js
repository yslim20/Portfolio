import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
import { useTheme } from "@/utils/provider";
import { themes, ltLylac, lylac, medBlue } from '@/utils/variables';

// ============ CSS ============== //
const Cont = styled.div`    
  width: 25px;
  display:flex;
  justify-content:center;
  align-items:center;  
  flex-direction: column;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    display: none;
  }
`;

const UlCont = styled.ul`
  margin: 0; padding: 0;
`

const Img = styled.li`
  width: 25px;
  height: 25px;
  display: block;
  background-image: url("./icons/icon_Links.png");
  background-repeat: no-repeat;
  background-position: ${props=>props.position};
  margin-bottom: 1em;
  transition: all 0.3s;

  :hover {  
    background-position: ${props=>props.hPosition}; 
    transform: scale(1.1);    
  }
  :last-child{
    margin-bottom: 1em;
  }
`

const GitHub = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  `

const Line = styled.div`
  width: 1px;
  height: 8vh;
  display: block;
  background-color: ${props => props.bkcolor} ;
`


// ============ Function ============== //
const LinkVer = ({

// ============ Props  

  altG="GitHub",
  positionG = "left top",
  hPositionG = "left bottom",
  hrefG = 'https://github.com/yslim20?tab=repositories',


  altD="Dribbble",
  positionD = "center top",
  hPositionD = "center bottom",
  hrefD = 'https://dribbble.com/yslim2022',
  

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
          alt={altD} 
          position={positionD}   
          hPosition={hPositionD}     
        >
          <GitHub 
            onClick={() => window.open(hrefD)}
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
      <Line bkcolor = {lylac[theme]}/>
    </Cont>
  );
}

export default LinkVer;

