
// // import React,{useState} from 'react'
// // import logo from './images/SSSUTMS_Logo2-removebg-preview.png';
// // import { Link } from "react-router-dom";
// // const Navbarcontanct = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isOpen2, setIsOpen2] = useState(false);
// //   const [isOpen3, setIsOpen3] = useState(false);
// //   const [isOpen4, setIsOpen4] = useState(false);
// //   const [isOpen5, setIsOpen5] = useState(false);

// //   const [isOpen8, setIsOpen8] = useState(false);
// //   const [isOpen9, setIsOpen9] = useState(false);
// //   const [isOpen10, setIsOpen10] = useState(false);

// //   const [isOpen12, setIsOpen12] = useState(false);
// //   const handleMouseEnter = () => {
// //     setIsOpen(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsOpen(false);
// //   };
// //   const handleMouseEnter2 = () => {
// //     setIsOpen2(true);
// //   };

// //   const handleMouseLeave2 = () => {
// //     setIsOpen2(false);
// //   };
// //   const handleMouseEnter3 = () => {
// //     setIsOpen3(true);
// //   };

// //   const handleMouseLeave3 = () => {
// //     setIsOpen3(false);
// //   };
// //   const handleMouseEnter4 = () => {
// //     setIsOpen4(true);
// //   };

// //   const handleMouseLeave4 = () => {
// //     setIsOpen4(false);
// //   };
// //   const handleMouseEnter5 = () => {
// //     setIsOpen5(true);
// //   };

// //   const handleMouseLeave5 = () => {
// //     setIsOpen5(false);
// //   };

// //   const handleMouseEnter8 = () => {
// //     setIsOpen8(true);
// //   };

// //   const handleMouseLeave8 = () => {
// //     setIsOpen8(false);
// //   };

// //   const handleMouseEnter9 = () => {
// //     setIsOpen9(true);
// //   };

// //   const handleMouseLeave9 = () => {
// //     setIsOpen9(false);
// //   };
// //   const handleMouseEnter10 = () => {
// //     setIsOpen10(true);
// //   };

// //   const handleMouseLeave10 = () => {
// //     setIsOpen10(false);
// //   };

// //   const handleMouseEnter12 = () => {
// //     setIsOpen12(true);
// //   };

// //   const handleMouseLeave12 = () => {
// //     setIsOpen12(false);
// //   };
  
// //   // Global variables
// //   let element;
// //   return (
   
// //         <>
// //       <style>{`
// //         .navbar {
// //           box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
// //         }
// //         // .navbar-brand{
// //         //   pading-right: 80px;
// //         // }
// //         .navbar .navbar-brand img {
// //           max-width: 100px;
// //         }
// //         .navbar .navbar-nav .nav-link {
// //           color: #000;
// //         }
// //         @media screen and (min-width: 1024px) {
// //           .navbar {
// //             letter-spacing: 0.1em;
// //           }
// //           .navbar .navbar-nav .nav-link {
// //             padding: 0.5em 1em;
// //           }
// //           .search-and-icons {
// //             width: 30%;
// //           }
// //           .search-and-icons form {
// //             flex: 1;
// //           }
// //         }
// //         @media screen and (min-width: 768px) {
// //           .navbar .navbar-brand img {
// //             max-width: 4em;
// //           }
// //           .navbar .navbar-collapse {
// //             display: flex;
// //             flex-direction: column-reverse;
// //             align-items: flex-end;
// //           }
// //           .search-and-icons {
// //             display: flex;
// //             align-items: center;
// //           }
// //         }
// //         .search-and-icons form input {
// //           border-radius: 0;
// //           height: 2em;
// //           background: #fff
// //             url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='grey' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E")
// //             no-repeat 95%;
// //         }
// //         .search-and-icons form input:focus {
// //           background: #fff;
// //           box-shadow: none;
// //         }
// //         .search-and-icons .user-icons div {
// //           padding-right: 1em;
// //         }
// //         .contact-info p,
// //         .contact-info a {
// //           font-size: 0.7em;
// //           padding-right: 2em;
// //           // color: grey;
// //         }
// //         .contact-info a {
// //           padding-right: 0;
// //         }
// //         .small-font {
// //           font-size: 0.8rem; /* Adjust the size as needed */
// //           font-weight:bolder;

// //         }
// //      .bull{
// //           list-style-type:disc
// //         }
// //     @import url('https://fonts.googleapis.com/css2?family=Basic&family=Doppio+One&display=swap')
        
// //       `}</style>
// //       <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
// //         <div className="container-xl">
// //           <a className="navbar-brand" href="#">
// //             <img src={logo} alt="Logo" />
// //           </a>
// //           <button
// //             className="navbar-toggler"
// //             type="button"
// //             data-bs-toggle="collapse"
// //             data-bs-target="#navbarSupportedContent"
// //             aria-controls="navbarSupportedContent"
// //             aria-expanded="false"
// //             aria-label="Toggle navigation"
// //           >
// //             <span className="navbar-toggler-icon" />
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //             <div className="contact-info d-md-flex">
// //               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
// //                 <li
// //                   className="nav-item dropdown"
// //                   onMouseEnter={handleMouseEnter}
// //                   onMouseLeave={handleMouseLeave}
// //                 >
// //                   <a
// //                     className="nav-link dropdown-toggle"
// //                     href="#"
// //                     style={{ color: "#dd2d4a" }}
// //                   >
// //                     <b>Academics</b>
// //                   </a>
// //                   <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
// //                     <a className="dropdown-item" href="#">
// //                       {" "}
// //                       <b style={{ color: "black" }}>Academic Calendar</b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>Study Materials</b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>Scholarship</b>
// //                     </a>
// //                   </div>
// //                 </li>

// //                 <li
// //                   className="nav-item dropdown"
// //                   onMouseEnter={handleMouseEnter2}
// //                   onMouseLeave={handleMouseLeave2}
// //                 >
// //                   <a
// //                     className="nav-link dropdown-toggle"
// //                     href="#"
// //                     style={{ color: "#dd2d4a" }}
// //                   >
// //                     <b> Schools & Department</b>
// //                   </a>
// //                   <div
// //                     className={`dropdown-menu ${isOpen2 ? "show" : ""}`}
// //                     style={{ width: "200%", marginLeft: "-60px" }}
// //                   >
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         {" "}
// //                         Department Of Engineering & Technology{" "}
// //                       </b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         Department Of Computer Science & Application
// //                       </b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         Department Of Mathematics & Computing
// //                       </b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         {" "}
// //                         Department Of Science & Life Sciences
// //                       </b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         Department Of Polytechnic
// //                       </b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         {" "}
// //                         Department Of Humanities & Language
// //                       </b>{" "}
// //                     </a>

// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         School Of Education & Physical Education
// //                       </b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>School Of Management</b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         School Of Hospitality Management
// //                       </b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>School Of Design</b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         School Of Planning & Architecture
// //                       </b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>School Of Commerce</b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>School Of Law</b>
// //                     </a>

// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>School Of Agriculture</b>
// //                     </a>

// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>School Of Pharmacy</b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>School Of Nursing</b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         School Of Ayurveda & Siddha Studies (BAMS)
// //                       </b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         School Of Homeopathy (BHMS)
// //                       </b>
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>School Of Paramedical</b>
// //                     </a>

// //                     <a className="dropdown-item" href="#">
// //                       <b style={{ color: "black" }}>
// //                         School Of Vocational & Bridge Learning
// //                       </b>
// //                     </a>
// //                   </div>
// //                 </li>

// //                 <li
// //                   className="nav-item dropdown"
// //                   onMouseEnter={handleMouseEnter3}
// //                   onMouseLeave={handleMouseLeave3}
// //                 >
// //                   <a
// //                     className="nav-link dropdown-toggle"
// //                     href="#"
// //                     style={{ color: "#dd2d4a" }}
// //                   >
// //                     <b>UG Department</b>
// //                   </a>
// //                   <div
// //                     className={`dropdown-menu ${isOpen3 ? "show" : ""}`}
// //                     style={{
// //                       width: "950%",
// //                       marginLeft: "-498px",
// //                       height: "80vh",
// //                       //  backgroundColor: "aliceblue",
// //                     }}
// //                   >
// //                     <div style={{ marginLeft: "20px" }}>
// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}> </b>
// //                       </a>
// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             DEPARTMENT OF ENGINEERING & TECHNOLOGY
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Aeronautical Engineering</li>
// //                             <li>Chemical Engineering</li>
// //                             <li> Civil Engineering</li>
// //                             <li> Computer Science Engineering</li>
// //                             <li>Electrical And Electronics Engineering</li>
// //                             <li> Eletrical Engineering</li>
// //                             <li> Electronics And Communication Engineering</li>
// //                             <li> Information Technology</li>
// //                             <li> Mechanical Engineering</li>
// //                             <li> Mining Engineering</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             DEPARTMENT OF COMPUTER SCIENCE & APPLICATION{" "}
// //                           </span>
// //                           <ul className="bull">
// //                             <li> Bachelor of Computer Application (B.C.A) </li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             DEPARTMENT OF POLYTECHNIC
// //                           </span>
// //                           <ul className="bull">
// //                             <li> Computer Science Engineering </li>
// //                             <li>Electrical Engineering</li>
// //                             <li> Civil Engineering</li>
// //                             <li>Mechanical Engineering </li>
// //                             <li>Chemical Engineering</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             DEPARTMENT OF MATHEMATICS AND COMPUTING SCIENCES
// //                           </span>
// //                           <ul className="bull">
// //                             <li> Bachelor Of Science (B.Sc.) In Mathematics</li>
// //                             <li>
// //                               {" "}
// //                               Bachelor Of Science (B.Sc.) In Computer
// //                               Application
// //                             </li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF LAW
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Bachelor Of Law</li>
// //                           </ul>
// //                         </b>
// //                       </a>
// //                     </div>

