import React from 'react';
// import IT7SEM from "../SyllabusPDF/IT7sem.pdf";

import { RefreshCw } from 'lucide-react';
// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function  IT7sem() {
    
  return (
    <>
  
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
        //   src={IT7SEM}
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

export default IT7sem;





