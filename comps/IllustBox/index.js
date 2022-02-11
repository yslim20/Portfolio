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
  
  :hover{
    background-size: 160%;
    transition: all 0.3s;   
  }

  @media only screen and (min-width: 1025px) and (max-width: 1100px){    
    :hover{
      background-size: 180%;
    }
  }

  @media only screen and (min-width: 1px) and (max-width: 1024px){   
    background-position: 10% 25%;
    
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
  line-height: 1.25em;
`

// ============ Function ============== //
const IllustBox = ({
  
  url = "./images/design/img_Illustposter.svg",
  title = "Poster",

  clickHandler=() => {},

}) => {


// ============ Layout
    return (
      <Cont 
        onClick={(e) => clickHandler(e)}
      >  
        <Img 
          url = {url}
        />

        <Title>
          {title}
        </Title>
        
      </Cont>
    );
}

export default IllustBox;