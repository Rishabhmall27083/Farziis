import React from 'react';
import IT2SEM from "../SyllabusPDF/IT2sem.pdf";

import { RefreshCw } from 'lucide-react';
// import Navbarcontanct from '../Navbarcontanct';
// import FooterContanct from '../FooterContanct';

function  IT2sem() {
  return (
    <>

      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={IT2SEM}
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

export default IT2sem;





