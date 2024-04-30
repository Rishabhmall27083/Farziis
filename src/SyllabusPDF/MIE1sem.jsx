import React from 'react';
 import MIE1SEM from "../SyllabusPDF/MIE1sem.pdf";

import { RefreshCw } from 'lucide-react';
// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function MIE1sem() {
    
  return (
    <>
     
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={MIE1SEM}
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

export default MIE1sem ;