// //                     <div style={{ marginLeft: "36%", marginTop: "-570px" }}>
// //                       <a
// //                         className="dropdown-item"
// //                         href="#"
// //                         style={{ marginTop: "125px" }}
// //                       >
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             DEPARTMENT OF SCIENCE AND LIFE SCIENCES
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Bachelor Of Science (B.Sc.)in Biology </li>
// //                             <li>Bachelor Of Science (B.Sc.)in Biochemistry</li>
// //                             <li>
// //                               {" "}
// //                               Bachelor Of Science (B.Sc.) in Microbiology
// //                             </li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF COMMERCE
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Bachelor Of Commerce (B.Com.)</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF HUMANITIES AND LIFE SCIENCES
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Bachelor Of Arts (B.A.)</li>
// //                             <li>Bachelor Of Arts With Computer Application</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF PHARMACY
// //                           </span>
// //                           <ul className="bull">
// //                             <li> Bachelor Of Pharmacy</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF NURSING
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Bachelor Of Science (B.Sc) in Nursing</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF AYURVEDA AND SIDDHA STUDIES
// //                           </span>
// //                           <ul className="bull">
// //                             <li>B.A.M.S</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             SCHOOL OF HOMEOPATHY
// //                           </span>
// //                           <ul className="bull">
// //                             <li>B.H.M.S</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             SCHOOL OF PARAMEDICAL
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Bachelor Of Physiotherapy (BPT)</li>
// //                             <li>Bachelors In Medical Lab Technology (BMLT)</li>
// //                             <li>Diploma In Medical Lab Technology (DMLT)</li>
// //                           </ul>
// //                         </b>
// //                       </a>
// //                     </div>
// //                     <div style={{ marginLeft: "65%", marginTop: "-417px" }}>
// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF EDUCATION & PHYSICAL EDUCATION
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Bachelor Of Education(B.Ed.)</li>
// //                             <li>
// //                               Bachelor Of Arts & Bachelor Of Education (BA &
// //                               B.Ed.)
// //                             </li>
// //                             <li>Bachelor Of Physical Education(B.P.Ed.)</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             SCHOOL OF MANAGEMENT
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Bachelor Of Business Administration (BBA)</li>
// //                           </ul>
// //                         </b>
// //                       </a>
// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF HOSPITALITY MANAGEMENT{" "}
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Bachelor Of Hotel Management and Catering</li>
// //                           </ul>
// //                         </b>
// //                       </a>
// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             SCHOOL OF DESIGN AND ARCHITECTURE
// //                           </span>
// //                           <ul className="bull">
// //                             <li>
// //                               Bachelor Of Design (B.Des in Industrial Design)
// //                             </li>
// //                             <li>
// //                               Bachelor Of Design (B.Des in Communication Design)
// //                             </li>
// //                             <li>
// //                               Bachelor Of Design (B.Des in Textile Design)
// //                             </li>
// //                             <li>
// //                               Bachelor Of Design (B.Des in Interior Design)
// //                             </li>
// //                             <li>
// //                               Bachelor Of Design (B.Des in Product Design)
// //                             </li>
// //                           </ul>
// //                         </b>
// //                       </a>
// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF PLANNING & ARCHITECTURE
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Bachelor Of Architecture (B.Arch)</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             School Of Vocational & Bridge Learning
// //                           </span>
// //                         </b>
// //                       </a>
// //                     </div>
// //                   </div>
// //                 </li>

// //                 <li
// //                   className="nav-item dropdown"
// //                   onMouseEnter={handleMouseEnter4}
// //                   onMouseLeave={handleMouseLeave4}
// //                 >
// //                   <a
// //                     className="nav-link dropdown-toggle"
// //                     href="#"
// //                     style={{ color: "#dd2d4a" }}
// //                   >
// //                     <b>PG Department</b>
// //                   </a>
// //                   <div
// //                     className={`dropdown-menu ${isOpen4 ? "show" : ""}`}
// //                     style={{
// //                       width: "670%",
// //                       marginLeft: "-400px",
// //                       height: "100vh",
// //                       // backgroundColor: "aliceblue",
// //                     }}
// //                   >
// //                     <div style={{ marginLeft: "25px" }}>
// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}> </b>
// //                       </a>
// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             DEPARTMENT OF ENGINEERING & TECHNOLOGY
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Computer Science and Engineering</li>
// //                             <li>Computer Technology & Applications</li>
// //                             <li>Digital Communication</li>
// //                             <li>Electrical Power System</li>
// //                             <li>Industrial Design</li>
// //                             <li>Information Technology</li>
// //                             <li>Power Electronics</li>
// //                             <li>Software Engineering</li>
// //                             <li>Structural Design</li>
// //                             <li>Thermal Engineering</li>
// //                             <li>VLSI</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             DEPARTMENT OF COMPUTER SCIENCE & APPLICATION{" "}
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Master of Computer Application (M.C.A) </li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             DEPARTMENT OF MATHEMATICS AND COMPUTING SCIENCES
// //                           </span>
// //                           <ul className="bull">
// //                             <li> Master Of Science (M.Sc.) In Mathematics</li>
// //                             <li>
// //                               {" "}
// //                               Master Of Science (M.Sc.) In Computer Application
// //                             </li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             DEPARTMENT OF SCIENCE AND LIFE SCIENCES
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Master Of Science (M.Sc.)in Biology </li>
// //                             <li>Master Of Science (M.Sc.)in Biochemistry</li>
// //                             <li> Master Of Science (M.Sc.) in Microbiology</li>
// //                           </ul>
// //                         </b>
// //                       </a>
// //                     </div>
// //                     <div style={{ marginLeft: "55%", marginTop: "-385px" }}>
// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF COMMERCE
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Master Of Commerce (M.Com.)</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF HUMANITIES AND LIFE SCIENCES
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Master Of Arts (M.A.) in Hindi</li>
// //                             <li>Master Of Arts (M.A.) in English</li>
// //                             <li>Master Of Arts (M.A.) in History</li>
// //                             <li>Master Of Arts (M.A.) in Political Science </li>
// //                             <li>Master Of Arts (M.A.) in Sociology</li>
// //                             <li>Master Of Arts (M.A.) in Psychology</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             SCHOOL OF PHARMACY
// //                           </span>
// //                           <ul className="bull">
// //                             <li>
// //                               {" "}
// //                               Master Of Pharmacy (M. Pharm.) in Pharmaceutics
// //                             </li>
// //                             <li>
// //                               {" "}
// //                               Master Of Pharmacy (M. Pharm.) in Pharmacology
// //                             </li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             School Of Management
// //                           </span>
// //                           <ul className="bull">
// //                             <li>Master Of Commerce (M.Com.)</li>
// //                           </ul>
// //                         </b>
// //                       </a>

// //                       <a className="dropdown-item" href="#">
// //                         <b style={{ color: "black" }}>
// //                           <span
// //                             style={{
// //                               color: "brown",
// //                               textDecoration: "underline",
// //                             }}
// //                           >
// //                             {" "}
// //                             School Of Vocational & Bridge Learning
// //                           </span>
// //                         </b>
// //                       </a>
// //                     </div>
// //                   </div>
// //                 </li>

// //                 <li
// //                   className="nav-item dropdown"
// //                   onMouseEnter={handleMouseEnter5}
// //                   onMouseLeave={handleMouseLeave5}
// //                 >
// //                   <a
// //                     className="nav-link dropdown-toggle"
// //                     href="#"
// //                     style={{ color: "#dd2d4a" }}
// //                   >
// //                     <b>Events</b>
// //                   </a>
// //                   <div className={`dropdown-menu ${isOpen5 ? "show" : ""}`}>
// //                     <a className="dropdown-item" href="#">
// //                       Department 1
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       Department 2
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       Department 3
// //                     </a>
// //                   </div>
// //                 </li>

