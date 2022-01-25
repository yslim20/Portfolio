import styled from 'styled-components';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NaviMobile from '../comps/NaviMobile';
import NaviDef from '../comps/NaviDef';
import LinkVer from '../comps/LinkVer';

// ============ CSS ============== //
const Cont = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`

const DefCont = styled.div`
  height: calc(100vh);
  width: 110px;
  position: absolute;
  top: 0;
  left: 0;

  @media only screen and (min-width: 1px) and (max-width: 768px){
    display: none;
  }
`
const MobCont = styled.div`
  
`

const SecCont = styled.div`
  width: 
`

export default function Home() {
  return (
    <Cont>
      <DefCont>
        <NaviDef />
      </DefCont>
      <MobCont>
        <NaviMobile />
      </MobCont>
      
      
    </Cont>
  )
}
