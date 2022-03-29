import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const TopBttn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 1em;
  border: none;
  outline: none;
  background-color: #c4c4c4;
  color: white;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s;

  :hover {
    background-color: #d7aef2;
    transform: scale(0.95);
  }

  @media only screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 0.875em;
  }
`;

const ScrollArrow = ({}) => {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }  

  return (
    <TopBttn onClick={scrollToTop} id="myBtn" title="Go to top">
      Top
    </TopBttn>
  );
};

export default ScrollArrow;
