import React from 'react';
 import MIE8SEM from "../SyllabusPDF/MIE8sem.pdf";

import { RefreshCw } from 'lucide-react';
// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function MIE8sem() {
    
  return (
    <>

      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={MIE8SEM}
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

export default MIE8sem ;





