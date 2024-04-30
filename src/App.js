import React, { useEffect } from "react";
import Signup from '././components/Register&Login/Signup';
import Signin from '././components/Register&Login/Signin';
import { Routes, Route, Navigate } from 'react-router-dom';
import Course from '././components/Register&Login/Course';
import Erp from './components/Register&Login/Erp';
import Registration from './AdminComponent/HodMainDetails';
import Registrationn from "./AdminComponent/StudentMainDetails"
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

/*--------------------STUDENT Routes----------------------------------------------*/
import StudentDashboardHome from './components/Register&Login/StudentDashboardHome';
import StudentMainDetails from './AdminComponent/StudentMainDetails';
import StudentHome from './components/Register&Login/StdentHome';
import StudentDashboard from './AdminComponent/StudentDashboard';
import StudentWaiting from './components/Register&Login/StudentWaiting';
import StudentVerify from './AdminComponent/StudentVerify';
import EnrollementForm from './AdminComponent/EnrollementForm';
import OnlyHeader from './AdminComponent/OnlyHeader';
import Success from './AdminComponent/Payment/Success';
import Failure from './AdminComponent/Payment/Failure';
import PaymentPage from './AdminComponent/Payment/PaymentPage';
import StudentAllDetail from './components/Register&Login/StudentAllDetail';

/*-------------------- Website Main Page Routes----------------------------------------------*/
import MainPage from './HomePage/MainPage';

/*--------------------HOD Routes----------------------------------------------*/
import HodDashboard from './AdminComponent/HodDashboard';
import HodMainDetails from './AdminComponent/HodMainDetails';
import HodSignUp from './AdminComponent/HodSignup';
import HodSignin from './AdminComponent/HodSignin';
import Dashboard from './AdminComponent/HodMainDas';
import Pending from './AdminComponent/SudentPending';
import VerifyDetailed from './AdminComponent/VerifyDetailed';

