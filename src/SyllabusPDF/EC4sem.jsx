import React from 'react';
import EC4SEM from "../SyllabusPDF/EC4sem.pdf";

// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function EC4sem() {
  return (
    <>
 
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={EC4SEM}
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

export default EC4sem;


