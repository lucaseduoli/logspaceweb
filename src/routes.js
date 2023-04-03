import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/main";
import AboutUsPage from "./pages/aboutUs";
import ContactUsPage from "./pages/contactUs";

const Router = () => {
   return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/aboutus" element={<AboutUsPage/>}/>
            <Route path="/contactus" element={<ContactUsPage/>}/>
       </Routes>
   )
}

export default Router;