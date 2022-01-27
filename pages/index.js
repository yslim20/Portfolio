import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import FocusLock from 'react-focus-lock';

import NaviMobile from '@/comps/NaviMobile';
import NaviDef from '@/comps/NaviDef';
import HomeSec from '@/comps/HomeSec';
import Desc from '@/comps/Desc';


// ============ CSS ============== //
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const SideBar = styled.div`
  overflow-x: hidden;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`
const DefCont = styled.div`
  height: calc(100vh);
  width: 110px;

  @media only screen and (min-width: 1px) and (max-width: 768px){
    display: none;
  }
`
const MobCont = styled.div`
  display: none;
  z-index: 999;
  position: sticky;
  top: 0;
  
  @media only screen and (min-width: 1px) and (max-width: 768px){    
    display: block;
  }
`

const Cont = styled.div`  
  width:100%;
  display: flex;
  flex-direction: column;  
  padding-left: 110px;
  width: ${props=>props.conwidth};

  @media only screen and (min-width: 1px) and (max-width: 768px){    
    padding-left:  0;
    transition: all 0.3s;
  }
`

const SecCont = styled.div`  
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`

const Home = ({
  conwidth ="",
  

}) => {

  // const size = useWindowSize();

  const sectionOne = useRef()

  return (
    <Wrap>
{/* Navigations */}
      <SideBar>
        <button onClick={() => {
          sectionOne.current.scrollIntoView(
            {
              behavior: "smooth"
            }
          )
        }}>
          one
        </button>
            <DefCont>
              <NaviDef />
            </DefCont>      
      </SideBar>
      <MobCont>
        <NaviMobile />        
      </MobCont> 
{/* Navigation ends */}

      <Cont
        conwidth={conwidth}
      >

        <SecCont className='home' ref = {sectionOne} >
            <HomeSec />
        </SecCont>

        <SecCont className='description'>
          <Desc />
          <Desc flip = {true} />
        </SecCont>



        
        
      </Cont>
      

    </Wrap>
  )
}



export default Home;
