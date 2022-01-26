import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const Cont = styled.div`    
  width: 25px;
  height: 250px;
  display:flex;
  justify-content:center;
  align-items:center;  
  flex-direction: column;

  @media only screen and (min-width: 1px) and (max-width: 768px){
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
  margin-bottom: 24px;

  :hover {  
    background-position: ${props=>props.hPosition}; 
  }
  :last-child{
    margin-bottom: 15px;
  }
`

const GitHub = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;`

const Line = styled.div`
  width: 2px;
  height: 115px;
  display: block;
  background-image: url("./images/img_LinkLine.svg");
  background-repeat: no-repeat;
  background-position: center top;
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
            href = {hrefG}
          />
        </Img>   
        <Img
          alt={altD} 
          position={positionD}   
          hPosition={hPositionD}     
        >
          <GitHub 
            href = {hrefD}
          />
        </Img> 
        <Img
          alt={altL} 
          position={positionL}   
          hPosition={hPositionL}     
        >
          <GitHub 
            href = {hrefL}
          />
        </Img> 
      </UlCont>
      <Line/>
    </Cont>
  );
}

export default LinkVer;

