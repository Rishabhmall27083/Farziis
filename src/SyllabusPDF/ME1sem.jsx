import React from 'react';
 import ME1SEM from "../SyllabusPDF/ME1sem.pdf";

import { RefreshCw } from 'lucide-react';
// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function  ME1sem() {
    
  return (
    <>
    
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={ME1SEM}
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

export default ME1sem ;





