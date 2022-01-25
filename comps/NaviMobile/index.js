import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import FocusLock from 'react-focus-lock';

// import NavAbout from '../NavAbout';
// import NavContact from '../NavContact';
// import NavDesign from '../NavDesign';
// import NavWeb from '../NavWeb';
// import Logo from '../Logo';
import Burger from '../Burger'
import Menu from '../Menu';

// ============ CSS ============== //
const Cont = styled.div`      
  height: calc(100vh);
  width: 100%;
  // background-color: #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  display: none;

  @media only screen and (min-width: 1px) and (max-width: 768px){
    display: block;
    display: flex;
  }
`;


// ============ Layout
const NaviMobile =({}) =>{

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
  
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [ref, handler],
    );
  };

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <FocusLock disabled = {!open} >
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </FocusLock>     
    </div>
  )
}

export default NaviMobile;