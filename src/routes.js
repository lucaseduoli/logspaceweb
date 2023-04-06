import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/main";
import AboutUsPage from "./pages/aboutUs";
import ContactUsPage from "./pages/contactUs";

const Router = () => {
   return(
        <Routes>
            <Route path="/logspaceweb/" element={<MainPage/>}/>
            <Route path="/logspaceweb/aboutus" element={<AboutUsPage/>}/>
            <Route path="/logspaceweb/contactus" element={<ContactUsPage/>}/>
       </Routes>
   )
}

export default Router;