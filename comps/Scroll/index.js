import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const Cont = styled.div`    
  width: 25px;
  display:flex;
  justify-content:center;
  align-items:center;  
  flex-direction: column;
  position: absolute;
  right: 2em;
  bottom: 0;
  z-index: 1;

  @media only screen and (min-width: 1px) and (max-width: 768px){
    right: 0.25em;
  }
`;

const Txt = styled.p`  
  color: #E60576;
  width: 11.72vh;
  padding: 0; margin: 0;
  line-height: 1em;
  transform: rotate(90deg); 
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);

  @media only screen and (min-width: 1px) and (max-width: 768px){
    font-size: 0.75em;
  }

`

const Line = styled.div`
  width: 1px;
  height: 26.36vh;
  display: block;
  background-color: #E60576;
  margin-top: 2em;

  @media only screen and (min-width: 1px) and (max-width: 768px){
    height: 12.27vh;
  }
`


// ============ Function ============== //
const Scroll = ({

}) => {

// ============ Layout
  return (
    <Cont >
      <Txt>Scroll down</Txt>
      <Line/>
    </Cont>
  );
}

export default Scroll;