// //                 <li
// //                   className="nav-item dropdown"
// //                   onMouseEnter={handleMouseEnter12}
// //                   onMouseLeave={handleMouseLeave12}
// //                 >
// //                   <a
// //                     className="nav-link dropdown-toggle"
// //                     href="#"
// //                     style={{ color: "#dd2d4a" }}
// //                   >
// //                     <b>Students</b>
// //                   </a>
// //                   <div className={`dropdown-menu ${isOpen12 ? "show" : ""}`}>
// //                     <a className="dropdown-item" href="#">
// //                       Department 1
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       Department 2
// //                     </a>
// //                     <a className="dropdown-item" href="#">
// //                       Department 3
// //                     </a>
// //                   </div>
// //                 </li>
// //                 {/* 
// //                 <li className="nav-item">
// //                   <a
// //                     className="nav-link active"
// //                     aria-current="page"
// //                     href="#"
// //                     style={{ color: "#dd2d4a" }}
// //                   >
// //                     <b>Alumni</b>
// //                   </a>
// //                 </li> */}

// //                 <li className="nav-item">
// //                   <a
// //                     className="nav-link active"
// //                     aria-current="page"
// //                     href="#"
// //                     style={{ color: "#dd2d4a" }}
// //                   >
// //                     <b>For Recruiters</b>
// //                   </a>
// //                 </li>

// //                 {/* <Link to="/erp/studentregister">
// //             <a style={{ color: 'whitesmoke', animation: 'blink 1s infinite' }}>
// //               E-Pravesh 
// //               <style>
// //                 {`
// //            @keyframes blink {
// //             0% { opacity: 1; }
// //             50% { opacity: 0; }
// //             100% { opacity: 1; }
// //           }
// //             }
// //           `}
// //               </style>
// //             </a>
           
// //           </Link> */}

// //                 <Link to="/Epravesh/Student/Register">
// //                   <li className="nav-item">
// //                     <a
// //                       className="nav-link active"
// //                       aria-current="page"
// //                       href="#"
// //                       style={{
// //                         color: "#4B0082",

// //                         fontSize: "inherit",
// //                       }}
// //                     >
// //                       <b> E-Pravesh </b>
// //                     </a>
// //                   </li>
// //                 </Link>

// //                 <Link to="/entrance/form">
// //                   <li className="nav-item">
// //                     <a
// //                       className="nav-link active"
// //                       aria-current="page"
// //                       href="#"
// //                       style={{
// //                         color: "#4B0082",
// //                         animation: "blink 1s infinite",
// //                         fontSize: "inherit",
// //                       }}
// //                     >
// //                       <b> Entrance Exam</b>
// //                     </a>
// //                     <style>
// //                       {`
// //       @keyframes blink {
// //         0% { opacity: 1; }
// //         50% { opacity: 0; }
// //         100% { opacity: 1; }
// //       }
// //     `}
// //                     </style>
// //                   </li>
// //                 </Link>
// //               </ul>
// //             </div>

// //             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
// //               <Link to="/">
// //                 <li className="nav-item">
// //                   <a className="nav-link active" aria-current="page" href="#">
// //                     <b>Home</b>
// //                   </a>
// //                 </li>
// //               </Link>

// //               <li
// //                 className="nav-item dropdown"
// //                 onMouseEnter={handleMouseEnter8}
// //                 onMouseLeave={handleMouseLeave8}
// //               >
// //                 <a className="nav-link dropdown-toggle" href="#">
// //                   <b>About</b>
// //                 </a>

// //                 <div className={`dropdown-menu ${isOpen8 ? "show" : ""}`}>
// //                   <a className="dropdown-item small-font" href="#">
// //                     History & Milestones
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Vision & Mission
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Leadership
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Committee & Cell
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     MOU & Collaboration
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Statues
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Best Practices
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Press Media
// //                   </a>
// //                 </div>
// //               </li>

// //               <li
// //                 className="nav-item dropdown"
// //                 onMouseEnter={handleMouseEnter9}
// //                 onMouseLeave={handleMouseLeave9}
// //               >
// //                 <a className="nav-link dropdown-toggle" href="#">
// //                   <b>Examination</b>
// //                 </a>
// //                 <div className={`dropdown-menu ${isOpen9 ? "show" : ""}`}>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Results
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Apply for Exam
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Exam Schedule
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     {" "}
// //                     Exam Notification
// //                   </a>

// //                   <a className="dropdown-item small-font" href="#">
// //                     {" "}
// //                     Apply for Certificates
// //                   </a>
// //                 </div>
// //               </li>

// //               <li
// //                 className="nav-item dropdown"
// //                 onMouseEnter={handleMouseEnter10}
// //                 onMouseLeave={handleMouseLeave10}
// //               >
// //                 <a className="nav-link dropdown-toggle" href="#">
// //                   <b>Research</b>
// //                 </a>
// //                 <div className={`dropdown-menu ${isOpen10 ? "show" : ""}`}>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Research & Promotion Policy
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Doctoral Programs PhD
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Centre Of Excellence
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Consultancy Services{" "}
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     MOU & Collaboration
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Centre For Development Of Entreprenurship
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Best Practices
// //                   </a>
// //                   <a className="dropdown-item small-font" href="#">
// //                     Press Media
// //                   </a>
// //                 </div>
// //               </li>

// //               <li className="nav-item">
// //                 <a className="nav-link">
// //                   <b>Placement</b>
// //                 </a>
// //               </li>
// //               <Link to="/contact">
// //                 <li className="nav-item">
// //                   <a className="nav-link">
// //                     <b>Contact</b>
// //                   </a>
// //                 </li>
// //               </Link>
// //               <li className="nav-item">
// //                 <a className="nav-link">
// //                   <b>Campus</b>
// //                 </a>
// //               </li>
// //               <li className="nav-item">
// //                 <a className="nav-link">
// //                   {" "}
// //                   <b>Activities</b>
// //                 </a>
// //               </li>
// //               {/* <Link to="/erp">
// //                 <li className="nav-item">
// //                   <button
// //                     type="button"
// //                     class="btn btn-danger"
// //                     style={{ color: "white", marginLeft: "10px" }}
// //                   >
// //                     {" "}
// //                     <b> ERP</b>
// //                   </button>
// //                 </li>
// //               </Link> */}

// //               <Link to="/erp">
// //                 <li className="nav-item">
// //                   <button
// //                     type="button"
// //                     className="btn btn-danger"
// //                     style={{
// //                       color: "white",
// //                       display: "flex",
// //                       alignItems: "center",
// //                       justifyContent: "center",
// //                       marginLeft: "8px",
// //                       height: "35px", // Adjust the height as needed
// //                       width: "60px", // Adjust the width as needed
// //                     }}
// //                   >
// //                     <b style={{ margin: "0" }}>Erp</b>
// //                   </button>
// //                 </li>
// //               </Link>

// //               {/* <Link to="/erp">
// //   <li className="nav-item">
// //     <button
// //       type="button"
// //       class="btn btn-danger"
// //       style={{ 
// //         color: "white",
// //         marginLeft: "8px",
// //         height: "35px", // Adjust the height as needed
// //         width: "120px"  // Adjust the width as needed
// //       }}
// //     >
// //       <b>ADMISSION</b>
// //     </button>
// //   </li>
// // </Link> */}

// //               <li className="nav-item">
// //                 <button
// //                   type="button"
// //                   className="btn btn-danger"
// //                   style={{
// //                     color: "white",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     marginLeft: "8px",
// //                     height: "35px", // Adjust the height as needed
// //                     width: "120px", // Adjust the width as needed
// //                   }}
// //                 >
// //                   <b style={{ margin: "0" }}>ADMISSION</b>
// //                 </button>
// //               </li>

// //               {/* <li className="nav-item" style={{ color: "" }}>
// //                 <button
// //                   type="button"
// //                   class="btn btn-danger"
// //                   style={{ marginLeft: "10px" }}
// //                 >
// //                   <b>ADMISSION</b>
// //                 </button>
// //               </li> */}
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //     </>

// //   )
// // }

// // export default Navbarcontanct





// import React,{useState} from 'react'
// import logo from './images/SSSUTMS_Logo2-removebg-preview.png';
// import { Link } from "react-router-dom";
// const Navbarcontanct = () => {
//     const [isOpen, setIsOpen] = useState(false);
//   const [isOpen2, setIsOpen2] = useState(false);
//   const [isOpen3, setIsOpen3] = useState(false);
//   const [isOpen4, setIsOpen4] = useState(false);
//   const [isOpen5, setIsOpen5] = useState(false);

//   const [isOpen8, setIsOpen8] = useState(false);
//   const [isOpen9, setIsOpen9] = useState(false);
//   const [isOpen10, setIsOpen10] = useState(false);

//   const [isOpen12, setIsOpen12] = useState(false);
//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };
//   const handleMouseEnter2 = () => {
//     setIsOpen2(true);
//   };

//   const handleMouseLeave2 = () => {
//     setIsOpen2(false);
//   };
//   const handleMouseEnter3 = () => {
//     setIsOpen3(true);
//   };

//   const handleMouseLeave3 = () => {
//     setIsOpen3(false);
//   };
//   const handleMouseEnter4 = () => {
//     setIsOpen4(true);
//   };

