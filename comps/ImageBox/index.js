import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from "@/utils/provider";
import { themes, ltLylac, medBlue } from '@/utils/variables';
import ImagePopOne from '@/comps/ImagePopOne';
import ImagePopTwo from '@/comps/ImagePopTwo';

// ============ CSS ============== //
const Cont = styled.div`
  margin-top: ${props=>props.mtop}px;
  margin-right: ${props=>props.mright}px;
  width: 100%;
  display:flex;
  justify-content:${props=>props.justify};    
`






// ============ Function ============== //

const ImageBox = ({

// ============ Props

}) => {

  const router = useRouter();
  const {theme, setTheme} = useTheme();
  
  const [showpop, setShowPop] = useState(false);

  function handleClick() {
		setShowPop(true)	
	}

	function handleClickClose(){
		setShowPop(false)
	}	

// ============ Layout
  return (
    <Cont
      // clickHandler={() => clickHandler()}
    >     
      {showpop === true && 
        <ImagePopTwo 
          clickHandler={() => handleClickClose()}		
        />
      }

    </Cont>
  )
}

export default ImageBox;
