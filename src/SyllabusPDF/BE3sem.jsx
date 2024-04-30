

import React from 'react';
import BE3SEM from "../SyllabusPDF/BE3sem.pdf";

// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function BE3sem() {
  return (
    <>
    
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={BE3SEM}
          style={{
            width: '100%',
            height: '800px',
            marginTop: '40px',
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

export default BE3sem;

