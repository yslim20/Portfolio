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
  justify-content: ${props => props.just};
  opacity: 0.7;
  background-image: url('${props => props.url}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  
  :hover{
    background-size: ${props => props.bkSize}%;
    opacity: 1;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1100px){    
    :hover{
      transition: all 0.5s ease-in-out; 
      -webkit-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
    }
  }

  @media only screen and (min-width: 1px) and (max-width: 1024px){   
    background-position: ${props => props.mbkPos};
    
    :hover{
      background-size: 130%;
      transition: all 0.5s ease-in-out; 
      -webkit-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out; 
    }
  }
`;

const Title = styled.p`
  text-align: left; 
  font-size: 1em;
  color: #999;
  padding-left: 1em;
  padding-right: 0.25em;
  line-height: 1.5em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;  
  box-sizing: border-box;
`

// ============ Function ============== //
const ThumbBox = ({
  
  url = "./images/design/img_Illustposter.svg",
  title = "Illustrator: Poster",
  bkSize = "160",
  mbkPos = '10% 25%',
  just = 'center',

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
          just={just}
        />

        <Title>
          {title}
        </Title>
        
      </Cont>
    );
}

export default ThumbBox;