import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const Cont = styled.div`    
  width: 24px;
  height: 250px;
  // margin-top: 55px;
  // margin-bottom: 25.39%;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: ${props=>props.cursor};

  @media only screen and (min-width: 1px) and (max-width: 768px){
    width: 100px;
    height: 65px;
    margin-top: 170px;
    margin-bottom: 110px;
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
const LinkVer = ({

// ============ Routing
  routeTo="/",

// ============ Props  
  cwidth = 60,
  cheight = 38,
  mtop = "18.97%",
  mbttm = "12.27%",
  width = 100,
  height = 100,
  src= "./icons/icon_LinkVer.svg",
  alt=" ",
  cursor="pointer"

}) => {

// ============ Router
  const router = useRouter();

// ============ Layout
  return (
    <Cont 
      cwidth={cwidth}
      cheight={cheight}
      mtop={mtop}
      mbttm={mbttm}
      onClick={()=>router.push(routeTo)}
      cursor={cursor}
    >
      <Link href ='https://github.com/yslim20?tab=repositories' />
      <Link href ='https://dribbble.com/yslim2022' />
      <Link href ='https://www.linkedin.com/in/younsoo-lim' />

      {/* <Img 
        width={width} 
        height={height}
        src={src}
        alt={alt}
      /> */}
    </Cont>
  );
}

export default LinkVer;

