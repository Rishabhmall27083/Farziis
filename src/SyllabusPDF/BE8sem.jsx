import React from 'react';
import BE8SEM from "../SyllabusPDF/BE8sem.pdf";

// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function BE8sem() {
  return (
    <>
    
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={BE8SEM}
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

export default BE8sem;


