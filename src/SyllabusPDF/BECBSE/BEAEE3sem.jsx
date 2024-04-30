import React from 'react';
import BEAE3sem from "../BECBSE/BEAE3sem.pdf";


// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function BEAEE3sem () {
  return (
    <>
    
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={BEAE3sem}
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
 
    </>
  );
}

export default BEAEE3sem;