//   const handleMouseLeave4 = () => {
//     setIsOpen4(false);
//   };
//   const handleMouseEnter5 = () => {
//     setIsOpen5(true);
//   };

//   const handleMouseLeave5 = () => {
//     setIsOpen5(false);
//   };

//   const handleMouseEnter8 = () => {
//     setIsOpen8(true);
//   };

//   const handleMouseLeave8 = () => {
//     setIsOpen8(false);
//   };

//   const handleMouseEnter9 = () => {
//     setIsOpen9(true);
//   };

//   const handleMouseLeave9 = () => {
//     setIsOpen9(false);
//   };
//   const handleMouseEnter10 = () => {
//     setIsOpen10(true);
//   };

//   const handleMouseLeave10 = () => {
//     setIsOpen10(false);
//   };

//   const handleMouseEnter12 = () => {
//     setIsOpen12(true);
//   };

//   const handleMouseLeave12 = () => {
//     setIsOpen12(false);
//   };
  
//   // Global variables
//   let element;
//   return (
//     <>
//     <style>{`
//   .navbar {
//     box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
//   }
//   // .navbar-brand{
//   //   pading-right: 80px;
//   // }
//   .navbar .navbar-brand img {
//     max-width: 100px;
//   }
//   .navbar .navbar-nav .nav-link {
//     color: #000;
//   }
//   @media screen and (min-width: 1024px) {
//     .navbar {
//       letter-spacing: 0.1em;
//     }
//     .navbar .navbar-nav .nav-link {
//       padding: 0.5em 1em;
//     }
//     .search-and-icons {
//       width: 30%;
//     }
//     .search-and-icons form {
//       flex: 1;
//     }
//   }
//   @media screen and (min-width: 768px) {
//     .navbar .navbar-brand img {
//       max-width: 4em;
//     }
//     .navbar .navbar-collapse {
//       display: flex;
//       flex-direction: column-reverse;
//       align-items: flex-end;
//     }
//     .search-and-icons {
//       display: flex;
//       align-items: center;
//     }
//   }
//   .search-and-icons form input {
//     border-radius: 0;
//     height: 2em;
//     background: #fff
//       url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='grey' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E")
//       no-repeat 95%;
//   }
//   .search-and-icons form input:focus {
//     background: #fff;
//     box-shadow: none;
//   }
//   .search-and-icons .user-icons div {
//     padding-right: 1em;
//   }
//   .contact-info p,
//   .contact-info a {
//     font-size: 0.7em;
//     padding-right: 2em;
//     // color: grey;
//   }
//   .contact-info a {
//     padding-right: 0;
//   }
//   .small-font {
//     font-size: 0.8rem; /* Adjust the size as needed */
//     font-weight:bolder;

//   }
// .bull{
//     list-style-type:disc
//   }
// @import url('https://fonts.googleapis.com/css2?family=Basic&family=Doppio+One&display=swap')
  
// `}</style>
//     <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
//       <div className="container-xl">
//         <a className="navbar-brand" href="#">
//           <img style={{ marginLeft: "-55px" }} src={logo} alt="Logo" />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div
//           className="collapse navbar-collapse"
//           id="navbarSupportedContent"
//         >
//           <div className="contact-info d-md-flex">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li
//                 className="nav-item dropdown"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   style={{ color: " #dd2d4a", fontSize: "15px" }}
//                 >
//                   <b>Academics</b>
//                 </a>
//                 <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
//                   <a className="dropdown-item" href="#">
//                     {" "}
//                     <b style={{ color: "black" }}>Academic Calendar</b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>Study Materials</b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>Scholarship</b>
//                   </a>
//                 </div>
//               </li>

//               <li
//                 className="nav-item dropdown"
//                 onMouseEnter={handleMouseEnter2}
//                 onMouseLeave={handleMouseLeave2}
//               >
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   style={{ color: "#dd2d4a", fontSize: "15px" }}
//                 >
//                   <b> Schools & Department</b>
//                 </a>
//                 <div
//                   className={`dropdown-menu ${isOpen2 ? "show" : ""}`}
//                   style={{ width: "200%", marginLeft: "-60px" }}
//                 >
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       {" "}
//                       Department Of Engineering & Technology{" "}
//                     </b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       Department Of Computer Science & Application
//                     </b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       Department Of Mathematics & Computing
//                     </b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       {" "}
//                       Department Of Science & Life Sciences
//                     </b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       Department Of Polytechnic
//                     </b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       {" "}
//                       Department Of Humanities & Language
//                     </b>{" "}
//                   </a>

//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       School Of Education & Physical Education
//                     </b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>School Of Management</b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       School Of Hospitality Management
//                     </b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>School Of Design</b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       School Of Planning & Architecture
//                     </b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>School Of Commerce</b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>School Of Law</b>
//                   </a>

//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>School Of Agriculture</b>
//                   </a>

//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>School Of Pharmacy</b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>School Of Nursing</b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       School Of Ayurveda & Siddha Studies (BAMS)
//                     </b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       School Of Homeopathy (BHMS)
//                     </b>
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>School Of Paramedical</b>
//                   </a>

//                   <a className="dropdown-item" href="#">
//                     <b style={{ color: "black" }}>
//                       School Of Vocational & Bridge Learning
//                     </b>
//                   </a>
//                 </div>
//               </li>

//               <li
//                 className="nav-item dropdown"
//                 onMouseEnter={handleMouseEnter3}
//                 onMouseLeave={handleMouseLeave3}
//               >
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   style={{ color: "#dd2d4a", fontSize: "15px" }}
//                 >
//                   <b>UG Department</b>
//                 </a>
//                 <div
//                   className={`dropdown-menu ${isOpen3 ? "show" : ""}`}
//                   style={{
//                     width: "750%",
//                     marginLeft: "-498px",
//                     height: "80vh",
//                     //  backgroundColor: "aliceblue",
//                   }}
//                 >
//                   <div style={{ marginLeft: "20px" }}>
//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}> </b>
//                     </a>
//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           DEPARTMENT OF ENGINEERING & TECHNOLOGY
//                         </span>
//                         <ul className="bull">
//                           <li>Aeronautical Engineering</li>
//                           <li>Chemical Engineering</li>
//                           <li> Civil Engineering</li>
//                           <li> Computer Science Engineering</li>
//                           <li>Electrical And Electronics Engineering</li>
//                           <li> Eletrical Engineering</li>
//                           <li>
//                             {" "}
//                             Electronics And Communication Engineering
//                           </li>
//                           <li> Information Technology</li>
//                           <li> Mechanical Engineering</li>
//                           <li> Mining Engineering</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           DEPARTMENT OF COMPUTER SCIENCE & APPLICATION{" "}
//                         </span>
//                         <ul className="bull">
//                           <li>
//                             {" "}
//                             Bachelor of Computer Application (B.C.A){" "}
//                           </li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           DEPARTMENT OF POLYTECHNIC
//                         </span>
//                         <ul className="bull">
//                           <li> Computer Science Engineering </li>
//                           <li>Electrical Engineering</li>
//                           <li> Civil Engineering</li>
//                           <li>Mechanical Engineering </li>
//                           <li>Chemical Engineering</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           DEPARTMENT OF MATHEMATICS AND COMPUTING SCIENCES
//                         </span>
//                         <ul className="bull">
//                           <li>
//                             {" "}
//                             Bachelor Of Science (B.Sc.) In Mathematics
//                           </li>
//                           <li>
//                             {" "}
//                             Bachelor Of Science (B.Sc.) In Computer
//                             Application
//                           </li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF LAW
//                         </span>
//                         <ul className="bull">
//                           <li>Bachelor Of Law</li>
//                         </ul>
//                       </b>
//                     </a>
//                   </div>

