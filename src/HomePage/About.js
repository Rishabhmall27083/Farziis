// import React, { useEffect, useState } from 'react';
// import Pos56 from '../images/Aboutus.3gp'
// const About = () => {
//   const [isTriggered, setTriggered] = useState(false);

//   const handleScroll = () => {
//     const scrollY = window.scrollY || window.pageYOffset;
//     const triggerOffset = document.getElementById('about').offsetTop;

//     if (scrollY > triggerOffset - window.innerHeight / 2) {
//       setTriggered(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//     <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');

   
    
   
//     .wf-about-us {
//       opacity: 0;
//       transform: translateY(20px);
//       transition: opacity 0s ease, transform 1s ease;
//     }

//     .wf-about-us.triggered {
//       opacity: 1;
//       transform: translateY(0);
//     }

//     p{
//       font-size: 15px;
//       line-height: 1.8;
//     }
    
//     .primary-cta {
//       background: linear-gradient(to right,#ff6c26 0%,#ffa526 100%);
//       color: #ffffff;
//       padding: 10px 25px;
//       border-radius: 50px;
//       transition: 0.3s linear all;
//       box-shadow: none;
//       border: none;
//       text-transform: uppercase;
//       display: inline-block;
//     }
    
//     .primary-cta:hover {
//       background: #222222;
//       color: #ffffff;
//       transition: 0.3s linear all;
//     }
    
 
    
//     .wf-space{
//       padding: 60px 90px;
    
//     }
    
//     .wf-left-heading{
//       font-size: 50px;
//       text-transform: capitalize;
//       position: relative;
//       margin: 0;
//       font-weight: 400;
    
//     }
    
//     .wf-left-heading span{
     
//       z-index: 99;
//     }
    
//     .wf-left-heading:after {
//       position: absolute;
//       content: "";
//       height: 100%;
//       width: 33px;
//        left: 0;
//       top: 0;
//     }
    
//     .container{
//       display: flex;
//       z-index: 99;
      
//     }
    
//     .wf-about-us__image{
//       position: relative;
//     }
//     .wf-about-us__image:after {
//       position: absolute;
//       content: "";
//       left: 0px;
//       width: 1px;
//       height: 100%;
//       background: linear-gradient(to right,#ff6c26 0%,#ffa526 100%);
//       top: -0px;
//       bottom: 0;
//       padding: 8px;
//     }
//     .column {
//       flex: 0 0 50%;
//       position: relative;
//     }
//     .wf-about-us__image img{
//       z-index: 9;
//       position: relative;
//       display: block;
//     }
    
//     .wf-about-us__content {
//       padding-left: 35px;
//     }
    
//     .wf-about-us{
//       position: relative;
//     }
//     .wf-about-us:after {
//       position: absolute;
//       content: "";
      
//       background-size: cover;
//       background-repeat: no-repeat;
//       opacity: 0.4;
//       left: 0;
//       right: 0;
//       width: 100%;
//       height: 100%;
//       top: 30%;
//     }
    
//     @media (max-width: 1024px){
//       .wf-space {
//         padding: 60px 40px;
//       }
//       .wf-about-us__content p{
//         font-size: 13px;
//       }
    
//       .wf-left-heading {
//         font-size: 35px;
//       }
    
//       .wf-left-heading:after{
//         width: 25px;
//       }
//     }
    
//     @media (max-width: 767px){
    
//       .container{
//         display: block;
//       }
    
//       .wf-about-us__content {
//         padding-left: 0;
//         margin-left: -15px;
//         padding-top: 30px;
//       }
//     }`}</style>
//          <section id="about" className={`wf-about-us wf-space ${isTriggered ? 'triggered' : ''}`}>
//   <div className="container">
//     <div className="column">
//     <div className="wf-about-us__image">
//   <video
//     autoPlay
//     loop
//     muted
//     playsInline
//     width="100%"
//   >
//     <source src={Pos56} type="video/3gpp" />
//     Your browser does not support the video tag.
//   </video>
// </div>
//     </div>
//     <div className="column">
//       <div className="wf-about-us__content">
//         <h2 className="wf-left-heading">
//           <b>about <em>us</em></b>
//         </h2>
//         <p style={{color:'black'}}>
//         Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States, due to the quality of education at an affordable cost, 
//         without any hidden fees policy. In its history of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions were the only 
//         Institutes in Sehore & nearby six districts offering 
//         Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils. 
//         The majority of the population is agriculture-dependent & the percentage of the population living at a low standard of living is 80.6. 
//         The growth rate recorded recently is 21.5%.
//         </p>
//         <a className="primary-cta" href="#">
//           know more
//         </a>
//       </div>
//     </div>
//   </div>
// </section>