/*--------------------Admin Routes----------------------------------------------*/
import AdminLogin from './Main_Admin/Masters/Registered_Login/Admin_login';
import AdminDashboard from './Main_Admin/Masters/Admin_Dashboard/AdminDashboard';
import EnrollementG from './Main_Admin/Masters/EnrollmentG';
import Branchmapping from "./Main_Admin/Masters/Branchmapping"
import Centermaster from "./Main_Admin/Masters/Centermaster"
import SpecializationMaster from './Main_Admin/Masters/SpecializationMaster';
import SpecializationSubjectMapping from "./Main_Admin/Masters/SpecializationSubjectMapping"
import SpecializationTypeMaster from "./Main_Admin/Masters/SpecializationTypeMaster"
import SubjectHeaderInsert from "./Main_Admin/Masters/SubjectHeaderInsert"
import UploadSubjectMasterFromExcelData from "./Main_Admin/Masters/UploadSubjectMasterFromExcelData"
import CreateCollege from "./Main_Admin/Masters/CreateCollege"
import AdmissionSessionMaster from "./Main_Admin/Masters/AdmissionSessionMaster"
import FacultyMaster from "./Main_Admin/Masters/FacultyMaster"
import DepartmentMaster from "./Main_Admin/Masters/DepartmentMaster"
import CourseType from "./Main_Admin/Masters/CourseType"
import CourseMaster from "./Main_Admin/Masters/CourseMaster"
import BranchMaster from "./Main_Admin/Masters/BranchMaster"
import SubBranchMaster from "./Main_Admin/Masters/SubBranchMaster"
import CourseGroupMaster from "./Main_Admin/Masters/CourseGroupMaster"
import AdmissionOpen from "./Main_Admin/Masters/AdmissionOpen"
import ReservationMaster from "./Main_Admin/Masters/ReservationMaster"
import CreateCounsellingRound from "./Main_Admin/Masters/CreateCounsellingRound"
import LastExamSubjectGroup from "./Main_Admin/Masters/LastExamSubjectGroup"
import GradePointMaster from "./Main_Admin/Masters/GradePointMaster"
import SubjectMasterExcelDownload from "./Main_Admin/Masters/SubjectMasterExcelDownload"
import SubjectMasterPaperWise from "./Main_Admin/Masters/SubjectMasterPaperWise"
import SubGroupMaster from "./Main_Admin/Masters/SubGroupMaster"
import TransferSubject from "./Main_Admin/Masters/TransferSubject"
import TransferSubjectGroup from "./Main_Admin/Masters/TransferSubjectGroup"
import ProgramScheduling from "./Main_Admin/Masters/ProgramScheduling"
import ErpDashboard from './Main_Admin/Masters/ErpDashboard';
import Search from './Main_Admin/Masters/Search';
import Notification from './HomePage/Notification';
import Off from './HomePage/Off.js';
import Not from './HomePage/Not.js';
import Imp from './HomePage/Imp.js';
import Edetails from './HomePage/Edetails.jsx'
import Notice from './HomePage/Notice.js';
import EnrolledStudentlist from "./Main_Admin/Masters/EnrolledStudent_list";
import EnrollementStudentSearch from "./Main_Admin/Masters/EnrolledStudent_search";
import StudentRegistrationList from "./Main_Admin/Masters/StudentRegistrationList"
import Admin_Pending from "./Main_Admin/Masters/Admin_Pending.jsx";
import TotalFeePaid from "./Main_Admin/Masters/TotalFeePaid"
import TotalRegistered from "./Main_Admin/Masters/TotalRegistered"
import TotalEnrolled from "./AdminComponent/TotalEnrolled";
import TotalSession from "./AdminComponent/TotalSession";
import TotalRegisStdtHod from "./AdminComponent/HodRegistStdt";
import TotalEnrolledAdmin from "./Main_Admin/Masters/AdminTotalEnrollStdt";
import AdminStdtSearch from "./Main_Admin/Masters/AdminStdtSearch";
import AdminUpdtStdt_Detail from "./Main_Admin/Masters/AdminUpdtStdt_Detail";
import AdminUpdateAllDetail from "./Main_Admin/Masters/AdminUpdateAllDetail";
import AdminUpdate_Documents from "./Main_Admin/Masters/AdminUpdate_Documents";
import AdminDocumentSearch from "./Main_Admin/Masters/AdminDocumentSearch";
import Contactpage from './Contactpage';
import BackgroundPage from './Navbarr/BackgroundPage';
import Institutepage from './Navbarr/Institutepage';
import PromotingSociety from './Navbarr/PromotingSociety';
import VisionMission from './Navbarr/VisionMission';
import CoreValues from './Navbarr/CoreValues';
import BestPractices from './Navbarr/BestPractices';
import EntranceExamAlert from './Navbarr/Examination/EntranceExamAlert';
import ExamNotifications from './Navbarr/Examination/ExamNotifications';
import Result from './Navbarr/Examination/Result';
import ExamSchedule from './Navbarr/Examination/ExamSchedule';
import Interface from './Navbarr/Examination/Interface';
import PhdPage from './Navbarr/Academic/PhdPage';
import AcademicCalendar from './Navbarr/Academic/AcademicCalendar';
import Scholarship from './Navbarr/Academic/Scholarship';
import ConstituentUnits from './Navbarr/Academic/ConstituentUnits';
import HEIHandbook from './Navbarr/Academic/HEIHandbook';
import MandatoryDisclosures from './Navbarr/Academic/MandatoryDisclosures';
import Director from './Navbarr/Research/Director';
import RDCell from './Navbarr/Research/RDCell';
import ConsultancyServices from './Navbarr/Research/ConsultancyServices';
import TotalFeePaidHod from "./Main_Admin/Masters/TotalFeePaidHod";
import AdminPenSearch from "./Main_Admin/Masters/AdminPenSearch.jsx";
import AdminVeriStdSearch from "./Main_Admin/AdminVerified_Std_Search.jsx";
import Chancellor from "./Navbarr/UniversityOfficeal/Chancellor.jsx";
import ViceChancellorr from "./Navbarr/UniversityOfficeal/ViceChancellorr.jsx";
import Registrar from "./Navbarr/UniversityOfficeal/Registrar.jsx";
import DeputyRegistrar from "./Navbarr/UniversityOfficeal/DeputyRegistrar.jsx";
import SearchPen from "./Main_Admin/Masters/SearchPen.jsx";
import SearchVer from "./Main_Admin/Masters/SearchVer.jsx";
import Admissionstatus from "./Main_Admin/Masters/Admissionstatus.jsx";
import Adminser from "./Main_Admin/Masters/Adminser.jsx"
import ManualEnrol_G from "./Main_Admin/Masters/ManualEnrol_G.jsx";
import Paym from "./Main_Admin/Masters/Admin_Dashboard/Paym.jsx";
import Paymen from "./Main_Admin/Masters/Admin_Dashboard/Paymen.jsx";
import TermsConditions from "./HomePage/Footer/TermsConditions.jsx";
import PrivacyPolicy from "./HomePage/Footer/PrivacyPolicy.jsx";
import RefoundCancellation from "./HomePage/Footer/RefoundCancellation.jsx";
import Admission_Slip from "./Main_Admin/Masters/Admission_Slip.jsx"
import Admission_Slip_Search from "./Main_Admin/Masters/Admission_Slip_Search.jsx";
import { useNavigate } from "react-router-dom";
import NIRF_Eng from "./HomePage/NIRF_Eng.jsx";
import NIRF_Agri from "./HomePage/NIRF_Agri.jsx";
import NIRF_Phar from "./HomePage/NIRF_Phr.jsx";
import Grievance from "./HomePage/Gravience.jsx";
import Bonafied_Certificate from "./Main_Admin/Masters/Bonafied_Certificate.jsx";
import Bonafied_Search from "./Main_Admin/Masters/Bonafied_Certificate_Search.jsx";
import EntranceForm from "./ERP/Student_Erp/EntranceForm.jsx";
import Entrance_Payment from "./ERP/Student_Erp/Entrance_Payment.jsx";
import Entrance_Success from "./ERP/Student_Erp/Entrance_Success.jsx";
import Entrance_Slip from "./Main_Admin/Masters/Admin_Dashboard/Admin_Entrance/Entrance_Slip.jsx";
import E_Pravesh_Course from "./E-Pravesh/Student_E-pravesh/E-Courses.jsx";
import Contact from "./HomePage/Footer/Contact.jsx";
import Wday from "./Events/Wday.jsx";
import BESyllabuspage from "./Syllabus/BESyllabuspage.jsx";
import PharmacySyllabus from "./Syllabus/PharmacySyllabus.jsx";
import MTechSyllabus from "./Syllabus/MTechSyllabus.jsx";
import EducationSyllabus from "./Syllabus/EducationSyllabus.jsx";
import BHMCTSyllabus from "./Syllabus/BHMCTSyllabus.jsx";
import MBASyllabus from "./Syllabus/MBASyllabus.jsx";
import MCASyllabus from "./Syllabus/MCASyllabus.jsx";
import PhysicalEducationSyllabus from "./Syllabus/PhysicalEducationSyllabus.jsx";
import BScHonsAGSyllabus from "./Syllabus/BScHonsAGSyllabus.jsx";
import BHMSSyllabus from "./Syllabus/BHMSSyllabus.jsx";
import UTDSyllabus from "./Syllabus/UTDSyllabus.jsx";
import ParamedicalSyllabus from "./Syllabus/ParamedicalSyllabus.jsx";
import PolytechnicEngineeringSyllabus from "./Syllabus/PolytechnicEngineeringSyllabus.jsx";
import BLibIScSyllabus from "./Syllabus/BLibIScSyllabus.jsx";
import BacheloroflawsSyllabus from "./Syllabus/BacheloroflawsSyllabus.jsx";
import BScHMCSSyllabus from "./Syllabus/BScHMCSSyllabus.jsx";
import BE1sem from "./SyllabusPDF/BE1sem.jsx";
import BE2sem from "./SyllabusPDF/BE2sem.jsx";
import BE3sem from "./SyllabusPDF/BE3sem.jsx";
import BE4sem from "./SyllabusPDF/BE4sem.jsx";
import BE5sem from "./SyllabusPDF/BE5sem.jsx";
import BE6sem from "./SyllabusPDF/BE6sem.jsx";
import CA1sem from "./SyllabusPDF/CA1sem.jsx";
import CA2sem from "./SyllabusPDF/CA2sem.jsx";
import BE7sem from "./SyllabusPDF/BE7sem.jsx";
import BE8sem from "./SyllabusPDF/BE8sem.jsx";
import CA3sem from "./SyllabusPDF/CA3sem.jsx";
import CA4sem from "./SyllabusPDF/CA4sem.jsx";
import CA5sem from "./SyllabusPDF/CA5sem.jsx";
import CA6sem from "./SyllabusPDF/CA6sem.jsx";
import CA7sem from "./SyllabusPDF/CA7sem.jsx";
import CA8sem from "./SyllabusPDF/CA8sem.jsx";
import Ci1sem from "./SyllabusPDF/Ci1sem.jsx";
import Ci2sem from "./SyllabusPDF/Ci2sem.jsx";
import Ci3sem from "./SyllabusPDF/Ci3sem.jsx";
import Ci4sem from "./SyllabusPDF/Ci4sem.jsx";
import Ci5sem from "./SyllabusPDF/Ci5sem.jsx";
import Ci6sem from "./SyllabusPDF/Ci6sem.jsx";
import Ci7sem from "./SyllabusPDF/Ci7sem.jsx";
import Ci8sem from "./SyllabusPDF/Ci8sem.jsx";
import CSE1sem from "./SyllabusPDF/CSE1sem.jsx";
import CSE2sem from "./SyllabusPDF/CSE2sem.jsx";
import CSE3sem from "./SyllabusPDF/CSE3sem.jsx";
import CSE4sem from "./SyllabusPDF/CSE4sem.jsx";
import CSE5sem from "./SyllabusPDF/CSE5sem.jsx";
import CSE6sem from "./SyllabusPDF/CSE6sem.jsx";
import CSE7sem from "./SyllabusPDF/CSE7sem.jsx";
import CSE8sem from "./SyllabusPDF/CSE8sem.jsx";
import EE1sem from "./SyllabusPDF/EE1sem.jsx";
import EE2sem from "./SyllabusPDF/EE2sem.jsx";
import EE3sem from "./SyllabusPDF/EE3sem.jsx";
import EE4sem from "./SyllabusPDF/EE4sem.jsx";
import EE5sem from "./SyllabusPDF/EE5sem.jsx";
import EE6sem from "./SyllabusPDF/EE6sem.jsx";
import EE7sem from "./SyllabusPDF/EE7sem.jsx";
import EE8sem from "./SyllabusPDF/EE8sem.jsx";
import EEE1sem from "./SyllabusPDF/EEE1sem.jsx";
import EEE2sem from "./SyllabusPDF/EEE2sem.jsx";
import EEE3sem from "./SyllabusPDF/EEE3sem.jsx";
import EEE4sem from "./SyllabusPDF/EEE4sem.jsx";
import EEE5sem from "./SyllabusPDF/EEE5sem.jsx";
import EEE6sem from "./SyllabusPDF/EEE6sem.jsx";
import EEE7sem from "./SyllabusPDF/EEE7sem.jsx";
import EEE8sem from "./SyllabusPDF/EEE8sem.jsx";
import EC1sem from "./SyllabusPDF/EC1sem.jsx";
import EC2sem from "./SyllabusPDF/EC2sem.jsx";
import EC3sem from "./SyllabusPDF/EC3sem.jsx";
import EC4sem from "./SyllabusPDF/EC4sem.jsx";
import EC5sem from "./SyllabusPDF/EC5sem.jsx";
import EC6sem from "./SyllabusPDF/EC6sem.jsx";
import EC7sem from "./SyllabusPDF/EC7sem.jsx";
import EC8sem from "./SyllabusPDF/EC8sem.jsx";
import EI1sem from "./SyllabusPDF/EII1sem.jsx";
import EI2sem from "./SyllabusPDF/EI2sem.jsx";
import EI3sem from "./SyllabusPDF/EI3sem.jsx";
import EI4sem from "./SyllabusPDF/EI4sem.jsx";
import EI5sem from "./SyllabusPDF/EI5sem.jsx";  
import EI6sem from "./SyllabusPDF/EI6sem.jsx";
import EI7sem from "./SyllabusPDF/EI7sem.jsx";
import EI8sem from "./SyllabusPDF/EI8sem.jsx";
import EII1sem from "./SyllabusPDF/EII1sem.jsx";
import IT1sem from "./SyllabusPDF/IT1sem.jsx";
import IT2sem from "./SyllabusPDF/IT2sem.jsx";
import IT3sem from "./SyllabusPDF/IT3sem.jsx";
import IT4sem from "./SyllabusPDF/IT4sem.jsx";
import IT5sem from "./SyllabusPDF/IT5sem.jsx";
import IT6sem from "./SyllabusPDF/IT6sem.jsx";
import IT7sem from "./SyllabusPDF/IT7sem.jsx";
import IT8sem from "./SyllabusPDF/IT8sem.jsx";
import ME1sem from "./SyllabusPDF/ME1sem.jsx";
import ME2sem from "./SyllabusPDF/ME2sem.jsx";
import ME3sem from "./SyllabusPDF/ME3sem.jsx";
import ME4sem from "./SyllabusPDF/ME4sem.jsx";
import ME5sem from "./SyllabusPDF/ME5sem.jsx";
import ME6sem from "./SyllabusPDF/ME6sem.jsx";
import ME7sem from "./SyllabusPDF/ME7sem.jsx";
import ME8sem from "./SyllabusPDF/ME8sem.jsx";
import MIE1sem from "./SyllabusPDF/MIE1sem.jsx";
import MIE2sem from "./SyllabusPDF/MIE2sem.jsx";
import MIE3sem from "./SyllabusPDF/MIE3sem.jsx";
import MIE4sem from "./SyllabusPDF/MIE4sem.jsx";
import MIE5sem from "./SyllabusPDF/MIE5sem.jsx";
import MIE6sem from "./SyllabusPDF/MIE6sem.jsx";
import MIE7sem from "./SyllabusPDF/MIE7sem.jsx";
import MIE8sem from "./SyllabusPDF/MIE8sem.jsx";
import CBSCSemster1 from "./SyllabusPDF/BECBSE/CBSCSemster1.jsx";
import CBSCSemster2 from "./SyllabusPDF/BECBSE/CBSCSemster2.jsx";
import CBSCAE3sem from "./SyllabusPDF/BECBSE/CBSCAE3sem.jsx";
import CBSCAE4sem from "./SyllabusPDF/BECBSE/CBSCAE4sem.jsx";
import CBSCAE5sem from "./SyllabusPDF/BECBSE/CBSCAE5sem.jsx";
import CBSCAE6sem from "./SyllabusPDF/BECBSE/CBSCAE6sem.jsx";
import CBSCAE7sem from "./SyllabusPDF/BECBSE/CBSCAE7sem.jsx";
import CBSCAE8sem from "./SyllabusPDF/BECBSE/CBSCAE8sem.jsx";
import CBSCCE3sem from "./SyllabusPDF/BECBSE/CBSCCE3sem.jsx";
import CBSCCE4sem from "./SyllabusPDF/BECBSE/CBSCCE4sem.jsx";
import CBSCCE5sem from "./SyllabusPDF/BECBSE/CBSCCE5sem.jsx";
import CBSCCE6sem from "./SyllabusPDF/BECBSE/CBSCCE6sem.jsx";
import CBSCCE7sem from "./SyllabusPDF/BECBSE/CBSCCE7sem.jsx";
import CBSCCE8sem from "./SyllabusPDF/BECBSE/CBSCCE8sem.jsx";
import CBSCCIE3sem from "./SyllabusPDF/BECBSE/CBSCCIE3sem.jsx";
import CBSCCIE4sem from "./SyllabusPDF/BECBSE/CBSCCIE4sem.jsx";
import CBSCCIE5sem from "./SyllabusPDF/BECBSE/CBSCCIE5sem.jsx";
import CBSCCIE6sem from "./SyllabusPDF/BECBSE/CBSCCIE6sem.jsx";
import CBSCCIE7sem from "./SyllabusPDF/BECBSE/CBSCCIE7sem.jsx";
import CBSCCIE8sem from "./SyllabusPDF/BECBSE/CBSCCIE8sem.jsx";
import BESchema from "./Scheme/BESchema.jsx";
import PharmacySchema from "./Scheme/PharmacySchema.jsx";
import MtechScheme from "./Scheme/MtechScheme.jsx";
import BHMCTSchemee from "./Scheme/BHMCTScheme.jsx";
import MBAScheme from "./Scheme/MBAScheme.jsx";
import MCAScheme from "./Scheme/MCAScheme.jsx";
import EducationScheme from "./Scheme/EducationScheme.jsx";
import PhysicalEducationScheme from "./Scheme/PhysicalEducationScheme.jsx";
import BScHonsAg from "./Scheme/BScHonsAg.jsx";
import BHMSScheme from "./Scheme/BHMSScheme.jsx";
import UTDScheme from "./Scheme/UTDScheme.jsx";
import ParamedicalScheme from "./Scheme/ParamedicalScheme.jsx";
import PolytechniEngineering from "./Scheme/PolytechniEngineering.jsx";
import BLibIScScheme from "./Scheme/BLibIScScheme.jsx";
import BachelorofLawsScheme from "./Scheme/BachelorofLawsScheme.jsx";
import BScHMCSScheme from "./Scheme/BScHMCSScheme.jsx";




