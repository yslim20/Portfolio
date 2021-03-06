import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import { useRouter } from "next/router";

import Burger from '../Burger'
import Menu from '../Menu';

// ============ CSS ============== //
const Cont = styled.div`      
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  display: none;

  @media only screen and (min-width: 1px) and (max-width: 1000px){
    display: block;
    display: flex;
  }
`;


// ============ Layout
const NaviMobile =({

}) =>{

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const router = useRouter();

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
    <Cont>
      <FocusLock disabled = {!open} >
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} 
          onLogoClick ={() => {
            router.push('/',undefined,{shallow:true})
            setOpen(false);
          }}
          onWebClick={() =>{
            router.push('/?section=sectionTwo',undefined,{shallow:true})
            setOpen(false);
          }}
          onDesClick={() => {
            router.push('/?section=sectionThree',undefined,{shallow:true})
            setOpen(false);
          }}     
          onAboutClick={() =>{
            router.push('/?section=sectionFour',undefined,{shallow:true})
            setOpen(false)
          }}
        />      
      </FocusLock>   
    </Cont>
  )
}

export default NaviMobile;