//     </>
//   )
// }

// export default About
// import React from 'react'
// import { Link } from "react-router-dom";
// const About = () => {
//   return (
//     <>
//     <style>
//       {
//         `
//   .sectionClass {
//   padding: 20px 0px 50px 0px;
//   position: relative;
//   display: block;
// }

// .fullWidth {
//   width: 100% !important;
//   display: table;
//   float: none;
//   padding: 0;
//   min-height: 1px;
//   height: 90%;
//   position: relative;
// }


// .sectiontitle {
//   background-position: center;
//   margin: 30px 0 0px;
//   text-align: center;
//   min-height: 20px;
// }

// .sectiontitle h2 {
//   font-size: 30px;
//   color: #222;
//   margin-bottom: 0px;
//   padding-right: 10px;
//   padding-left: 10px;
// }


// .headerLine {
//   width: 160px;
//   height: 2px;
//   display: inline-block;
//   background: #101F2E;
// }


// .projectFactsWrap{
//     display: flex;
//   margin-top: 30px;
//   flex-direction: row;
//   flex-wrap: wrap;
// }


// #projectFacts .fullWidth{
//   padding: 0;
// }

// .projectFactsWrap .item{
//   width: 25%;
//   height: 100%;
//   padding: 50px 0px;
//   text-align: center;
// }

// .projectFactsWrap .item:nth-child(1){
//   background: rgb(16, 31, 46);
// }

// .projectFactsWrap .item:nth-child(2){
//   background: rgb(18, 34, 51);
// }

// .projectFactsWrap .item:nth-child(3){
//   background: rgb(21, 38, 56);
// }

// .projectFactsWrap .item:nth-child(4){
//   background: rgb(23, 44, 66);
// }

// .projectFactsWrap .item p.number{
//   font-size: 40px;
//   padding: 0;
//   font-weight: bold;
// }

// .projectFactsWrap .item p{
//   color: rgba(255, 255, 255, 0.8);
//   font-size: 18px;
//   margin: 0;
//   padding: 10px;
//   font-family: 'Open Sans';
// }


// .projectFactsWrap .item span{
//   width: 60px;
//   background: rgba(255, 255, 255, 0.8);
//   height: 2px;
//   display: block;
//   margin: 0 auto;
// }


// .projectFactsWrap .item i{
//   vertical-align: middle;
//   font-size: 50px;
//   color: rgba(255, 255, 255, 0.8);
// }


// .projectFactsWrap .item:hover i, .projectFactsWrap .item:hover p{
//   color: white;
// }

// .projectFactsWrap .item:hover span{
//   background: white;
// }

// @media (max-width: 786px){
//   .projectFactsWrap .item {
//      flex: 0 0 50%;
//   }
// }

// /* AUTHOR LINK */






//         // ////////////////////////////////////////////////////////////////////////////////////////
        
        
      
        
// .about-section{
//   position: relative;
//   padding: 120px 0 70px;
// }

// .about-section .sec-title{
//   margin-bottom: 45px;
// }

// .about-section .content-column{
//   position: relative;
//   margin-bottom: 50px;
// }

// .about-section .content-column .inner-column{
//   position: relative;
//   padding-left: 30px;
// }

// .about-section .text{
//   margin-bottom: 40px;
//   font-size: 16px;
//   line-height: 26px;
//   color: #848484;
//   font-weight: 400;
// }

// .about-section .list-style-one{
//   margin-bottom: 45px;
// }

// .about-section .btn-box{
//   position: relative;
// }

// .about-section .btn-box a{
//   padding: 15px 50px;
// }

// .about-section .image-column{
//   position: relative;
// }

// .about-section .image-column .text-layer{
//     position: absolute;
//     right: -110px;
//     top: 50%;
//     font-size: 325px;
//     line-height: 1em;
//     color: #ffffff;
//     margin-top: -175px;
//     font-weight: 500;
// }

// .about-section .image-column .inner-column{
//   position: relative;
//   padding-left: 120px;
//   padding-bottom: 125px;
// }

