import styled from "styled-components";
import React, { useState, useRef, useEffect, Component } from "react";
import { useRouter } from "next/router";
import { Document, Page } from "react-pdf";

import Button from "@/comps/Button";
const pdfFile = "./asset/YounSoo_Lim_Resume.pdf";

const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2%;
  @media only screen and (min-width: 1px) and (max-width: 600px){
    padding-bottom: 5%;
  }
`;

const BttnCont = styled.div`
  display: flex;
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  @media only screen and (min-width: 1px) and (max-width: 600px) {
    flex-direction: column;
    width: 70%;
    justify-content: flex-start;
    margin-top: 20px;
    flex-wrap: wrap;
  }
`

export default class Resume extends Component {
  handlePrint = () => {
    const node = document.getElementById("print-file");
    node.contentWindow.focus();
    node.contentWindow.print();
  };

  render() {
    return (
      <Cont>
        <object data={pdfFile} type="application/pdf">
          <embed src={pdfFile} type="application/pdf" />
        </object>

        <BttnCont>
          <Button 
            bgcolor='#c5c45c5'
            text="Download"
            onClick={() => window.open('./asset/YounSoo_Lim_Resume.pdf', '_blank')}
          />
        </BttnCont>
      </Cont>
    );
  }
}