function App() {
  const location = useLocation();
  const navigate = useNavigate();
  function isAuthenticated() {
    const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
    const hodData = JSON.parse(sessionStorage.getItem("currentUser"));
    const AdminData = JSON.parse(sessionStorage.getItem("Admin"));
    if (userData || hodData || AdminData) {
      return true
    }
    return false;
    // const accessToken = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("access-token="));
    // return accessToken ? true : false;
  }
  function PrivateRoute({ element, ...rest }) {
    if (isAuthenticated()) {
      return element;
    } else {
      return <Navigate to={`/erp`} />;
    }
  }
  useEffect(() => {
    // console.log("Location changed:", location.pathname);
  }, [location]);
  // useEffect(() => {
  //   const logoutTimer = setTimeout(() => {
  //     sessionStorage.clear();
  //     navigate('/erp');
  //   }, 20 * 60 * 1000);
  //   return () => clearTimeout(logoutTimer);
  // }, []);

  return (
    <>
      <Routes>
{/* ======================= Syllabus ============================== */}

<Route path="/BESyllabuspage" element={<BESyllabuspage />} />
<Route path="/PharmacySyllabus" element={<PharmacySyllabus/>} />
<Route path="/M.TechSyllabus" element={<MTechSyllabus/>} />
<Route path="/EducationSyllabus" element={<EducationSyllabus/>} />
<Route path="/BHMCTSyllabus" element={<BHMCTSyllabus />} />
<Route path="/MBASyllabus" element={<MBASyllabus />} />
<Route path="/MCASyllabus" element={<MCASyllabus />} />
<Route path="/PhysicalEducationSyllabus" element={<PhysicalEducationSyllabus/>} />
<Route path="/BScHonsAGSyllabus" element={<BScHonsAGSyllabus/>} />
<Route path="/BHMSSyllabus" element={<BHMSSyllabus/>} />
<Route path="/UTDSyllabus" element={<UTDSyllabus/>} />
<Route path="/ParamedicalSyllabus" element={<ParamedicalSyllabus/>} />
<Route path="/PolytechnicEngineeringSyllabus" element={<PolytechnicEngineeringSyllabus/>} />
<Route path="/BLibIScSyllabus" element={<BLibIScSyllabus/>} />
<Route path="/BacheloroflawsSyllabus" element={<BacheloroflawsSyllabus/>} />
<Route path="/BScHMCSSyllabus" element={<BScHMCSSyllabus/>} />

              {/* //////////////     BE       ///////////// */}

{/* {====================  Aeronautical Engineering PDF  =====================} */}

<Route path="/BE1SEM" element={<BE1sem/>} />
<Route path="/BE2SEM" element={<BE2sem/>} />
<Route path="/BE3SEM" element={<BE3sem/>} />
<Route path="/BE4SEM" element={<BE4sem/>} />
<Route path="/BE5SEM" element={<BE5sem/>} />
<Route path="/BE6SEM" element={<BE6sem/>} />
<Route path="/BE7SEM" element={<BE7sem/>} />
<Route path="/BE8SEM" element={<BE8sem/>} />

{/* {====================  Chemical Engineeringg PDF  =====================} */}

<Route path="/CA1SEM" element={<CA1sem/>} />
<Route path="/CA2SEM" element={<CA2sem/>} />
<Route path="/CA3SEM" element={<CA3sem/>} />
<Route path="/CA4SEM" element={<CA4sem/>} />
<Route path="/CA5SEM" element={<CA5sem/>} />
<Route path="/CA6SEM" element={<CA6sem/>} />
<Route path="/CA7SEM" element={<CA7sem/>} />
<Route path="/CA8SEM" element={<CA8sem/>} />

{/* {====================  Civil Engineering PDF  =====================} */}

<Route path="/CI1SEM" element={<Ci1sem/>} />
<Route path="/CI2SEM" element={<Ci2sem/>} />
<Route path="/CI3SEM" element={<Ci3sem/>} />
<Route path="/CI4SEM" element={<Ci4sem/>} />
<Route path="/CI5SEM" element={<Ci5sem/>} />
<Route path="/CI6SEM" element={<Ci6sem/>} />
<Route path="/CI7SEM" element={<Ci7sem/>} />
<Route path="/CI8SEM" element={<Ci8sem/>} />

{/* {====================  Computer Science and Engineering PDF  =====================} */}

<Route path="/CSE1SEM" element={<CSE1sem/>} />
<Route path="/CSE2SEM" element={<CSE2sem/>} />
<Route path="/CSE3SEM" element={<CSE3sem/>} />
<Route path="/CSE4SEM" element={<CSE4sem/>} />
<Route path="/CSE5SEM" element={<CSE5sem/>} />
<Route path="/CSE6SEM" element={<CSE6sem/>} />
<Route path="/CSE7SEM" element={<CSE7sem/>} />
<Route path="/CSE8SEM" element={<CSE8sem/>} />

{/* {===================  Electrical Engineering PDF  ============================== } */}

<Route path="/EE1SEM" element={<EE1sem/>} />
<Route path="/EE2SEM" element={<EE2sem/>} />
<Route path="/EE3SEM" element={<EE3sem/>} />
<Route path="/EE4SEM" element={<EE4sem/>} />
<Route path="/EE5SEM" element={<EE5sem/>} />
<Route path="/EE6SEM" element={<EE6sem/>} />
<Route path="/EE7SEM" element={<EE7sem/>} />
<Route path="/EE8SEM" element={<EE8sem/>} />

{/* {===================  Electrical and Electronics Engineering PDF  ============================== } */}

<Route path="/EEE1SEM" element={<EEE1sem/>} />
<Route path="/EEE2SEM" element={<EEE2sem/>} />
<Route path="/EEE3SEM" element={<EEE3sem/>} />
<Route path="/EEE4SEM" element={<EEE4sem/>} />
<Route path="/EEE5SEM" element={<EEE5sem/>} />
<Route path="/EEE6SEM" element={<EEE6sem/>} />
<Route path="/EEE7SEM" element={<EEE7sem/>} />
<Route path="/EEE8SEM" element={<EEE8sem/>} />

{/* {===================  Electronics and Communication PDF  ============================== } */}

<Route path="/EC1SEM" element={<EC1sem/>} />
<Route path="/EC2SEM" element={<EC2sem/>} />
<Route path="/EC3SEM" element={<EC3sem/>} />
<Route path="/EC4SEM" element={<EC4sem/>} />
<Route path="/EC5SEM" element={<EC5sem/>} />
<Route path="/EC6SEM" element={<EC6sem/>} />
<Route path="/EC7SEM" element={<EC7sem/>} />
<Route path="/EC8SEM" element={<EC8sem/>} />

{/* {===================  Electronics and Instrumentation PDF  ============================== } */}

<Route path="/EI1SEM" element={<EII1sem/>} />
<Route path="/EI2SEM" element={<EI2sem/>} />
<Route path="/EI3SEM" element={<EI3sem/>} />
<Route path="/EI4SEM" element={<EI4sem/>} />
<Route path="/EI5SEM" element={<EI5sem/>} />
<Route path="/EI6SEM" element={<EI6sem/>} />
<Route path="/EI7SEM" element={<EI7sem/>} />
<Route path="/EI8SEM" element={<EI8sem/>} />

{/* {==================== Information Technology PDF =========================} */}

<Route path="/IT1SEM" element={<IT1sem/>} />
<Route path="/IT2SEM" element={<IT2sem/>} />
<Route path="/IT3SEM" element={<IT3sem/>} />
<Route path="/IT4SEM" element={<IT4sem/>} />
<Route path="/IT5SEM" element={<IT5sem/>} />
<Route path="/IT6SEM" element={<IT6sem/>} />
{/* <Route path="/IT7SEM" element={<IT7sem/>} />
<Route path="/IT8SEM" element={<IT8sem/>} /> */}


{/* {==================== Mechanical Engineering PDF =========================} */}

<Route path="/ME1SEM" element={<ME1sem/>} />
<Route path="/ME2SEM" element={<ME2sem/>} />
<Route path="/ME3SEM" element={<ME3sem/>} />
<Route path="/ME4SEM" element={<ME4sem/>} />
<Route path="/ME5SEM" element={<ME5sem/>} />
<Route path="/ME6SEM" element={<ME6sem/>} />
<Route path="/ME7SEM" element={<ME7sem/>} />
<Route path="/ME8SEM" element={<ME8sem/>} />



{/* {==================== Mining Engineering PDF =========================} */}

<Route path="/MIE1SEM" element={<MIE1sem/>} />
<Route path="/MIE2SEM" element={<MIE2sem/>} />
<Route path="/MIE3SEM" element={<MIE3sem/>} />
<Route path="/MIE4SEM" element={<MIE4sem/>} />
<Route path="/MIE5SEM" element={<MIE5sem/>} />
<Route path="/MIE6SEM" element={<MIE6sem/>} />
<Route path="/MIE7SEM" element={<MIE7sem/>} />
<Route path="/MIE8SEM" element={<MIE8sem/>} />

{/* {==================== B.SC(CBCS)  PDF =========================} */}

<Route path="/BECBSC1SEM" element={<CBSCSemster1 />} />
<Route path="/BECBSC2SEM" element={<CBSCSemster2 />} />

{/* {====================  Aeronautical Engineering (CBSE) PDF =========================} */}

<Route path="/BEAE3sem" element={<CBSCAE3sem />} />
<Route path="//BHMCT-SchemeBEAE4sem" element={<CBSCAE4sem />} />
<Route path="/BEAE5sem" element={<CBSCAE5sem />} />
<Route path="/BEAE6sem" element={<CBSCAE6sem />} />
<Route path="/BEAE7sem" element={<CBSCAE7sem />} />
<Route path="/BEAE8sem" element={<CBSCAE8sem />} />

{/* {====================  Chemical Engineering (CBSE) PDF =========================} */}

<Route path="/BECBSCCE3sem" element={<CBSCCE3sem />} />
<Route path="/BECBSCCE4sem" element={<CBSCCE4sem />} />
<Route path="/BECBSCCE5sem" element={<CBSCCE5sem />} />
<Route path="/BECBSCCE6sem" element={<CBSCCE6sem />} />
<Route path="/BECBSCCE7sem" element={<CBSCCE7sem />} />
<Route path="/BECBSCCE8sem" element={<CBSCCE8sem />} />

{/* {====================  Civil Engineering (CBSE) PDF =========================} */}

<Route path="/BECBSCCIE3sem" element={<CBSCCIE3sem />} />
<Route path="/BECBSCCIE4sem" element={<CBSCCIE4sem />} />
<Route path="/BECBSCCIE5sem" element={<CBSCCIE5sem />} />
<Route path="/BECBSCCIE6sem" element={<CBSCCIE6sem />} />
<Route path="/BECBSCCIE7sem" element={<CBSCCIE7sem />} />
<Route path="/BECBSCCIE8sem" element={<CBSCCIE8sem />} />

{/* {====================  Civil Engineering (CBSE) PDF =========================} */}

<Route path="/BECBSCCIE3sem" element={<CBSCCIE3sem />} />
<Route path="/BECBSCCIE4sem" element={<CBSCCIE4sem />} />
<Route path="/BECBSCCIE5sem" element={<CBSCCIE5sem />} />
<Route path="/BECBSCCIE6sem" element={<CBSCCIE6sem />} />
<Route path="/BECBSCCIE7sem" element={<CBSCCIE7sem />} />
<Route path="/BECBSCCIE8sem" element={<CBSCCIE8sem />} />


{/* {==================== Schema =========================} */}

<Route path="/B.E-Scheme" element={<BESchema />} />
<Route path="/Pharmacy-scheme" element={<PharmacySchema />} />
<Route path="/M.Tech-Scheme" element={<MtechScheme />} />
<Route path="/BHMCT-Scheme" element={<BHMCTSchemee />} />
<Route path="/MBA-Scheme" element={<MBAScheme />} />
<Route path="/MCA-Scheme" element={<MCAScheme/>} />
<Route path="/Education-Scheme" element={<EducationScheme/>} />
<Route path="/PhysicalEducation-Scheme" element={<PhysicalEducationScheme/>} />
<Route path="/BscHonsAg-Scheme" element={<BScHonsAg/>} />
<Route path="/BHMS-Scheme" element={<BHMSScheme/>} />
<Route path="/UTD-Scheme" element={<UTDScheme/>} />
<Route path="/Paramedical-Scheme" element={<ParamedicalScheme/>} />
<Route path="/POLYTECHNIC(ENGINEERING)-Scheme" element={<PolytechniEngineering/>} />
<Route path="/BLIBISC-Scheme" element={<BLibIScScheme />} />
<Route path="/BachelorofLaws-Scheme" element={<BachelorofLawsScheme />} />
<Route path="/BSCHMCS-Scheme" element={<BScHMCSScheme />} />




      <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refound-cancellation" element={<RefoundCancellation />} />
        {/*------------------------Student Routes-----------------------------------------*/}
        <Route path="/erp/studentregister" element={<Signup />} />
        <Route path="/erp/studentlogin" element={<Signin />} />
        <Route path="/studentlogin/selectCourse" element={<PrivateRoute element={<Course />} />} />
        <Route path="/studentalldetail" element={<StudentAllDetail />} />
        <Route path='/onlyheader' element={<PrivateRoute element={<OnlyHeader />} />} />
        <Route path='/erp/studentDashboard' element={<PrivateRoute element={<StudentDashboard />} />} />
        <Route path='/studentWaiting' element={<StudentWaiting />} />
        <Route path='/studentDetail' element={<StudentMainDetails />} />
        <Route path='/studentHome' element={<StudentHome />} />
        <Route path='/student/Enrollement/Form' element={<PrivateRoute element={<EnrollementForm />} />} />
        <Route path='/studentpending' element={<Pending />} />
        <Route path='/studentverify' element={<StudentVerify />} />
        <Route path='/student/dashboard/home' element={<StudentDashboardHome />} />
        <Route path='/studentUpdateDetail' element={<Registrationn />} />
        <Route path='/PaymentPage' element={<PrivateRoute element={<PaymentPage />} />} />
        <Route path='/success' element={<Success />} />
        <Route path='/failure' element={<Failure />} />
        <Route path='/verifyDetailed' element={<PrivateRoute element={<VerifyDetailed />} />} />


        <Route path='/' element={<MainPage />} />
        <Route path='/erp' element={<Erp />} />

        <Route path="/notification" element={<Notification />} />
        <Route path="/imp" element={<Imp />} />
        <Route path="/off" element={<Off />} />
        <Route path="/not" element={<Not />} />
        <Route path="/exam" element={<Notice />} />
        <Route path="/eventss" element={<Edetails />} />
        <Route path="/women" element={<Wday />} />

        {/*------------------------Student Entrance form Routes-----------------------------------------*/}
        <Route path="/entrance/form" element={<EntranceForm />}></Route>
        <Route path="/entrance/payment" element={<Entrance_Payment />}></Route>
        <Route path="/entrance/payment_success" element={<Entrance_Success />}></Route>
        <Route path="/entrance/slip" element={<Entrance_Slip />}></Route>

        {/*------------------------Student E-Pravesh Routes-----------------------------------------*/}
        <Route path="/Epravesh/Student/Register" element={<E_Pravesh_Course/>}></Route>

        {/*--------------------------------Hod Routes--------------------------------------------------*/}

        <Route path='/erp/hodlogin' element={< HodSignin />} />
        <Route path='/erp/hodregister' element={<HodSignUp />} />

        <Route path='/totalenrolled' element={<TotalEnrolled />} />
        <Route path='/total/student/Registered' element={<TotalRegisStdtHod />} />
        <Route path='/total/student/branch' element={<TotalSession />} />
        <Route path='/total/student/feepaid' element={<TotalFeePaidHod />} />

        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/studentverifieddetailed/:id" element={<PrivateRoute element={<VerifyDetailed />} />} />
        <Route path='/hodDashboard' element={<PrivateRoute element={<HodDashboard />} />} />
        <Route path='/hodDetail' element={<PrivateRoute element={<HodMainDetails />} />} />


        {/*------------------------Admin Routes-----------------------------------------*/}



        <Route path='/adminlogin' element={< AdminLogin />} />

        <Route path='/admindashboard' element={<PrivateRoute element={< AdminDashboard />} />} />

        <Route path="/admin/erpdasboard" element={<PrivateRoute element={<ErpDashboard />} />} />

        <Route path='/student/totalfeepaid' element={<PrivateRoute element={< TotalFeePaid />} />} />
        <Route path='/student/totalenrolled' element={<PrivateRoute element={< TotalEnrolledAdmin />} />} />
        <Route path='/student/totalregistered' element={<PrivateRoute element={< TotalRegistered />} />} />
        <Route path='/registered/studentlist' element={<PrivateRoute element={< StudentRegistrationList />} />} />

        <Route path='/erpdashboard/student/updatedetails' element={<PrivateRoute element={<AdminUpdtStdt_Detail />} />} />
        <Route path="/erpdashboard/student/updatealldetails/:id" element={<PrivateRoute element={<AdminUpdateAllDetail />} />} />
        <Route path="/erpdashboard/student/search" element={<PrivateRoute element={<AdminStdtSearch />} />} />

        <Route path="/erpdashboard/pending/student/search" element={<PrivateRoute element={<AdminPenSearch />} />} />
        <Route path="/search/:admissionSession/:courseType/:courseName/:courseBranch" element={<PrivateRoute element={<SearchPen />} />} />
        <Route path="/searchver/:admissionSession/:courseType/:courseName/:courseBranch" element={<PrivateRoute element={<SearchVer />} />} />
        <Route path="/sea/:admissionSession/:courseType/:courseName/:courseBranch" element={<PrivateRoute element={<Adminser />} />} />
        <Route path="/student/status" element={<PrivateRoute element={<Admissionstatus />} />} />
        <Route path="/erpdashboard/verified/student/search" element={<PrivateRoute element={<AdminVeriStdSearch />} />} />

        <Route path="/erpdashboard/student/document/search" element={<PrivateRoute element={<AdminDocumentSearch />} />} />
        <Route path="/erpdashboard/student/updatedocuments/:id" element={<PrivateRoute element={<AdminUpdate_Documents />} />} />

        <Route path="/admin/search/student-pending/list" element={<PrivateRoute element={<Admin_Pending />} />} />


        <Route path="/enrollment" element={<PrivateRoute element={<EnrollementG />} />} />
        <Route path="/manual/enrollment/generation" element={<ManualEnrol_G />} />

        <Route path="/admin/erpdashboard/admissionslip/search" element={<PrivateRoute element={<Admission_Slip_Search />} />} />
        <Route path="/admissionslip/:session/:courseType/:course/:branch/:college" element={<PrivateRoute element={<Admission_Slip />} />} />

        <Route path="/admin/erpdashboard/Bonafied/certificate" element={<Bonafied_Search />} />



        <Route path="/search-result/:session/:courseType/:course/:branch/:college" element={<PrivateRoute element={<Search />} />} />
        <Route path="/enrolled/student/list/:session/:courseType/:course/:branch/:college" element={<PrivateRoute element={<EnrolledStudentlist />} />} />
        <Route path="/enrolled/student/search-result" element={<PrivateRoute element={<EnrollementStudentSearch />} />} />
        <Route path="/brancmapping-session" element={<Branchmapping />} />
        <Route path="/center-master" element={<Centermaster />} />
        <Route path="/specialization-master" element={<SpecializationMaster />} />
        <Route path="/specialization-subject-mapping" element={<SpecializationSubjectMapping />} />
        <Route path="/sprcialization-type-master" element={<SpecializationTypeMaster />} />
        <Route path="/subject-header-insert" element={<SubjectHeaderInsert />} />
        <Route path="/upload-subject-master-from-excel-data" element={<UploadSubjectMasterFromExcelData />} />
        <Route path="/create-collage" element={<CreateCollege />} />

        <Route path='/grievance' element={< Grievance />} />
        <Route path="/admission-session-update" element={<AdmissionSessionMaster />} />
        <Route path="/faculty-master" element={<FacultyMaster />} />
        <Route path="/department-master" element={<DepartmentMaster />} />
        <Route path="/course-type" element={<CourseType />} />
        <Route path="/course-master" element={<CourseMaster />} />
        <Route path="/branch-master" element={<BranchMaster />} />
        <Route path="/sub-branch-master" element={<SubBranchMaster />} />
        <Route path="/course-group-master" element={<CourseGroupMaster />} />
        <Route path="/admission-open" element={<AdmissionOpen />} />
        <Route path="/reservation-master" element={<ReservationMaster />} />
        <Route path="/create-counselling-round" element={<CreateCounsellingRound />} />
        <Route path="/last-exam-sunject-group" element={<LastExamSubjectGroup />} />
        <Route path="/grade-point-master" element={<GradePointMaster />} />
        <Route path="/subject-master-excel-download" element={<SubjectMasterExcelDownload />} />
        <Route path="/subject-master-paper-wise" element={<SubjectMasterPaperWise />} />
        <Route path="/subject-group-master" element={<SubGroupMaster />} />
        <Route path="/transfer-subject" element={<TransferSubject />} />
        <Route path="/transfer-subject-group" element={<TransferSubjectGroup />} />
        <Route path="/program-scheduling" element={<ProgramScheduling />} />



        <Route path="/paym" element={<PrivateRoute element={<Paym />} />} />
        <Route path="/paymen" element={<PrivateRoute element={<Paymen />} />} />



        {/* ======================================================= */}
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/Nirf/Engenerring" element={<NIRF_Eng />} />
        <Route path="/Nirf/Agriculter" element={<NIRF_Agri />} />
        <Route path="/Nirf/Pharamacy" element={<NIRF_Phar />} />

        <Route path="/background-page" element={<BackgroundPage />} />
        <Route path="/institutes" element={<Institutepage />} />
        <Route path="/promoting-society" element={<PromotingSociety />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/core-values" element={<CoreValues />} />
        <Route path="/best-practicess" element={<BestPractices />} />

        <Route path="/chancellor" element={<Chancellor />} />
        <Route path="/vice-chancellor" element={<ViceChancellorr />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/deputy-registrar" element={<DeputyRegistrar />} />


        {/* ======================== Examination =============================== */}
        <Route path="/entrance-exam-alert" element={<EntranceExamAlert />} />
        <Route path="/exam-notifications" element={<ExamNotifications />} />
        <Route path="/exam-schedule" element={<ExamSchedule />} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/result" element={<Result />} />


        {/* ========================= Academic  =========================================== */}

        <Route path="/phd-page" element={<PhdPage />} />
        <Route path="/academic-calender" element={<AcademicCalendar />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/Hei-handbook" element={<HEIHandbook />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/constituent-units" element={<ConstituentUnits />} />
        <Route path="/mandatory-discIosures" element={<MandatoryDisclosures />} />

        {/* ========================= Research ============================================ */}

        <Route path="/director(R&D)" element={<Director />} />
        <Route path="/R&D-cell" element={<RDCell />} />
        <Route path="/consultancy-services" element={<ConsultancyServices />} />


      </Routes >
    </>

  )
}

export default App