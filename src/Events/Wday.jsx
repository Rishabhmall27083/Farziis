// import React from 'react'
// import Pos1 from "./Womens day/IMG-20240309-WA0036.jpg";
// import Pos2 from './Womens day/IMG-20240309-WA0037.jpg';
// import Pos3 from './Womens day/IMG-20240309-WA0051 (1).jpg';
// import Pos4 from './Womens day/IMG-20240309-WA0062 (1).jpg';
// import Pos5 from './Womens day/IMG-20240309-WA0065.jpg';
// import Pos6 from './Womens day/IMG-20240309-WA0091.jpg'

// const Wday = () => {
//   return (
// <>
// <div>
//   <img style={{width:"95%",height:"400px",marginLeft:"2%"}} src='https://imgeng.jagran.com/images/2024/mar/International%20Womens%20Day%202024%20theme1709618889970.jpg' alt='' />
// </div>
// <style>{`
//     .grid{
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
//     gap: 10px;
//     padding: 2rem;
//   }
//   img{
//     max-width: 100%;
//     border-radius: 1rem;
//   }
  
//   @media (max-width: 768px) {
//     .grid {
//       grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
//     }
//   }
  
//   @media (max-width: 480px) {
//     .grid {
//       grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
//     }
//   }`}</style>

// <div className="grid">
//   <img
//     src={Pos1}
//     alt=""
//   />
//   <img
//     src={Pos2}
//     alt=""
//   />
//   <img
//     src={Pos3}
//     alt=""
//   />
//   <img
//     src={Pos4}
//     alt=""
//   />
//   <img
//     src={Pos5}
//     alt=""
//   />
//   <img
//     src={Pos6}
//     alt=""
//   />
// </div>
// </>
//   )
// }

// export default Wday

import React from 'react';
import Pos1 from "./Womens day/IMG-20240309-WA0036.jpg";
import Pos2 from './Womens day/IMG-20240309-WA0037.jpg';
import Pos3 from './Womens day/IMG-20240309-WA0051 (1).jpg';
import Pos4 from './Womens day/IMG-20240309-WA0062 (1).jpg';
import Pos5 from './Womens day/IMG-20240309-WA0065.jpg';
import Pos6 from './Womens day/IMG-20240309-WA0091.jpg';

const Wday = () => {
  return (
    <div className="container"> {/* Added container div */}
      <div>
        <img style={{width:"100%",height:"400px"}} src='https://imgeng.jagran.com/images/2024/mar/International%20Womens%20Day%202024%20theme1709618889970.jpg' alt='' />
      </div>
      <style>{`
        .container {

          max-width: 1900px; /* Adjust max-width as per your requirement */
          margin: 0 auto; /* Center align the container */
          padding: 20px; /* Add some padding */
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
          gap: 10px;
          padding: 2rem;
        }

        img {
          max-width: 100%;
          border-radius: 1rem;
        }
      
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
          }
        }
      
        @media (max-width: 480px) {
          .grid {
            grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
          }
        }
      `}</style>

      <div className="grid">
       
        <img src={Pos3} alt="" />
        <img src={Pos4} alt="" />
        <img src={Pos5} alt="" />
        <img src={Pos6} alt="" />
      </div>
    </div>
  );
}

export default Wday;
