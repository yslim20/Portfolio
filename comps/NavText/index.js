import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';

// ============ CSS ============== //
const Nav = styled.div`    
  height: ${props=>props.height};  
  width: 100%;
  min-width: 110px;
  border-top: ${props => props.borderT};  
  border-bottom: ${props => props.borderB};
  box-sizing: border-box;
  display: flex;
  align-items:center;
  justify-content:center;
  cursor: pointer; 
  color: #999;
  background-color: #000;

  :hover h6{
    color:#2CCCC3; 
  }

  :active h6{
    color: #2CCCC3;
  }
`;

const Content = styled.h6`
  line-height: ${props=>props.lineH}px;
  color: ${props=>props.color};
`

// ============ Layout
const NavText =({

// ============ Props  
  height = "8.5vh",
  onClick = () =>{},
  text ="About",
  borderT = "solid 1px #999",
  borderB = "solid 1px #999",
  color="#999",

})=>{

  // const [open, setOpen] = useState(false);
  // const node = useRef();
  // const listId = "menu-list";

  // const useOnClickOutside = (ref, handler) => {
  //   useEffect(() => {
  //     const listener = event => {
  //       if (!ref.current || ref.current.contains(event.target)) {
  //         return;
  //       }
  //       handler(event);
  //     };
  //     document.addEventListener('mousedown', listener);
  
  //     return () => {
  //       document.removeEventListener('mousedown', listener);
  //     };
  //   },
  //   [ref, handler],
  //   );
  // };

  // useOnClickOutside(node, () => setOpen(false));

// ============ Layout
  return (
    <Nav 
      // open={open} setOpen={setOpen} 
      onClick = {onClick}      
      height={height} 
      borderT = {borderT}
      borderB = {borderB}     
    >            
      <Content               
        color={color}
        lineH={height}  
      >
        {text}
      </Content>
    </Nav>
  );
}

export default NavText;