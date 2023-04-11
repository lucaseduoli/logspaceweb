import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/main";
import AboutUsPage from "./pages/aboutUs";
import ContactUsPage from "./pages/contactUs";
import CaseStudiesPage from "./pages/caseStudies";

const Router = () => {
   return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/aboutus" element={<AboutUsPage/>}/>
            <Route path="/contactus" element={<ContactUsPage/>}/>
            <Route path="/casestudies" element={<CaseStudiesPage/>}/>
       </Routes>
   )
}

export default Router;