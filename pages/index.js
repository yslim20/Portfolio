import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import FocusLock from 'react-focus-lock';

import NaviMobile from '@/comps/NaviMobile';
import NaviDef from '@/comps/NaviDef';
import HomeSec from '@/comps/HomeSec';
import DescT from '@/comps/DescT';


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

  return (
    <Wrap>
{/* Navigations */}
      <SideBar>
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

        <SecCont className='home'>
            <HomeSec />
        </SecCont>

        <SecCont className='description'>
          <DescT />
        </SecCont>



        
        
      </Cont>
      

    </Wrap>
  )
}

// function useWindowSize() {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     // only execute all the code below in client side
//     if (typeof window !== 'undefined') {
//       // Handler to call on window resize
//       function handleResize() {
//         // Set window width/height to state
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//       }
    
//       // Add event listener
//       window.addEventListener("resize", handleResize);
     
//       // Call handler right away so state gets updated with initial window size
//       handleResize();
    
//       // Remove event listener on cleanup
//       return () => window.removeEventListener("resize", handleResize);
//     }
//   }, []); // Empty array ensures that effect is only run on mount
//   return windowSize;
// }

export default Home;