//                   <div style={{ marginLeft: "36%", marginTop: "-570px" }}>
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       style={{ marginTop: "125px" }}
//                     >
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           DEPARTMENT OF SCIENCE AND LIFE SCIENCES
//                         </span>
//                         <ul className="bull">
//                           <li>Bachelor Of Science (B.Sc.)in Biology </li>
//                           <li>
//                             Bachelor Of Science (B.Sc.)in Biochemistry
//                           </li>
//                           <li>
//                             {" "}
//                             Bachelor Of Science (B.Sc.) in Microbiology
//                           </li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF COMMERCE
//                         </span>
//                         <ul className="bull">
//                           <li>Bachelor Of Commerce (B.Com.)</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF HUMANITIES AND LIFE SCIENCES
//                         </span>
//                         <ul className="bull">
//                           <li>Bachelor Of Arts (B.A.)</li>
//                           <li>
//                             Bachelor Of Arts With Computer Application
//                           </li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF PHARMACY
//                         </span>
//                         <ul className="bull">
//                           <li> Bachelor Of Pharmacy</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF NURSING
//                         </span>
//                         <ul className="bull">
//                           <li>Bachelor Of Science (B.Sc) in Nursing</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF AYURVEDA AND SIDDHA STUDIES
//                         </span>
//                         <ul className="bull">
//                           <li>B.A.M.S</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           SCHOOL OF HOMEOPATHY
//                         </span>
//                         <ul className="bull">
//                           <li>B.H.M.S</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           SCHOOL OF PARAMEDICAL
//                         </span>
//                         <ul className="bull">
//                           <li>Bachelor Of Physiotherapy (BPT)</li>
//                           <li>
//                             Bachelors In Medical Lab Technology (BMLT)
//                           </li>
//                           <li>Diploma In Medical Lab Technology (DMLT)</li>
//                         </ul>
//                       </b>
//                     </a>
//                   </div>
//                   <div style={{ marginLeft: "65%", marginTop: "-417px" }}>
//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF EDUCATION & PHYSICAL EDUCATION
//                         </span>
//                         <ul className="bull">
//                           <li>Bachelor Of Education(B.Ed.)</li>
//                           <li>
//                             Bachelor Of Arts & Bachelor Of Education (BA &
//                             B.Ed.)
//                           </li>
//                           <li>Bachelor Of Physical Education(B.P.Ed.)</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           SCHOOL OF MANAGEMENT
//                         </span>
//                         <ul className="bull">
//                           <li>Bachelor Of Business Administration (BBA)</li>
//                         </ul>
//                       </b>
//                     </a>
//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF HOSPITALITY MANAGEMENT{" "}
//                         </span>
//                         <ul className="bull">
//                           <li>Bachelor Of Hotel Management and Catering</li>
//                         </ul>
//                       </b>
//                     </a>
//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           SCHOOL OF DESIGN AND ARCHITECTURE
//                         </span>
//                         <ul className="bull">
//                           <li>
//                             Bachelor Of Design (B.Des in Industrial Design)
//                           </li>
//                           <li>
//                             Bachelor Of Design (B.Des in Communication
//                             Design)
//                           </li>
//                           <li>
//                             Bachelor Of Design (B.Des in Textile Design)
//                           </li>
//                           <li>
//                             Bachelor Of Design (B.Des in Interior Design)
//                           </li>
//                           <li>
//                             Bachelor Of Design (B.Des in Product Design)
//                           </li>
//                         </ul>
//                       </b>
//                     </a>
//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF PLANNING & ARCHITECTURE
//                         </span>
//                         <ul className="bull">
//                           <li>Bachelor Of Architecture (B.Arch)</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           School Of Vocational & Bridge Learning
//                         </span>
//                       </b>
//                     </a>
//                   </div>
//                 </div>
//               </li>

//               <li
//                 className="nav-item dropdown"
//                 onMouseEnter={handleMouseEnter4}
//                 onMouseLeave={handleMouseLeave4}
//               >
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   style={{ color: "#dd2d4a", fontSize: "15px" }}
//                 >
//                   <b>PG Department</b>
//                 </a>
//                 <div
//                   className={`dropdown-menu ${isOpen4 ? "show" : ""}`}
//                   style={{
//                     width: "570%",
//                     marginLeft: "-400px",
//                     height: "80vh",
//                     // backgroundColor: "aliceblue",
//                   }}
//                 >
//                   <div style={{ marginLeft: "25px" }}>
//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}> </b>
//                     </a>
//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           DEPARTMENT OF ENGINEERING & TECHNOLOGY
//                         </span>
//                         <ul className="bull">
//                           <li>Computer Science and Engineering</li>
//                           <li>Computer Technology & Applications</li>
//                           <li>Digital Communication</li>
//                           <li>Electrical Power System</li>
//                           <li>Industrial Design</li>
//                           <li>Information Technology</li>
//                           <li>Power Electronics</li>
//                           <li>Software Engineering</li>
//                           <li>Structural Design</li>
//                           <li>Thermal Engineering</li>
//                           <li>VLSI</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           DEPARTMENT OF COMPUTER SCIENCE & APPLICATION{" "}
//                         </span>
//                         <ul className="bull">
//                           <li>Master of Computer Application (M.C.A) </li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           DEPARTMENT OF MATHEMATICS AND COMPUTING SCIENCES
//                         </span>
//                         <ul className="bull">
//                           <li> Master Of Science (M.Sc.) In Mathematics</li>
//                           <li>
//                             {" "}
//                             Master Of Science (M.Sc.) In Computer
//                             Application
//                           </li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           DEPARTMENT OF SCIENCE AND LIFE SCIENCES
//                         </span>
//                         <ul className="bull">
//                           <li>Master Of Science (M.Sc.)in Biology </li>
//                           <li>Master Of Science (M.Sc.)in Biochemistry</li>
//                           <li>
//                             {" "}
//                             Master Of Science (M.Sc.) in Microbiology
//                           </li>
//                         </ul>
//                       </b>
//                     </a>
//                   </div>
//                   <div style={{ marginLeft: "55%", marginTop: "-385px" }}>
//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF COMMERCE
//                         </span>
//                         <ul className="bull">
//                           <li>Master Of Commerce (M.Com.)</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF HUMANITIES AND LIFE SCIENCES
//                         </span>
//                         <ul className="bull">
//                           <li>Master Of Arts (M.A.) in Hindi</li>
//                           <li>Master Of Arts (M.A.) in English</li>
//                           <li>Master Of Arts (M.A.) in History</li>
//                           <li>
//                             Master Of Arts (M.A.) in Political Science{" "}
//                           </li>
//                           <li>Master Of Arts (M.A.) in Sociology</li>
//                           <li>Master Of Arts (M.A.) in Psychology</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           SCHOOL OF PHARMACY
//                         </span>
//                         <ul className="bull">
//                           <li>
//                             {" "}
//                             Master Of Pharmacy (M. Pharm.) in Pharmaceutics
//                           </li>
//                           <li>
//                             {" "}
//                             Master Of Pharmacy (M. Pharm.) in Pharmacology
//                           </li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           School Of Management
//                         </span>
//                         <ul className="bull">
//                           <li>Master Of Commerce (M.Com.)</li>
//                         </ul>
//                       </b>
//                     </a>

//                     <a className="dropdown-item" href="#">
//                       <b style={{ color: "black" }}>
//                         <span
//                           style={{
//                             color: "brown",
//                             textDecoration: "underline",
//                           }}
//                         >
//                           {" "}
//                           School Of Vocational & Bridge Learning
//                         </span>
//                       </b>
//                     </a>
//                   </div>
//                 </div>
//               </li>

//               <li
//                 className="nav-item dropdown"
//                 onMouseEnter={handleMouseEnter5}
//                 onMouseLeave={handleMouseLeave5}
//               >
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   style={{ color: "#dd2d4a", fontSize: "15px" }}
//                 >
//                   <b>Events</b>
//                 </a>
//                 <div className={`dropdown-menu ${isOpen5 ? "show" : ""}`}>
//                   <a className="dropdown-item" href="#">
//                     Department 1
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     Department 2
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     Department 3
//                   </a>
//                 </div>
//               </li>

//               <li
//                 className="nav-item dropdown"
//                 onMouseEnter={handleMouseEnter12}
//                 onMouseLeave={handleMouseLeave12}
//               >
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   style={{ color: "#dd2d4a", fontSize: "15px" }}
//                 >
//                   <b>NIRF</b>
//                 </a>
//                 <div className={`dropdown-menu ${isOpen12 ? "show" : ""}`}>
//                   <Link to="/Nirf/Engenerring">
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       style={{ fontSize: "inherit" }}
//                     >
//                       {" "}
//                       <b style={{ color: "black" }}>Engineering</b>
//                     </a>
//                   </Link>
//                   <Link to="/Nirf/Agriculter">
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       style={{ fontSize: "inherit" }}
//                     >
//                       <b style={{ color: "black" }}>Agriculture</b>
//                     </a>
//                   </Link>
//                   <Link to="/Nirf/Pharamacy">
//                     <a
//                       className="dropdown-item"
//                       href="#"
//                       style={{ fontSize: "inherit" }}
//                     >
//                       <b style={{ color: "black" }}>Pharmacy</b>
//                     </a>
//                   </Link>
//                 </div>
//               </li>

//               <Link to="/Epravesh/Student/Register">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link active"
//                     aria-current="page"
//                     href="#"
//                     style={{
//                       color: "#4B0082",
//                       fontSize: "15px",
//                     }}
//                   >
//                     <b> E-Pravesh </b>
//                   </a>
//                 </li>
//               </Link>

//               <Link to="/entrance/form">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link active"
//                     aria-current="page"
//                     href="#"
//                     style={{
//                       color: "#4B0082",
//                       animation: "blink 1s infinite",
//                       fontSize: "inherit",
//                       fontSize: "15px",
//                     }}
//                   >
//                     <b> Entrance Exam</b>
//                   </a>
//                   <style>
//                     {`
//                           @keyframes blink {
//                           0% { opacity: 1; }
//                          50% { opacity: 0; }
//                          100% { opacity: 1; }
//                            }
//                          `}
//                   </style>
//                 </li>
//               </Link>
//             </ul>
//           </div>

//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <Link to="/">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   <b>Home</b>
//                 </a>
//               </li>
//             </Link>