// .about-section .image-column .inner-column:before{
//   position: absolute;
//   left: -75px;
//   top: 65px;
//   height: 520px;
//   width: 520px;
//   background-image:url(https://i.ibb.co/fxJ1jtC/about-circle-1.png);
//   content: "";
// }

// .about-section .image-column .image-1{
//   position: relative;
// }

// .about-section .image-column .image-2{
//   position: absolute;
//   left: 0;
//   bottom: 0;
// }

// .about-section .image-column .image-2 img,
// .about-section .image-column .image-1 img{
//   box-shadow: 0 30px 50px rgba(8,13,62,.15);
// }

// .about-section .image-column .video-link{
//   position: absolute;
//   left: 70px;
//   top: 170px;
// }

// .about-section .image-column .video-link .link{
//   position: relative;
//   display: block;
//   font-size: 22px;
//   color: #191e34;
//   font-weight: 400;
//   text-align: center;
//   height: 100px;
//   width: 100px;
//   line-height: 100px;
//   background-color: #ffffff;
//   border-radius: 50%;
//   box-shadow: 0 30px 50px rgba(8,13,62,.15);
//   -webkit-transition: all 300ms ease;
//   -moz-transition: all 300ms ease;
//   -ms-transition: all 300ms ease;
//   -o-transition: all 300ms ease;
//   transition: all 300ms ease;
// }

// .about-section .image-column .video-link .link:hover{
//   background-color: #191e34;
//   color: #f
//  // ///////////////////////////////////////////////////////////////////////////
//   ` }
//     </style>
//       <section className="about-section">
//     <div className="container">
//       <div className="row">
//         <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
//           <div className="inner-column">
//             <div className="sec-title">
//               <span className="title" style={{fontSize:"40px",fontWeight:"bold"}}>About University</span>
              
//             </div>
//             <div className="text" style={{fontSize:"15px"}}>
//             Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States, due to the quality of education at an affordable cost, without any hidden fees policy. In its history of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils. The majority of the population is agriculture-dependent & the percentage of the population living at a low standard of living is 80.6. The growth rate recorded recently is 21.5%.


//             </div>
          
//             <Link to="/contact"><div className="btn-box">
//               <a href="#" className="theme-btn btn-style-one">
//                 Contact Us
//               </a>
//             </div></Link>
//           </div>
//         </div>

//         <div className="image-column col-lg-6 col-md-12 col-sm-12">
//           <div className="inner-column wow fadeInLeft">
//             <figure className="image-1">
//               <a href="#" className="lightbox-image" data-fancybox="images">
//                 <img  style={{width:"100%",height:"200px",marginTop:"20px"}} src="https://www.depaul.edu/virtual-campus-tour/PublishingImages/2021/ArtsLetters_01.jpg" alt="" />
//               </a>
//             </figure>
//             <figure className="image-2">
//               <a href="#" className="lightbox-image" data-fancybox="images" >
//                 <img style={{width:"70%"}} src="https://www.sssutms.co.in/cms/Areas/Website/Files/Gallery/1/SSSUTMS_Building(7).jpg" alt="" />
//               </a>
//             </figure>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//          <div id="projectFacts" className="sectionClass">
//     <div className="fullWidth eight columns">
//       <div className="projectFactsWrap ">
//         <div
//           className="item wow fadeInUpBig animated animated"
//           data-number={12}
//           style={{ visibility: "visible" }}
//         >
//           <i className="fa fa-briefcase" />
//           <p id="number1" className="number">
//             12
//           </p>
//           <span />
//           <p>Projects done</p>
//         </div>
//         <div
//           className="item wow fadeInUpBig animated animated"
//           data-number={55}
//           style={{ visibility: "visible" }}
//         >
//             <i className="fa fa-briefcase" />
//           <p id="number2" className="number">
//             55
//           </p>
//           <span />
//           <p>Happy clients</p>
//         </div>
//         <div
//           className="item wow fadeInUpBig animated animated"
//           data-number={359}
//           style={{ visibility: "visible" }}
//         >
//           <i className="fa fa-coffee" />
//           <p id="number3" className="number">
//             359
//           </p>
//           <span />
//           <p>Cups of coffee</p>
//         </div>
//         <div
//           className="item wow fadeInUpBig animated animated"
//           data-number={246}
//           style={{ visibility: "visible" }}
//         >
//           <i className="fa fa-camera" />
//           <p id="number4" className="number">
//             246
//           </p>
//           <span />
//           <p>Photos taken</p>
//         </div>
//       </div>
//     </div>
//   </div>

