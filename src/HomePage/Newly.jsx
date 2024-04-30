// import React from 'react';
// const New = () => {
//   return (
//     <>
//       <style>{`
//         p {
//             line-height: 178%;
//             letter-spacing: 0.0028em;
//         }
        
//         strong {
//             font-weight: bold;
//         }
        
//         .flex-container {
//             margin: 300px auto;
//             max-width: 1240px;
//             display: -webkit-box;
//             display: -webkit-flex;
//             display: -ms-flexbox;
//             display: flex;
//             -webkit-box-flex: 1;
//             -webkit-flex-grow: 1;
//             -ms-flex-positive: 1;
//             flex-grow: 1;
//             flex-direction: row;
//             -webkit-flex-direction: row;
//             -webkit-flex-wrap: wrap;
//             -webkit-justify-content: center;
//             align-items: center;
//             justify-content: center;
//         }
//         .col-image {
//             position: relative;
//             width: 650px;
//             height: 650px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }
//         .image {
//             background-image: url(https://murdoch-website-002.azurewebsites.net/sf-images/default-source/signpost-imagery/open-day-event-880x880.jpg);
//             width: 460px;
//             height: 460px;
//             border-radius: 50%;
//             background-size: cover;
//             background-position: center center;
//             position: absolute;
//         }
//         @media screen and (max-width: 768px) {
//           p {
//             font-size: 16px;
//           }
//         }

//         @media screen and (max-width: 576px) {
//           p {
//             font-size: 14px;
//           }
//         }
 
//       `}</style>
//         <section style={{ marginTop: "-300px", height: "50%", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
//         <div className="flex-container" style={{marginLeft:"20px"}}>
//           <div className="col col-left" style={{marginLeft:"100px"}}>
//             <div className="col-copy mr200">
//               <h2>Campus Life</h2>
//               <p>
//                 Wondering what it’s like to be part of the Murdoch community and what
//                 university is like? Let our students take you on a guided tour or
//                 check out our facilities.
//               </p>
//             </div>
//           </div>
//           <div className="col col-image">
            
//             <div className="image" />
              
//           </div>
//         </div>
      
        
//       </section>
//     </>
//   );
// };

// export default New;

// import React from 'react';

// const Newly = () => {
//   return (
//     <>
//       <style>{`
//         p {
//           line-height: 178%;
//           letter-spacing: 0.0028em;
//           font-size: 18px; /* default font size */
//         }
        
//         strong {
//           font-weight: bold;
//         }
        
//         .flex-container {
//           max-width: 1240px;
//           margin: 100px auto; /* adjust margin for desktop */
//           display: flex;
//           flex-direction: row;
//           justify-content: center;
//           align-items: center;
//         }
        
//         .col {
//           flex: 1;
//           padding: 0 20px; /* add space between columns */
//         }
        
//         .col-image {
//           position: relative;
//           width: 100%; /* take full width */
//           display: flex;
//           justify-content: center;
//           margin-top: 50px; /* add some top margin */
//         }
        
//         .image {
//           background-image: url(https://murdoch-website-002.azurewebsites.net/sf-images/default-source/signpost-imagery/open-day-event-880x880.jpg);
//           width: 460px;
//           height: 460px;
//           border-radius: 50%;
//           background-size: cover;
//           background-position: center center;
//         }
        
//         @media screen and (max-width: 768px) {
//           .flex-container {
//             flex-direction: column; /* change to column layout for mobile */
//             align-items: center;
//           }
          
//           .col {
//             padding: 20px 0; /* space on top and bottom */
//             text-align: center;
//           }
          
//           .col-image {
//             margin-top: 0; /* remove top margin */
//           }
//         }
//       `}</style>
      
//       <section>
//         <div className="flex-container">
//           <div className="col">
//           <h2>Learning and Study</h2>
//           <p>Not sure what to study or need more information about courses? Wondering what kind of practical experience you’ll get to prepare you for the future? Check out more about our courses, meet the academics you’ll learn from and about our work experience program. </p>
//           </div>
//           <div className="col col-image">
//             <div className="image" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Newly;

