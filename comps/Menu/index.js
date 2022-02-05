import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import Logo from '../Logo';
import NavText from '../NavText';
import LinkHor from '../LinkHor';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  background-color: #181818;
  padding-top: calc(16.60vh);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  box-sizing: border-box;

  @media only screen and (min-width: 1px) and (max-width: 1000px) {
      width: 100%;
  }
`;

const LinkCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

`

const Menu = ({ 
  onLogoClick = () => {},
  onAboutClick = () =>{

  },
  onWebClick = () => {},
  onDesClick = () =>{},
  onContClick = () => {}, 
  open, ...props
  
}) => {
  
  const isHidden = open ? true : false; // make a state rather than just open and put them in the individual functins
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Logo 
        // open={open} aria-hidden={!isHidden} {...props}
        onClick={onLogoClick}
      />

      <LinkCont>
        <NavText 
          onClick = {onAboutClick}
        />

        <NavText 
          onClick = {onWebClick}
          text ="Web"
          borderT=""
        />

        <NavText 
          onClick = {onDesClick}
          text ="Design" 
          borderT=""       
        />

        <NavText 
          onClick = {onContClick}
          text ="Contact" 
          borderT=""         
        />
      </LinkCont>
      
      <LinkHor />
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;