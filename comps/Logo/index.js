import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const LogoCont = styled.div`    
  width: ${props=>props.cwidth}px;
  height: ${props=>props.cheight}px;
  margin-top: ${props=>props.mtop};
  // margin-bottom: ${props=>props.mbttm};
  // margin-bottom: 260px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: ${props=>props.cursor};

  @media only screen and (min-width: 1px) and (max-width: 768px){
    width: 100px;
    height: 65px;
    // margin-top: 170px;
    // margin-bottom: 110px;
  }
`;

const Img = styled.img`
  width: ${props=>props.width}%;
  height: ${props=>props.height}%;
  display: block;
  object-fit: contain;

  :hover {
    transform: scale(1.1);
    transition-duration: 0.3s;     
  }
`


// ============ Function ============== //
const Logo = ({

// ============ Routing
  routeTo="/",

// ============ Props  
  cwidth = 60,
  cheight = 38,
  // mtop = "5.37%",
  // mbttm = "calc(18vh)",
  width = 100,
  height = 100,
  src= "./icons/icon_Logo.svg",
  alt="Younsoo Lim's logo",
  cursor="pointer"

}) => {

// ============ Router
  const router = useRouter();

// ============ Layout
  return (
    <LogoCont 
      cwidth={cwidth}
      cheight={cheight}
      // mtop={mtop}
      // mbttm={mbttm}
      onClick={()=>router.push(routeTo)}
      cursor={cursor}
    >
      <Img 
        width={width} 
        height={height}
        src={src}
        alt={alt}
      />
    </LogoCont>
  );
}

export default Logo;

