import React from 'react';
import CBSCCIE3semm from "../BECBSE/BECIE3sem.pdf";
// import Footerpage from '../../HomePage/Footerpage';
// import Nav from "../../HomePage/Nav"

function CBSCCIE3sem() {
  return (
    <>
      {/* <Nav /> */}
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={CBSCCIE3semm}
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

export default CBSCCIE3sem;


