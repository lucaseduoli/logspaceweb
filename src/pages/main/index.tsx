import { useState, useRef, useEffect } from "react";
import CaseStudies from "../../components/caseStudies";
import Collaborate from "../../components/collaborate";
import ContactUs from "../../components/contactUs";
import Footer from "../../components/footer";
import Head from "../../components/head";
import HeaderComponent from "../../components/header";
import Solutions from "../../components/solutions";
import NET from "vanta/dist/vanta.net.min";

export default function MainPage() {
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: "#sides",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x312e59,
          points: 15.0,
          backgroundColor: 0x1e2028,
          maxDistance: 16.0,
          spacing: 12.0,
        })
      );
    }
    return () => {
      if (vantaEffect) (vantaEffect as any).destroy();
    };
  }, [vantaEffect]);

  return (
    <>
    <div className="w-full h-full fixed inset-0" id="sides">
    </div>
    <div className=" h-full w-full fixed inset-0 z-1 bg-gradient-to-r from-transparent via-black bg-black bg-opacity-25" style={{}} >

    </div>
    <div className="w-full h-full bg-pearl overflow-x-hidden ">
      <div className="relative">

      <HeaderComponent />
      </div>
      <div className="w-full">
        <Head />
        
        <div className="w-full relative">
          <Collaborate />
          <CaseStudies />
          <Solutions />
          <ContactUs />
        </div>
      </div>
      <div className="relative">

      <Footer />
      </div>
    </div>
    </>
  );
}