//             <li
//               className="nav-item dropdown"
//               onMouseEnter={handleMouseEnter8}
//               onMouseLeave={handleMouseLeave8}
//             >
//               <a className="nav-link dropdown-toggle" href="#">
//                 <b>About</b>
//               </a>

//               <div className={`dropdown-menu ${isOpen8 ? "show" : ""}`}>
//                 <a className="dropdown-item small-font" href="#">
//                   History & Milestones
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Vision & Mission
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Leadership
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Committee & Cell
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   MOU & Collaboration
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Statues
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Best Practices
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Press Media
//                 </a>
//               </div>
//             </li>

//             <li
//               className="nav-item dropdown"
//               onMouseEnter={handleMouseEnter9}
//               onMouseLeave={handleMouseLeave9}
//             >
//               <a className="nav-link dropdown-toggle" href="#">
//                 <b>Examination</b>
//               </a>
//               <div className={`dropdown-menu ${isOpen9 ? "show" : ""}`}>
//                 <a className="dropdown-item small-font" href="#">
//                   Results
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Apply for Exam
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Exam Schedule
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   {" "}
//                   Exam Notification
//                 </a>

//                 <a className="dropdown-item small-font" href="#">
//                   {" "}
//                   Apply for Certificates
//                 </a>
//               </div>
//             </li>

//             <li
//               className="nav-item dropdown"
//               onMouseEnter={handleMouseEnter10}
//               onMouseLeave={handleMouseLeave10}
//             >
//               <a className="nav-link dropdown-toggle" href="#">
//                 <b>Research</b>
//               </a>
//               <div className={`dropdown-menu ${isOpen10 ? "show" : ""}`}>
//                 <a className="dropdown-item small-font" href="#">
//                   Research & Promotion Policy
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Doctoral Programs PhD
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Centre Of Excellence
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Consultancy Services{" "}
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   MOU & Collaboration
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Centre For Development Of Entreprenurship
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Best Practices
//                 </a>
//                 <a className="dropdown-item small-font" href="#">
//                   Press Media
//                 </a>
//               </div>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link">
//                 <b>Placement</b>
//               </a>
//             </li>
//             <Link to="/contact">
//               <li className="nav-item">
//                 <a className="nav-link">
//                   <b>Contact </b>
//                 </a>
//               </li>
//             </Link>
//             <li className="nav-item">
//               <a className="nav-link">
//                 <b>Campus</b>
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link">
//                 {" "}
//                 <b>Activities</b>
//               </a>
//             </li>

