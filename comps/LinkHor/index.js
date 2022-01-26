import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const Cont = styled.div`    
  display: none;

  @media only screen and (min-width: 1px) and (max-width: 768px){
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
  margin-right: 1.25em;

  :hover {  
    background-position: ${props=>props.hPosition}; 
  }
  :last-child{
    margin-right: 1.25em;
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
  background-color: #E60576;
`


// ============ Function ============== //
const LinkHor = ({

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

export default LinkHor;

