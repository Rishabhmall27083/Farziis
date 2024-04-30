

import React from "react";

import { Link } from "react-router-dom";

function BESyllabuspage() {
  return (
    <>
      <style>
        {`
          .ddd {
            margin: 10px auto; /* Center the table */
            padding: 30px;
            overflow-x: auto; /* Allow horizontal scrolling on small screens */
            counter-reset: examples approaches;
            background-color: Gainsboro;
            color: #333;
            font-size: 93.75%;
            line-height: 1.5;
            max-width: 1680px;
          }

          table {
            width: 70%; /* Make the table fill the container */
            border-collapse: collapse; /* Remove default spacing between table cells */
          }

          th, td {
            padding: .5em;
            border: 1px solid #999;
          }

          @media screen and (max-width: 768px) {
            /* Apply responsive styles for screens smaller than 768px */
            .ddd {
              overflow-x: auto;
            }

            table {
              max-width: 100%; /* Allow horizontal scrolling on small screens */
            }
          }
          h2 {
            text-align: center;
            background-color:#14adad;
            // Width : 100%;
            // margin-left:10px;
            border-radius: 25px;
            font-size: 30px; /* Default font size */
            margin: 0; /* Remove default margin */
           
          }
          @media screen and (max-width: 600px) {
            h2 {
                font-size: 18px; /* Adjust font size for smaller screens */
            }
        }
        @media screen and (max-width: 768px) {
          table {
            width: 100%;
          }
          table thead {
            display: none;
          }
          table, table tbody, table tr, table td {
            display: block;
            width: 100%;
          }
          table tr {
            margin-bottom: 15px;
            display: block;
            border: 1px solid #ccc;
          }
          table td {
            text-align: left;
            padding: 10px;
          }
        }
        `}
      </style>
      
      <div className="ddd" style={{ color: "black" }}>
        <h2>B.E. </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Syllabus for Bachelor of engineering</b>
        </h4>{" "}
        <br />
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            As per AICTE Curriculam with effect from academic session 2022-23
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>COURSE</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>BRANCH</b>
                </h6>
              </th>
              <th colSpan={4} scope="colgroup">
                <h6>
                  <b>
                    {" "}
                    SEMESTER <br />
                    (As pre AICTE Curriculum)
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={20} scope="rowgroup">
                B.E.
              </th>
              <th></th>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>1 Year</b>
                </h6>{" "}
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>2 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>3 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>4 Year</b>
                </h6>
              </td>
            </tr>
            <tr>
              <th scope="row">Aeronautical Engineering</th>
              <td>
                {" "}

                <Link to = "/BE1SEM">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                
                <Link to = "/BE2SEM">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/BE3SEM">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                
                <br />
                <Link to = "/BE4SEM">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/BE5SEM">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "/BE6SEM">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/BE7SEM">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "/BE8SEM">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Chemical Engineering</th>
              <td>
                {" "}
                <Link to = "/CA1SEM">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/CA2SEM">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/CA3SEM">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/CA4SEM">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/CA5SEM">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/CA6SEM">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/CA7SEM">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/CA8SEM">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>

            <tr>
              <th scope="row">Civil Engineering</th>
              <td>
                {" "}
                <Link to = "/CI1SEM">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "/CI2SEM">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/CI3SEM">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/CI4SEM">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/CI5SEM">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/CI6SEM">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to = "/CI7SEM">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/CI8SEM">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Computer Science and Engineering</th>
              <td>
                {" "}
                <Link to = "/CSE1SEM">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/CSE2SEM">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/CSE3SEM">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "/CSE4SEM">
                <span>
                
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
               <Link to = "/CSE5SEM">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/CSE6SEM">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
               <Link to = "/CSE7SEM">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/CSE8SEM">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical Engineering</th>
              <td>
                {" "}
                <Link to = "/EE1SEM">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "/EE2SEM">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "/EE3SEM"> 
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to = "/EE4SEM">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "/EE5SEM">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link  to = "/EE6SEM"> 
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to = "/EE7SEM">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link  to = "/EE8SEM"> 
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical and Electronics Engineering</th>
              <td>
                {" "}
                <Link to = "/EEE1SEM">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/EEE2SEM">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link >
              </td>
              <td>
                {" "}
                <Link to = "/EEE3SEM">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/EEE4SEM">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              
              <td>
                {" "}
                <Link to = "/EEE5SEM">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/EEE6SEM">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/EEE7SEM">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/EEE8SEM">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Communication</th>
              <td>
                {" "}
                <Link to ="/EC1SEM">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="/EC2SEM">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="/EC3SEM">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="/EC4SEM">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="/EC5SEM">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="/EC6SEM">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to ="/EC7SEM">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="/EC8SEM">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Instrumentation</th>
              <td>
                {" "}
                <Link to ="/EI1SEM">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="/EI2SEM">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="/EI3SEM">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="/EI4SEM">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                <Link  to ="/EI5SEM">
                {" "}
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="/EI6SEM">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                <Link  to ="/EI7SEM">
                {" "}
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="/EI8SEM">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Information Technology</th>
              <td>
                {" "}
                <Link  to ="/IT1SEM">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="/IT2SEM">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
             
              <td>
                {" "}
                <Link  to ="/IT3SEM">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="/IT4SEM">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to ="/IT5SEM">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="/IT6SEM">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="/IT6SEM">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mechanical Engineering</th>
              <td>
                {" "}
                <Link  to ="/ME1SEM">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="/ME2SEM">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to ="/ME3SEM">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="/ME4SEM">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link  to ="/ME5SEM">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="/ME6SEM">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link  to ="/ME7SEM">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link  to ="/ME8SEM">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mining Engineering</th>
              <td>
                {" "}
                <Link to ="/MIE1SEM">
                <span>
                  {" "}
                  <b> 1 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="/MIE2SEM">
                <span>
                  <b> 2 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="/MIE3SEM">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="/MIE4SEM">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="/MIE5SEM">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="/MIE6SEM">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to ="/MIE7SEM">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to ="/MIE8SEM">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
              
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        <br />
        {/* ================================== */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b>
            {" "}
            Choice Based Credit System(CBCS) with effect from academic session
            2016-17
          </b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>COURSE</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>BRANCH</b>
                </h6>
              </th>
              <th colSpan={4} scope="colgroup">
                <h6>
                  <b>
                    SEMESTER <br />
                    (CBCS)
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={20} scope="rowgroup">
                B.E.
              </th>
              <th></th>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>1 Year</b>
                </h6>{" "}
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>2 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>3 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>4 Year</b>
                </h6>
              </td>
            </tr>
            <tr>
              <th scope="row">Aeronautical Engineering</th>
              <td rowSpan={20} scope="rowgroup">
                <b>
                  {" "}
                 <Link to = "/BECBSC1SEM"> <span> I Semester and</span><br /></Link> 
               <Link to = "/BECBSC2SEM">  <span>II Semester Common to All{" "}</span> </Link>  
                </b>
              </td>
              <td>
                {" "}
                <Link to = "/BEAE3sem">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link >
                <br />
                <Link to = "/BEAE4sem">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/BEAE5sem">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/BEAE6sem">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/BEAE7sem">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/BEAE8sem">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Chemical Engineering</th>

              <td>
                {" "}
                <Link to = "/BECBSCCE3sem">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/BECBSCCE4sem">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/BECBSCCE5sem">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/BECBSCCE6sem">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/BECBSCCE7sem">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/BECBSCCE8sem">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>

            <tr>
              <th scope="row">Civil Engineering</th>

              <td>
                {" "}
                <Link  to = "/BECBSCCIE3sem">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/BECBSCCIE4sem">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/BECBSCCIE5sem">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "/BECBSCCIE6sem">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "/BECBSCCIE7sem">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBECE_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Computer Science and Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCSC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCS_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_CSEr_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_CSEr_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
                
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBECS_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBECS_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
                
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEEC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEE_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EE_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EE_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEE_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEE_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical and Electronics Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEXC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEX_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EX_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EE_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEX_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEX_CBCS8thSEM..pdf">
                <span>
                  <b> 8  Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Communication</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYECC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEC_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EC_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_ECrn_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEC_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEC_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Instrumentation</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEX_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEI_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_IT_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_EIrr_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEI_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEEI_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Information Technology</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ITC%20III%20SEM%20SYLLABUS.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ITC%20IV%20SEM%20SYLLABUS.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_IT_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_ITr_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEIT_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEIT_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mechanical Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMEC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYME_IVr.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_ME_%205th.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/BE_ME_VI_Sem_Syllabus_CBCS.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEME_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEME_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mining Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMIC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMI_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_MI_5thR.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBE_MIr_%206th.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEMI_CBCS7thSEM..pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEMI_CBCS8thSEM..pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>{" "}
        <br />
        <br />
        <br />
        <br />
        {/* {=========================================} */}
        <h5 style={{ textAlign: "center", color: "Brown" }}>
          <b> Non CBCS (for 2014 and 2015 admitted students)</b>
        </h5>
        <br />
        <table style={{ marginLeft: "15%", textAlign: "center" }}>
          <thead style={{ backgroundColor: "SteelBlue" }}>
            <tr>
              <th scope="col">
                <h6>
                  <b>COURSE</b>
                </h6>
              </th>
              <th scope="col">
                <h6>
                  <b>BRANCH</b>
                </h6>
              </th>
              <th colSpan={4} scope="colgroup">
                <h6>
                  <b>
                    SEMESTER
                    <br />
                    (Non-CBCS)
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={20} scope="rowgroup">
                B.E.
              </th>
              <th></th>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>1 Year</b>
                </h6>{" "}
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>2 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>3 Year</b>
                </h6>
              </td>
              <td style={{ backgroundColor: "MediumAquaMarine" }}>
                <h6>
                  <b>4 Year</b>
                </h6>
              </td>
            </tr>
            <tr>
              <th scope="row">Aeronautical Engineering</th>
              <td rowSpan={20} scope="rowgroup">
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CBCS%20SYLLABUS/BEI_CBCS_SYL.pdf">
                <b>
                  {" "}
                  I Semester and II Semester <br /> Common to All{" "}
                </b>
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AERO.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AER_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
             
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AEV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/AEVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYAE_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYAE_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Chemical Engineering</th>

              <td>
                {" "}
                <Link to ="https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCH_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBECM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CMV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CMVIS.pdf">
                <span>

                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCM_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCH_VIII.pdf">
                <span>

                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>

            <tr>
              <th scope="row">Civil Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCE_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CE4SEM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CEV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CEVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCE_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCE_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Computer Science and Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCSE_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CSE4.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CSEV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/CSVISY.pdf" >
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCS_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYCS_VIII.pdf" >
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEE_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEE_III.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EEV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EEVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEE_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEE_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electrical and Electronics Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEX_III.pdf"> 
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EX4SEM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EXV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EXVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEX_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEX_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Communication</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEC_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EC4SEM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = " https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ECV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ECVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = " https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEC_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEC_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Electronics and Instrumentation</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEI_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EI4SEM.pdf"></Link>
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EIV.pdf"></Link>
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/EIVISY.pdf"></Link>
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEI_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYEI_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Information Technology</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYIT_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/BE_IV/%20SY_BEIT_IV.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ITV.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ITVISY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYIT_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYIT_VIIIr.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mechanical Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYME_III.pdf">
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />

                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ME4SEM.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/ME.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/MEVISYL.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYME_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYME_VIII.pdf   ">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Mining Engineering</th>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMIN_III.pdf"> 
                <span>
                  {" "}
                  <b> 3 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYBEMIN.pdf">
                <span>
                  <b> 4 Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/MIV_SY.pdf">
                <span>
                  {" "}
                  <b> 5 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/MIVI_SY.pdf">
                <span>
                  <b> 6 Sem</b>
                </span>{" "}
                </Link>
              </td>

              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMI_VII.pdf">
                <span>
                  {" "}
                  <b> 7 Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/SYMI_VIII.pdf">
                <span>
                  <b> 8 Sem</b>
                </span>{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>


        
      </div>

    
    </>
  );
}

export default BESyllabuspage;
