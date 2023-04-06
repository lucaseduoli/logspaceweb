import { useState, useRef, useEffect } from "react";
import CaseStudies from "../../components/caseStudies";
import Collaborate from "../../components/collaborate";
import ContactUs from "../../components/contactUs";
import Footer from "../../components/footer";
import Head from "../../components/head";
import HeaderComponent from "../../components/header";
import Solutions from "../../components/solutions";

export default function MainPage() {
  return (
    <>
    <div className=" h-full w-full fixed inset-0 z-1" style={{}} >

    </div>
    <div className="w-full h-full bg-mirage overflow-x-hidden ">
      <div className="relative">

      <HeaderComponent />
      </div>
      <div className="w-full">
        <Head />
        
        <div className="w-full relative">
          <Collaborate />
          <CaseStudies />
          <Solutions />
        </div>
      </div>
      <div className="relative">

      <Footer />
      </div>
    </div>
    </>
  );
}