// </>  
//   )
// }

// export default About







// import React from 'react'

// const About = () => {
//   return (
// <>
// <style>{`
// .about {
//   padding: 130px 0;
// }

// .about .heading h2 {
//   font-size: 30px;
//   font-weight: 700;
//   margin: 0;
//   padding: 0;

// }

// .about .heading h2 span {
//   color: #F24259;
// }

// .about .heading p {
//   font-size: 15px;
//   font-weight: 400;
//   line-height: 1.7;
//   color: #999999;
//   margin: 20px 0 60px;
//   padding: 0;
// }

// .about h3 {
//   font-size: 25px;
//   font-weight: 700;
//   margin: 0;
//   padding: 0;
// }

// .about p {
//   font-size: 15px;
//   font-weight: 400;
//   line-height: 1.7;
//   color: #999999;
//   margin: 20px 0 15px;
//   padding: 0;
// }

// .about h4 {
//   font-size: 15px;
//   font-weight: 500;
//   margin: 8px 0;
// }

// .about h4 i {
//   color: #F24259;
//   margin-right: 10px;
// }`}</style>
// <section className="about" id="about">
//   <div className="container">
//     <div className="heading text-center">
//       <h2>
//         About
//         <span>Us</span>
//       </h2>
      
//     </div><br/><br/>
//     <div className="row">
//       <div className="col-lg-6">
//         <img
//           src="https://i.ibb.co/qpz1hvM/About-us.jpg"
//           alt="about"
//           className="img-fluid"
//           width="100%"
//         />
//       </div>
//       <div className="col-lg-6">
//         <h3>Sri Satya Sai University of Technology & Medical Science </h3>
//         <p>
//         Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States, due to the quality of education at an affordable cost, without any hidden fees policy. In its history of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils. 
//         The majority of the population is agriculture-dependent
//          & the percentage of the population living at a low standard of living is 80.6. 
//         The growth rate recorded recently is 21.5%.
//         </p>
        
//       </div>
//     </div>
//   </div>
// </section>
// </>
//   )
// }

// export default About


// import React from 'react';

// const About = () => {
//   return (
//     <>
//       <style>{`
//         .about {
//           padding: 130px 0;
//         }

//         .about .heading h2 {
//           font-size: 30px;
//           font-weight: 700;
//           margin: 0;
//           padding: 0;
//         }

//         .about .heading h2 span {
//           color: #F24259;
//         }

//         .about .heading p {
//           font-size: 15px;
//           font-weight: 400;
//           line-height: 1.7;
//           color: #999999;
//           margin: 20px 0 60px;
//           padding: 0;
//         }

//         .about h3 {
//           font-size: 25px;
//           font-weight: 700;
//           margin: 0;
//           padding: 0;
//         }

//         .about p {
//           font-size: 15px;
//           font-weight: 400;
//           line-height: 1.7;
//           color: #999999;
//           margin: 20px 0 15px;
//           padding: 0;
//         }

//         .about h4 {
//           font-size: 15px;
//           font-weight: 500;
//           margin: 8px 0;
//         }

//         .about h4 i {
//           color: #F24259;
//           margin-right: 10px;
//         }

//         /* Add this style to make the image circular */
//         .about .img-container {
//           width: 100%;
//           height: auto;
//           border-radius: 50%;
//           overflow: hidden;
//         }
//       `}</style>
//       <section className="about" id="about">
//         <div className="container">
//           <div className="heading text-center">
//             <h2>
//               About <span>Us</span>
//             </h2>
//           </div>
//           <br />
//           <br />
//           <div className="row">
//             <div className="col-lg-6">
//               {/* Wrap the image inside a div with the img-container class */}
//               <div className="img-container">
//                 <img
//                   src="https://i.ibb.co/qpz1hvM/About-us.jpg"
//                   alt="about"
//                   className="img-fluid"
//                   width="100%"
//                 />
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <h3>Sri Satya Sai University of Technology & Medical Science</h3>
//               <p>
//                 Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States,
//                 due to the quality of education at an affordable cost, without any hidden fees policy. In its history
//                 of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions were
//                 the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees
//                 to worthy & needy students belonging to more than six thousand villages, 34 Tehsils. The majority of
//                 the population is agriculture-dependent & the percentage of the population living at a low standard of
//                 living is 80.6. The growth rate recorded recently is 21.5%.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;



