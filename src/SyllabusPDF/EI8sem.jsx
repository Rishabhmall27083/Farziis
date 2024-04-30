import React from 'react';
import EI8SEM from "../SyllabusPDF/EI8sem.pdf";

// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function  EI8sem() {
  return (
    <>
   
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={EI8SEM}
          style={{
            width: '100%',
            height: '800px',
            marginTop: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
          }}
          accept=".pdf"
        />
      </div>
     
    </>
  );
}

export default EI8sem;


