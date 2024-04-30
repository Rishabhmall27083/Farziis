




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
        <h2>Polytechnic Engineering </h2>
        <br />
        <h4 style={{ textAlign: "center", textDecoration: "underline" }}>
          <b>Syllabus for Polytechnic Engineering</b>
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
                    SEMESTER
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={20} scope="rowgroup">
              DIPLOMA ENGINEERING
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
              <th scope="row">Chemical Engineering</th>
              <td rowSpan={20}>
                {" "}
                <span>
                  {" "}
                  <b><Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/POLY%20SSS.pdf"><span>Common to all I Sem</span> </Link> 
                  <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/syllabus%202023-24/POLY%20SSS.pdf"><span>&  II Sem </span></Link>  </b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b> </b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>

            <tr>
              <th scope="row">Civil Engineering</th>
          
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b> </b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>

            <tr>
              <th scope="row">Computer Science and Engineering</th>
          
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b> </b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>

            <tr>
              <th scope="row">Electrical Engineering</th>
          
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b> </b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>


            <tr>
              <th scope="row">Mechanical Engineering</th>
          
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b> </b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>
            

           
              
            
          </tbody>
        </table>   <br/><br/> <br/>

{/* {===============================================} */}

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
                    SEMESTER
                  </b>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={20} scope="rowgroup">
              DIPLOMA ENGINEERING
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
              <th scope="row">Chemical Engineering</th>
              <td rowSpan={20}>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/POLYR.pdf">
                <span>
                  {" "}
                  <b>Common to all I Sem & Sem </b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/DEngg_III/SYDCM_III.pdf">
                <span>
                  {" "}
                  <b>III Sem </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/DEngg_IV/SYDCM_IV.pdf">
                <span>
                  <b>IV Sem </b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/SYDIP_5th/SYDIP_CM_5th.pdf">
                <span>
                  {" "}
                  <b> V Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/SY_DIP_6th/SYDIP_CM_6th.pdf">
                <span>
                  <b>VI Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>

            <tr>
              <th scope="row">Civil Engineering</th>
          
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/DEngg_III/SYDCE_III.pdf">
                <span>
                  {" "}
                  <b>III Sem </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/DEngg_IV/SYDCE_IV.pdf">
                <span>
                  <b>IV Sem </b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/SYDIP_5th/SYDIP_CE_5th.pdf">
                <span>
                  {" "}
                  <b>V Sem </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/SY_DIP_6th/SYDIP_CE_6th.pdf">
                <span>
                  <b>VI Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>

            <tr>
              <th scope="row">Computer Science and Engineering</th>
          
              <td>
                {" "}

                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/DEngg_III/SYDCS_III.pdf">
                <span>
                  {" "}
                  <b>III Sem </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/DEngg_IV/SYDCS_IV.pdf">
                <span>
                  <b> IV Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/SYDIP_5th/SYDIP_CSE_5th.pdf">
                <span>
                  {" "}
                  <b>V Sem </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/SY_DIP_6th/SYDIP_CSE_6th.pdf">
                <span>
                  <b>V Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>

            <tr>
              <th scope="row">Electrical Engineering</th>
          
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/DEngg_III/SYDEE_III.pdf">
                <span>
                  {" "}
                  <b>III Sem </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/DEngg_IV/SYDEE_IV.pdf">
                <span>
                  <b>IV Sem </b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/SYDIP_5th/SYDIP_EE_5th.pdf">
                <span>
                  {" "}
                  <b>V Sem </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/SY_DIP_6th/SYDIP_EE_6th.pdf">
                <span>
                  <b>VI Sem</b>
                </span>{" "}
                </Link>
               
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>


            <tr>
              <th scope="row">Mechanical Engineering</th>
          
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/DEngg_III/SYDME_III.pdf">
                <span>
                  {" "}
                  <b>III Sem </b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/DEngg_IV/SYDME_IV.pdf">
                <span>
                  <b>IV Sem </b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/SYDIP_5th/SYDIP_MEr_5th.pdf">
                <span>
                  {" "}
                  <b> V Sem</b>
                </span>{" "}
                </Link>
                <br />
                <Link to = "https://www.sssutms.co.in/cms/Areas/Website/Files/Link/SYLLABUS/POLY(ENGINEERING)/SY_DIP_6th/SYDIP_ME_6th.pdf">
                <span>
                  <b>VI Sem</b>
                </span>{" "}
                </Link>
              </td>
              <td>
                {" "}
                <span>
                  {" "}
                  <b> </b>
                </span>{" "}
                <br />
                <span>
                  <b></b>
                </span>{" "}
              </td>
            </tr>
            

           
              
            
          </tbody>
        </table>


        
      </div>

    
    </>
  );
}

export default BESyllabuspage;

