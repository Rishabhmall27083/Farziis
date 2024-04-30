import React from 'react';
import EE5SEM from "../SyllabusPDF/EE5sem.pdf";

// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function EE5sem() {
  return (
    <>
   
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={EE5SEM}
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

export default EE5sem;


