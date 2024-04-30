import React from 'react';
import CI4SEM from "../SyllabusPDF/CI4sem.pdf";


// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function  Ci4sem() {
  return (
    <>
    
    

      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={CI4SEM}
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

export default  Ci4sem;


