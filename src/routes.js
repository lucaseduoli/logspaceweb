import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/main";
import AboutUsPage from "./pages/aboutUs";

const Router = () => {
   return(
        <Routes>
            <Route path="/logspaceweb/" element={<MainPage/>}/>
            <Route path="/logspaceweb/aboutus" element={<AboutUsPage/>}/>
       </Routes>
   )
}

export default Router;