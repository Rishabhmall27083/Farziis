import React from 'react';
import CBSCCIE5semm from "../BECBSE/BECIE5sem.pdf";
// import Footerpage from '../../HomePage/Footerpage';
// import Nav from "../../HomePage/Nav"

function CBSCCIE5sem() {
  return (
    <>
      {/* <Nav /> */}
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={CBSCCIE5semm}
          style={{
            width: '100%',
            height: '800px',
            marginTop: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
          }}
          accept=".pdf"
        />
      </div>
    {/* <Footerpage /> */}
    </>
  );
}

export default CBSCCIE5sem;


