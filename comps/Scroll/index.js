import styled from 'styled-components';
import React from 'react';
import {useRouter, useEffect} from 'next/router';
import { useTheme } from "@/utils/provider";
import { ltLylac, lylac } from '@/utils/variables';

// ============ CSS ============== //
const Cont = styled.div`    
  width: 25px;
  display:flex;
  justify-content:center;
  align-items:center;  
  flex-direction: column;
  position: fixed;
  right: 2em;
  bottom: 0;
  z-index: 10;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    right: 0.25em;
  }
`;

const Txt = styled.p`  
  color: ${props => props.color};
  width: 11.72vh;
  min-width: 100px;
  padding: 0; margin: 0;
  line-height: 1em;
  transform: rotate(90deg); 
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    font-size: 0.75em;
  }

`

const Line = styled.div`
  width: 1px;
  height: 20vh;
  display: block;
  background-color: ${props => props.bkcolor};
  margin-top: 2.5em;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    margin-top: 1.5em;
    height: 15vh;
  }
`


// ============ Function ============== //
const Scroll = ({

}) => {

  const {theme, setTheme} = useTheme();

// ============ Layout
  return (
    <Cont >
      <Txt
        color = {lylac[theme]}
      >Scroll down</Txt>
      <Line
        bkcolor = {lylac[theme]}
      />
    </Cont>
  );
}

export default Scroll;

