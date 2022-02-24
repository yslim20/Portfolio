import styled from "styled-components";
import React, { useState, useRef, useEffect, Component } from "react";
import { useRouter } from "next/router";

import { Document, Page } from "react-pdf";

const pdfFile = "./asset/YounSoo_Lim_Resume.pdf";

const Cont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
      </Cont>
    );
  }
}