// import React from 'react';

// const About = () => {
//   return (
//     <section className="about" id="about">
//       <style>{`
//         .about {
//           padding: 130px 0;
//         }

//         .about .heading h2 {
//           font-size: 30px;
//           font-weight: 700;
//           margin: 0;
//           padding: 0;
//         }

//         .about .heading h2 span {
//           color: #F24259;
//         }

//         .about .heading p {
//           font-size: 15px;
//           font-weight: 400;
//           line-height: 1.7;
//           color: #999999;
//           margin: 20px 0 60px;
//           padding: 0;
//         }

//         .about h3 {
//           font-size: 25px;
//           font-weight: 700;
//           margin: 0;
//           padding: 0;
//         }

//         .about p {
//           font-size: 15px;
//           font-weight: 400;
//           line-height: 1.7;
//           color: #999999;
//           margin: 20px 0 15px;
//           padding: 0;
//         }

//         .about h4 {
//           font-size: 15px;
//           font-weight: 500;
//           margin: 8px 0;
//         }

//         .about h4 i {
//           color: #F24259;
//           margin-right: 10px;
//         }

//         .about .img-container {
//           width: 100%;
//           height: auto;
//           border-radius: 50%;
//           overflow: hidden;
//         }

//         /* Animation styles */
//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .about .content {
//           animation: fadeIn 0.8s ease-out;
//         }
//       `}</style>
//       <div className="container">
//         <div className="heading text-center">
//           <h2>
//             About <span>Us</span>
//           </h2>
//         </div>
//         <br />
//         <br />
//         <div className="row content">
//           <div className="col-lg-6">
//             <div className="img-container">
//               <img
//                 src="https://i.ibb.co/qpz1hvM/About-us.jpg"
//                 alt="about"
//                 className="img-fluid"
//                 width="100%"
//               />
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <h3>Sri Satya Sai University of Technology & Medical Science</h3>
//             <p>
//               Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States,
//               due to the quality of education at an affordable cost, without any hidden fees policy. In its history
//               of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions were
//               the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees
//               to worthy & needy students belonging to more than six thousand villages, 34 Tehsils. The majority of
//               the population is agriculture-dependent & the percentage of the population living at a low standard of
//               living is 80.6. The growth rate recorded recently is 21.5%.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
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
    <section className="about" id="about">
      <style>{`
        .about {
          padding: 130px 0;
        }

        .about .heading h2 {
          font-size: 30px;
          font-weight: 700;
          margin: 0;
          padding: 0;
        }

        .about .heading h2 span {
          color: #F24259;
        }

        .about .heading p {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.7;
          color: #999999;
          margin: 20px 0 60px;
          padding: 0;
        }

        .about h3 {
          font-size: 25px;
          font-weight: 700;
          margin: 0;
          padding: 0;
        }

        .about p {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.7;
          color: #999999;
          margin: 20px 0 15px;
          padding: 0;
        }

        .about h4 {
          font-size: 15px;
          font-weight: 500;
          margin: 8px 0;
        }

        .about h4 i {
          color: #F24259;
          margin-right: 10px;
        }

        .about .img-container {
          width: 100%;
          height: auto;
        
          overflow: hidden;
        }

        /* Animation styles */
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .about .content {
          opacity: 0;
          animation: ${isVisible ? 'slideInFromLeft 0.8s ease-out forwards' : 'none'};
        }
      `}</style>
      <div className="container">
        <div className="heading text-center">
          <h2>
            About <span>Us</span>
          </h2>
        </div>
        <br />
        <br />
        <div className="row content">
          <div className="col-lg-6">
            <div className="img-container">
              <img
                src="https://i.ibb.co/qpz1hvM/About-us.jpg"
                alt="about"
                className="img-fluid"
                width="100%"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h3>Sri Satya Sai University of Technology & Medical Science</h3>
            <p>
              Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States,
              due to the quality of education at an affordable cost, without any hidden fees policy. In its history
              of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions were
              the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees
              to worthy & needy students belonging to more than six thousand villages, 34 Tehsils. The majority of
              the population is agriculture-dependent & the percentage of the population living at a low standard of
              living is 80.6. The growth rate recorded recently is 21.5%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


