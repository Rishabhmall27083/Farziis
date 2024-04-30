import React from 'react';
import EC6SEM from "../SyllabusPDF/EC6sem.pdf";

// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function EC6sem() {
  return (
    <>
   
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={EC6SEM}
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

export default EC6sem;


