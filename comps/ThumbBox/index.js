import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const Cont = styled.div`
  height: 100%; width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: all 1s ease-in-out;
  cursor: pointer;
  box-sizing: border-box;
`;

const Img = styled.div`
  width: 100%; height: 100%;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  background-image: url('${props => props.url}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  transition: all 0.3s;
  transition: all 1s ease-in-out;
  
  :hover{
    background-size: ${props => props.bkSize}%;
    transition: all 0.3s;   
  }

  @media only screen and (min-width: 1025px) and (max-width: 1100px){    
    :hover{
      background-size: 180%;
    }
  }

  @media only screen and (min-width: 1px) and (max-width: 1024px){   
    background-position: ${props => props.mbkPos};
    
    :hover{
      background-size: 130%;
    }
  }
`;

const Title = styled.p`
  text-align: left; 
  font-size: 1em;
  color: #999;
  padding-left: 1em;
  padding-right: 0.25em;
  line-height: 1.25em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;  
  box-sizing: border-box;
`

// ============ Function ============== //
const ThumbBox = ({
  
  url = "./images/design/img_Illustposter.svg",
  title = "Poster",
  bkSize = "160",
  mbkPos = '10% 25%',

  clickHandler=() => {},

}) => {


// ============ Layout
    return (
      <Cont 
        onClick={(e) => clickHandler(e)}
      >  
        <Img 
          url = {url}
          bkSize={bkSize}
          mbkPos={mbkPos}
        />

        <Title>
          {title}
        </Title>
        
      </Cont>
    );
}

export default ThumbBox;