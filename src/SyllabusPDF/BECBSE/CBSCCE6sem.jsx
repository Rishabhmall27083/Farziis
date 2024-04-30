import React from 'react';
import  CBSCCE6semm from "../BECBSE/BECE6sem.pdf";
// import Footerpage from '../../HomePage/Footerpage';
// import Nav from "../../HomePage/Nav"

function  CBSCCE6sem() {
  return (
    <>
      {/* <Nav /> */}
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={ CBSCCE6semm}
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

export default CBSCCE6sem;