// import React from 'react';

// const Newly = () => {
//   return (
//     <>
//       <style>{`
//         p {
//           line-height: 178%;
//           letter-spacing: 0.0028em;
//           font-size: 18px; /* default font size */
//         }
        
//         strong {
//           font-weight: bold;
//         }
        
//         .flex-container {
//           max-width: 1240px;
//           margin: 100px auto; /* adjust margin for desktop */
//           display: flex;
//           flex-direction: row; /* Keep direction as row */
//           justify-content: center;
//           align-items: center;
//         }
        
//         .col {
//           flex: 1;
//           padding: 0 20px; /* add space between columns */
//         }
        
//         .col-image {
//           position: relative;
//           width: 100%; /* take full width */
//           display: flex;
//           justify-content: center;
//           margin-top: 50px; /* add some top margin */
//         }
        
//         .image {
//           background-image: url(https://www.theindianwire.com/wp-content/uploads/2021/05/study-on-college-students.jpg);
//           width: 460px;
//           height: 460px;
//           border-radius: 50%;
//           background-size: cover;
//           background-position: center center;
//         }
        
//         @media screen and (max-width: 768px) {
//           .flex-container {
//             flex-direction: column; /* change to column layout for mobile */
//             align-items: center;
//           }
          
//           .col {
//             padding: 20px 0; /* space on top and bottom */
//             text-align: center;
//           }
          
//           .col-image {
//             margin-top: 0; /* remove top margin */
//           }
//         }
//       `}</style>
      
//       <section style={{marginTop:"-10%"}}>
//         <div className="flex-container">
//           <div className="col col-image"> 
//             <div className="image" />
//           </div>
//           <div className="col"> 
//             <h2>Learning and Study</h2>
//             <p>Not sure what to study or need more information about courses? Wondering what kind of practical experience you’ll get to prepare you for the future? Check out more about our courses, meet the academics you’ll learn from and about our work experience program. </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Newly;


import React, { useState, useEffect } from 'react';

const Newly = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newSection = document.getElementById('newly');
      if (newSection) {
        const top = newSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        p {
          line-height: 178%;
          letter-spacing: 0.0028em;
          font-size: 18px; /* default font size */
        }
        
        strong {
          font-weight: bold;
        }
        
        .flex-container {
          max-width: 1240px;
          margin: 100px auto; /* adjust margin for desktop */
          display: flex;
          flex-direction: row; /* Keep direction as row */
          justify-content: center;
          align-items: center;
        }
        
        .col {
          flex: 1;
          padding: 0 20px; /* add space between columns */
        }
        
        .col-image {
          position: relative;
          width: 100%; /* take full width */
          display: flex;
          justify-content: center;
          margin-top: 50px; /* add some top margin */
        }
        
        .image {
          background-image: url(https://www.theindianwire.com/wp-content/uploads/2021/05/study-on-college-students.jpg);
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background-size: cover;
          background-position: center center;
        }
        
        @media screen and (max-width: 768px) {
          .flex-container {
            flex-direction: column; /* change to column layout for mobile */
            align-items: center;
          }
          
          .col {
            padding: 20px 0; /* space on top and bottom */
            text-align: center;
          }
          
          .col-image {
            margin-top: 0; /* remove top margin */
          }
        }

        /* Animation styles */
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-on-scroll {
          opacity: 0;
          animation: ${isVisible ? 'fadeIn 1s ease-out forwards' : 'none'};
        }
      `}</style>
      
      <section id="newly" className="animate-on-scroll" style={{marginTop:"-10%"}}>
        <div className="flex-container">
          <div className="col col-image"> 
            <div className="image" />
          </div>
          <div className="col"> 
            <h2>Learning and Study</h2>
            <p>Not sure what to study or need more information about courses? Wondering what kind of practical experience you’ll get to prepare you for the future? Check out more about our courses, meet the academics you’ll learn from and about our work experience program. </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newly;