//             <Link to="/erp">
//               <li className="nav-item">
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   style={{
//                     color: "white",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     marginLeft: "8px",
//                     height: "35px", // Adjust the height as needed
//                     width: "60px", // Adjust the width as needed
//                   }}
//                 >
//                   <b style={{ margin: "0" }}>Erp</b>
//                 </button>
//               </li>
//             </Link>

//             <li className="nav-item">
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 style={{
//                   color: "white",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   marginLeft: "8px",
//                   height: "35px", // Adjust the height as needed
//                   width: "120px", // Adjust the width as needed
//                 }}
//               >
//                 <b style={{ margin: "0" }}>ADMISSION</b>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   </>
// );
// }

// export default Navbarcontanct;

// import logo from "./Photo/SSSUTMS_Logo2-removebg-preview.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import logo from './images/SSSUTMS_Logo2-removebg-preview.png'

function Navbarcontanct() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };
  const handleMouseEnter3 = () => {
    setIsOpen3(true);
  };

  const handleMouseLeave3 = () => {
    setIsOpen3(false);
  };
  const handleMouseEnter4 = () => {
    setIsOpen4(true);
  };

  const handleMouseLeave4 = () => {
    setIsOpen4(false);
  };
  const handleMouseEnter5 = () => {
    setIsOpen5(true);
  };

  const handleMouseLeave5 = () => {
    setIsOpen5(false);
  };

  const handleMouseEnter6 = () => {
    setIsOpen6(true);
  };

  const handleMouseLeave6 = () => {
    setIsOpen6(false);
  };

  const handleMouseEnter8 = () => {
    setIsOpen8(true);
  };

  const handleMouseLeave8 = () => {
    setIsOpen8(false);
  };

  const handleMouseEnter9 = () => {
    setIsOpen9(true);
  };

  const handleMouseLeave9 = () => {
    setIsOpen9(false);
  };
  const handleMouseEnter10 = () => {
    setIsOpen10(true);
  };

  const handleMouseLeave10 = () => {
    setIsOpen10(false);
  };

  const handleMouseEnter12 = () => {
    setIsOpen12(true);
  };

  const handleMouseLeave12 = () => {
    setIsOpen12(false);
  };

  const handleMouseEnter13 = () => {
    setIsOpen13(true);
  };

  const handleMouseLeave13 = () => {
    setIsOpen13(false);
  };
  const handleMouseEnter14 = () => {
    setIsOpen14(true);
  };

  const handleMouseLeave14 = () => {
    setIsOpen14(false);
  };
  return (
    <>
    <style>{`
      .navbar {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      }
      // .navbar-brand{
      //   pading-right: 80px;
      // }
      .navbar .navbar-brand img {
        max-width: 100px;
      }
      .navbar .navbar-nav .nav-link {
        color: #000;
      }
      @media screen and (min-width: 1024px) {
        .navbar {
          letter-spacing: 0.1em;
        }
        .navbar .navbar-nav .nav-link {
          padding: 0.5em 1em;
        }
        .search-and-icons {
          width: 30%;
        }
        .search-and-icons form {
          flex: 1;
        }
      }
      @media screen and (min-width: 768px) {
        .navbar .navbar-brand img {
          max-width: 4em;
        }
        .navbar .navbar-collapse {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
        }
        .search-and-icons {
          display: flex;
          align-items: center;
        }
      }
      .search-and-icons form input {
        border-radius: 0;
        height: 2em;
        background: #fff
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='grey' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E")
          no-repeat 95%;
      }
      .search-and-icons form input:focus {
        background: #fff;
        box-shadow: none;
      }
      .search-and-icons .user-icons div {
        padding-right: 1em;
      }
      .contact-info p,
      .contact-info a {
        font-size: 0.7em;
        padding-right: 2em;
        // color: grey;
      }
      .contact-info a {
        padding-right: 0;
      }
      .small-font {
        font-size: 0.5rem; 
        font-weight:bolder;

      }
   .bull{
        list-style-type:disc
      }
  @import url('https://fonts.googleapis.com/css2?family=Basic&family=Doppio+One&display=swap')
      
    `}</style>
    <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
      <div className="container-xl">
        <a className="navbar-brand" href="#">
          <img style={{ marginLeft: "-65px" }} src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="contact-info d-md-flex">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  style={{ color: " #dd2d4a", fontSize: "15px"}}
                >
                  <b>Academics</b>
                </a>
                <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                  <a className="dropdown-item" href="#">
                    {" "}
                    <b style={{ color: "black" }}>Academic Calendar</b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>Study Materials</b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>Scholarship</b>
                  </a>
                </div>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  style={{  color: " #dd2d4a", fontSize: "15px" }}
                >
                  <b> Schools & Department</b>
                </a>
                <div
                  className={`dropdown-menu ${isOpen2 ? "show" : ""}`}
                  style={{ width: "200%", marginLeft: "-60px" }}
                >
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      {" "}
                      Department Of Engineering & Technology{" "}
                    </b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      Department Of Computer Science & Application
                    </b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      Department Of Mathematics & Computing
                    </b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      {" "}
                      Department Of Science & Life Sciences
                    </b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      Department Of Polytechnic
                    </b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      {" "}
                      Department Of Humanities & Language
                    </b>{" "}
                  </a>

                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      School Of Education & Physical Education
                    </b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>School Of Management</b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      School Of Hospitality Management
                    </b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>School Of Design</b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      School Of Planning & Architecture
                    </b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>School Of Commerce</b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>School Of Law</b>
                  </a>

                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>School Of Agriculture</b>
                  </a>

                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>School Of Pharmacy</b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>School Of Nursing</b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      School Of Ayurveda & Siddha Studies (BAMS)
                    </b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      School Of Homeopathy (BHMS)
                    </b>
                  </a>
                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>School Of Paramedical</b>
                  </a>

                  <a className="dropdown-item" href="#">
                    <b style={{ color: "black" }}>
                      School Of Vocational & Bridge Learning
                    </b>
                  </a>
                </div>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  style={{  color: " #dd2d4a", fontSize: "15px" }}
                >
                  <b>UG Department</b>
                </a>
                <div
                  className={`dropdown-menu ${isOpen3 ? "show" : ""}`}
                  style={{
                    width: "750%",
                      marginLeft: "-478px",
                      height: "80vh",
             
                  }}
                >
                  <div style={{ marginLeft: "20px" }}>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}> </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          DEPARTMENT OF ENGINEERING & TECHNOLOGY
                        </span>
                        <ul className="bull">
                          <li>Aeronautical Engineering</li>
                          <li>Chemical Engineering</li>
                          <li> Civil Engineering</li>
                          <li> Computer Science Engineering</li>
                          <li>Electrical And Electronics Engineering</li>
                          <li> Eletrical Engineering</li>
                          <li> Electronics And Communication Engineering</li>
                          <li> Information Technology</li>
                          <li> Mechanical Engineering</li>
                          <li> Mining Engineering</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          DEPARTMENT OF COMPUTER SCIENCE & APPLICATION{" "}
                        </span>
                        <ul className="bull">
                          <li> Bachelor of Computer Application (B.C.A) </li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          DEPARTMENT OF POLYTECHNIC
                        </span>
                        <ul className="bull">
                          <li> Computer Science Engineering </li>
                          <li>Electrical Engineering</li>
                          <li> Civil Engineering</li>
                          <li>Mechanical Engineering </li>
                          <li>Chemical Engineering</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          DEPARTMENT OF MATHEMATICS AND COMPUTING SCIENCES
                        </span>
                        <ul className="bull">
                          <li> Bachelor Of Science (B.Sc.) In Mathematics</li>
                          <li>
                            {" "}
                            Bachelor Of Science (B.Sc.) In Computer
                            Application
                          </li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF LAW
                        </span>
                        <ul className="bull">
                          <li>Bachelor Of Law</li>
                        </ul>
                      </b>
                    </a>
                  </div>

                  <div style={{ marginLeft: "36%", marginTop: "-570px" }}>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ marginTop: "125px" }}
                    >
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          DEPARTMENT OF SCIENCE AND LIFE SCIENCES
                        </span>
                        <ul className="bull">
                          <li>Bachelor Of Science (B.Sc.)in Biology </li>
                          <li>Bachelor Of Science (B.Sc.)in Biochemistry</li>
                          <li>
                            {" "}
                            Bachelor Of Science (B.Sc.) in Microbiology
                          </li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF COMMERCE
                        </span>
                        <ul className="bull">
                          <li>Bachelor Of Commerce (B.Com.)</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF HUMANITIES AND LIFE SCIENCES
                        </span>
                        <ul className="bull">
                          <li>Bachelor Of Arts (B.A.)</li>
                          <li>Bachelor Of Arts With Computer Application</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF PHARMACY
                        </span>
                        <ul className="bull">
                          <li> Bachelor Of Pharmacy</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF NURSING
                        </span>
                        <ul className="bull">
                          <li>Bachelor Of Science (B.Sc) in Nursing</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF AYURVEDA AND SIDDHA STUDIES
                        </span>
                        <ul className="bull">
                          <li>B.A.M.S</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          SCHOOL OF HOMEOPATHY
                        </span>
                        <ul className="bull">
                          <li>B.H.M.S</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          SCHOOL OF PARAMEDICAL
                        </span>
                        <ul className="bull">
                          <li>Bachelor Of Physiotherapy (BPT)</li>
                          <li>Bachelors In Medical Lab Technology (BMLT)</li>
                          <li>Diploma In Medical Lab Technology (DMLT)</li>
                        </ul>
                      </b>
                    </a>
                  </div>
                  <div style={{ marginLeft: "65%", marginTop: "-417px" }}>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF EDUCATION & PHYSICAL EDUCATION
                        </span>
                        <ul className="bull">
                          <li>Bachelor Of Education(B.Ed.)</li>
                          <li>
                            Bachelor Of Arts & Bachelor Of Education (BA &
                            B.Ed.)
                          </li>
                          <li>Bachelor Of Physical Education(B.P.Ed.)</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          SCHOOL OF MANAGEMENT
                        </span>
                        <ul className="bull">
                          <li>Bachelor Of Business Administration (BBA)</li>
                        </ul>
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF HOSPITALITY MANAGEMENT{" "}
                        </span>
                        <ul className="bull">
                          <li>Bachelor Of Hotel Management and Catering</li>
                        </ul>
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          SCHOOL OF DESIGN AND ARCHITECTURE
                        </span>
                        <ul className="bull">
                          <li>
                            Bachelor Of Design (B.Des in Industrial Design)
                          </li>
                          <li>
                            Bachelor Of Design (B.Des in Communication Design)
                          </li>
                          <li>
                            Bachelor Of Design (B.Des in Textile Design)
                          </li>
                          <li>
                            Bachelor Of Design (B.Des in Interior Design)
                          </li>
                          <li>
                            Bachelor Of Design (B.Des in Product Design)
                          </li>
                        </ul>
                      </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF PLANNING & ARCHITECTURE
                        </span>
                        <ul className="bull">
                          <li>Bachelor Of Architecture (B.Arch)</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          School Of Vocational & Bridge Learning
                        </span>
                      </b>
                    </a>
                  </div>
                </div>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  style={{  color: " #dd2d4a", fontSize: "15px"}}
                >
                  <b>PG Department</b>
                </a>
                <div
                  className={`dropdown-menu ${isOpen4 ? "show" : ""}`}
                  style={{
                    width: "570%",
                    marginLeft: "-400px",
                    height: "80vh",
               
                  }}
                >
                  <div style={{ marginLeft: "25px" }}>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}> </b>
                    </a>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          DEPARTMENT OF ENGINEERING & TECHNOLOGY
                        </span>
                        <ul className="bull">
                          <li>Computer Science and Engineering</li>
                          <li>Computer Technology & Applications</li>
                          <li>Digital Communication</li>
                          <li>Electrical Power System</li>
                          <li>Industrial Design</li>
                          <li>Information Technology</li>
                          <li>Power Electronics</li>
                          <li>Software Engineering</li>
                          <li>Structural Design</li>
                          <li>Thermal Engineering</li>
                          <li>VLSI</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          DEPARTMENT OF COMPUTER SCIENCE & APPLICATION{" "}
                        </span>
                        <ul className="bull">
                          <li>Master of Computer Application (M.C.A) </li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          DEPARTMENT OF MATHEMATICS AND COMPUTING SCIENCES
                        </span>
                        <ul className="bull">
                          <li> Master Of Science (M.Sc.) In Mathematics</li>
                          <li>
                            {" "}
                            Master Of Science (M.Sc.) In Computer Application
                          </li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          DEPARTMENT OF SCIENCE AND LIFE SCIENCES
                        </span>
                        <ul className="bull">
                          <li>Master Of Science (M.Sc.)in Biology </li>
                          <li>Master Of Science (M.Sc.)in Biochemistry</li>
                          <li> Master Of Science (M.Sc.) in Microbiology</li>
                        </ul>
                      </b>
                    </a>
                  </div>
                  <div style={{ marginLeft: "55%", marginTop: "-385px" }}>
                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF COMMERCE
                        </span>
                        <ul className="bull">
                          <li>Master Of Commerce (M.Com.)</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF HUMANITIES AND LIFE SCIENCES
                        </span>
                        <ul className="bull">
                          <li>Master Of Arts (M.A.) in Hindi</li>
                          <li>Master Of Arts (M.A.) in English</li>
                          <li>Master Of Arts (M.A.) in History</li>
                          <li>Master Of Arts (M.A.) in Political Science </li>
                          <li>Master Of Arts (M.A.) in Sociology</li>
                          <li>Master Of Arts (M.A.) in Psychology</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          SCHOOL OF PHARMACY
                        </span>
                        <ul className="bull">
                          <li>
                            {" "}
                            Master Of Pharmacy (M. Pharm.) in Pharmaceutics
                          </li>
                          <li>
                            {" "}
                            Master Of Pharmacy (M. Pharm.) in Pharmacology
                          </li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          School Of Management
                        </span>
                        <ul className="bull">
                          <li>Master Of Commerce (M.Com.)</li>
                        </ul>
                      </b>
                    </a>

                    <a className="dropdown-item" href="#">
                      <b style={{ color: "black" }}>
                        <span
                          style={{
                            color: "brown",
                            textDecoration: "underline",
                          }}
                        >
                          {" "}
                          School Of Vocational & Bridge Learning
                        </span>
                      </b>
                    </a>
                  </div>
                </div>
              </li>

      
              

              <li className="nav-item dropdown"
                 onMouseEnter={handleMouseEnter5}
                 onMouseLeave={handleMouseLeave5}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{  color: " #dd2d4a", fontSize: "15px" }}
            
          >
         <b>Download </b>  
          </a>
          
          <ul className={`dropdown-menu ${isOpen5 ? "show" : ""}`}  >
    
            
            <li className="nav-item dropend"
            onMouseEnter={handleMouseEnter13}
            onMouseLeave={handleMouseLeave13}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
             <b>Scheme</b> 
              </a>
              <ul className={`dropdown-menu ${isOpen13 ? "show" : ""}`}  style={{marginLeft:"-1%",marginTop:"5px"}}>
                <li>
                <Link to = "/B.E-Scheme">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                   <b>BE</b> 
                  </a>
                  </Link>
              
                </li>
                <li>
                  <Link to = "/Pharmacy-scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }} >
                  <b>Pharmacy</b>
                  </a>
                  </Link>
                </li>
                <li>
                <Link to = "/M.Tech-Scheme">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                  <b>MTech</b>
                  </a>
                  </Link>
                </li>
                <li>
                <Link to = "/BHMCT-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>BHMCT</b>
                  </a>
                  </Link>
                </li>
                <li>
                <Link to ="/MBA-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>MBA</b>
                  </a>
                  </Link>
                </li>
                <li>
                <Link to = "/MCA-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>MCA</b>
                  </a>
                  </Link>
                </li>
                <li>
                <Link to = "/Education-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>Education</b>
                  </a>
                  </Link>
                </li>
                <li>
                <Link to = "/PhysicalEducation-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>Physical Education</b>
                  </a>
                  </Link>
                </li>
                <li>
                <Link to = "/BscHonsAg-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>B.Sc.(Hons.) (Ag)</b>
                  </a>
                  </Link> 
                </li>
                <li>
                <Link to = "/BHMS-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>BHMS</b>
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to = "/UTD-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>UTD</b>
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to = "/Paramedical-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>Paramedical</b>
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to = "/POLYTECHNIC(ENGINEERING)-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>POLYTECHNIC (ENGINEERING)</b>
                  </a>
                  </Link>
                </li>
                <li>

                  <Link to = "/BLIBISC-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>B.Lib.I.Sc.</b>
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to = "/BachelorofLaws-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>Bachelor of Laws (LL.B.).</b>
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to = "/BSCHMCS-Scheme">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                  <b>B.Sc. [HMCS]</b>
                  </a>
                  </Link>
                </li>
              </ul>
            </li>

            
            <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter14}
                onMouseLeave={handleMouseLeave14}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
            
                >
                  <b>Syllabus</b>
                </a>
                <div className={`dropdown-menu ${isOpen14 ? "show" : ""}`} style={{marginLeft:"100%",marginTop:"-30px"}} >
                <Link to = "/BESyllabuspage">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                    {" "}
                   <b style={{ color: "black" }}>B.E.</b>
                 </a>
                  </Link>
                  <Link to = "/PharmacySyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>Pharmacy</b>
                  </a>
                  </Link>
                  <Link to = "/M.TechSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>M.Tech</b>
                  </a>
                  </Link>

                  <Link to = "/EducationSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>Education</b>
                  </a>
                  </Link>
                  <Link to = "/BHMCTSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>B.H.M.C.T.</b>
                  </a>
                  </Link>
                  <Link to = "/MBASyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>MBA</b>
                  </a>
                  </Link>
                  <Link to = "/MCASyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>MCA</b>
                  </a>
                  </Link>
                  <Link to = "/PhysicalEducationSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>Physical Education</b>
                  </a>
                  </Link>
                  <Link to = "/BScHonsAGSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>B.Sc (Hons.)(AG)</b>
                  </a>
                  </Link>
                  <Link to = "/BHMSSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>BHMS</b>
                  </a>
                  </Link>
                  <Link to = "/UTDSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>UTD</b>
                  </a>
                  </Link>
                  <Link to = "/ParamedicalSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>Paramedical</b>
                  </a>
                  </Link>
                  <Link to = "/PolytechnicEngineeringSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}> Polytechnic (Engineering)</b>
                  </a>
                  </Link>
                  <Link to = "/BLibIScSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>B.Lib.I.Sc.</b>
                  </a>
                  </Link>
                  <Link to = "/BacheloroflawsSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>Bachelor Of Laws (LL.B.)</b>
                  </a>
                  </Link>
                  <Link to = "/BScHMCSSyllabus">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>B.Sc.[HMCS]</b>
                  </a>
                  </Link>
                 
                </div>
              </li>
          </ul>
        </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter12}
                onMouseLeave={handleMouseLeave12}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  style={{  color: " #dd2d4a", fontSize: "15px" }}
                >
                  <b>NIRF</b>
                </a>
                <div className={`dropdown-menu ${isOpen12 ? "show" : ""}`}>
                <Link to = "/Nirf/Engenerring">
                  <a className="dropdown-item" href="#" style={{  fontSize: "inherit" }}>
                    {" "}
                   <b style={{ color: "black" }}>Engineering</b>
                 </a>
                  </Link>
                  <Link to = "/Nirf/Agriculter">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>Agriculture</b>
                  </a>
                  </Link>
                  <Link to = "/Nirf/Pharamacy">
                  <a className="dropdown-item" href="#"  style={{  fontSize: "inherit" }}>
                    <b style={{ color: "black" }}>Pharmacy</b>
                  </a>
                  </Link>
                 
                </div>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}
              >
                <Link to="/eventss"><a
                  className="nav-link dropdown-toggle"
                  href="#"
                  style={{  color: " #dd2d4a", fontSize: "15px" }}
                >
                  <b>Events</b>
                </a></Link>
             
              </li>

            

             
              <Link to="/entrance/form">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "#4B0082",
                      animation: "blink 1s infinite",
                      fontSize: "15px",
                    }}
                  >
                    <b> Entrance Exam</b>
                  </a>
                  <style>
                    {`
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }
  `}
                  </style>
                </li>
              </Link>
            </ul>
          </div>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
            <Link to="/">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" >
                  <b>Home</b>
                </a>
              </li>
            </Link>

            <li
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter8}
              onMouseLeave={handleMouseLeave8}
            >
              <a className="nav-link dropdown-toggle" href="#" >
                <b>About</b>
              </a>

              <div className={`dropdown-menu ${isOpen8 ? "show" : ""}`}>
                <a className="dropdown-item small-font" href="#">
                  History & Milestones
                </a>
                <Link to = "/vision-mission">
                <a className="dropdown-item small-font" href="#">
                  Vision & Mission
                </a>
                </Link>
                <a className="dropdown-item small-font" href="#">
                  Leadership
                </a>
                <a className="dropdown-item small-font" href="#">
                  Committee & Cell
                </a>
                <a className="dropdown-item small-font" href="#">
                  MOU & Collaboration
                </a>
                <a className="dropdown-item small-font" href="#">
                  Statues
                </a>
                <a className="dropdown-item small-font" href="#">
                  Best Practices
                </a>
                <a className="dropdown-item small-font" href="#">
                  Press Media
                </a>
              </div>
            </li>

            <li
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter9}
              onMouseLeave={handleMouseLeave9}
            >
              <a className="nav-link dropdown-toggle" href="#" >
                <b>Examination</b>
              </a>
              <div className={`dropdown-menu ${isOpen9 ? "show" : ""}`}>
                <a className="dropdown-item small-font" href="#">
                  Results
                </a>
                <a className="dropdown-item small-font" href="#">
                  Apply for Exam
                </a>
                <a className="dropdown-item small-font" href="#">
                  Exam Schedule
                </a>
                <a className="dropdown-item small-font" href="#">
                  {" "}
                  Exam Notification
                </a>

                <a className="dropdown-item small-font" href="#">
                  {" "}
                  Apply for Certificates
                </a>
              </div>
            </li>

            <li
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter10}
              onMouseLeave={handleMouseLeave10}
            >
              <a className="nav-link dropdown-toggle" href="#">
                <b>Research</b>
              </a>
              <div className={`dropdown-menu ${isOpen10 ? "show" : ""}`}>
                <a className="dropdown-item small-font" href="#">
                  Research & Promotion Policy
                </a>
                <a className="dropdown-item small-font" href="#">
                  Doctoral Programs PhD
                </a>
                <a className="dropdown-item small-font" href="#">
                  Centre Of Excellence
                </a>
                <a className="dropdown-item small-font" href="#">
                  Consultancy Services{" "}
                </a>
                <a className="dropdown-item small-font" href="#">
                  MOU & Collaboration
                </a>
                <a className="dropdown-item small-font" href="#">
                  Centre For Development Of Entreprenurship
                </a>
                <a className="dropdown-item small-font" href="#">
                  Best Practices
                </a>
                <a className="dropdown-item small-font" href="#">
                  Press Media
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" >
                <b>Placement</b>
              </a>
            </li>
            <Link to="/contact">
              <li className="nav-item">
                <a className="nav-link" >
                  <b>Contact </b>
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" >
                <b>Campus</b>
              </a>
            </li>
            <Link to="/Epravesh/Student/Register">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{
                      color: "#4B0082",
                    
                      fontSize: "15px",
                    }}
                  >
                    <b> E-Pravesh </b>
                  </a>
                </li>
              </Link>
      

            <Link to="/erp">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "-8%",
                    height: "35px", 
                    width: "60px", 
                  }}
                >
                  <b style={{ margin: "0" }}>Erp</b>
                </button>
              </li>
            </Link>



            <li className="nav-item">
              <button
                type="button"
                className="btn btn-danger"
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "5%",
                  height: "35px", 
                  width: "120px", 
                }}
              >
                <b style={{ margin: "0" }}>ADMISSION</b>
              </button>
            </li>

       
          </ul>
        </div>
      </div>
    </nav>
  </>
  );
}

export default Navbarcontanct;


