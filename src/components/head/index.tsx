import woohoo from "../../assets/partners/woohoo logo.png";
import bitvore from "../../assets/partners/bitvore logo.png";
import ifood from "../../assets/partners/ifood logo.png";
import sapiens from "../../assets/partners/sapiens logo.png";
import datax from "../../assets/partners/datax logo.png";
import highdata from "../../assets/partners/highdata logo.png";
import etc from "../../assets/partners/etc logo.png";
import DOTS from "vanta/dist/vanta.dots.min";
import logo from "../../assets/logo.svg";
import { useState, useRef, useEffect } from "react";

export default function Head() {
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: "#vantaRef",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x4b5bc2,
          backgroundColor: 0x1a1c23,
          spacing: 14.00,
          showLines: false,
        })
      );
    }
    return () => {
      if (vantaEffect) (vantaEffect as any).destroy();
    };
  }, [vantaEffect]);

  return (
    <section className="relative w-full">
      <div className="w-full h-full" id="vantaRef">
        <div className="relative items-center w-full px-5 py-[320px] md:pb-[600px] mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="flex w-full mx-auto text-left lg:mt-16">
            <div className="relative flex flex-col items-center m-auto align-middle">
            <div className="flex flex-row items-center justify-between py-2 lg:py-0">
          <a
            href="/logspaceweb/"
            className="text-lg rounded-lg focus:outline-none focus:shadow-outline m-2"
          >
            <div className="inline-flex mb-8 items-center gap-1 font-bold text-5xl text-white">
              <img className="w-24 h-24" src={logo}></img>
              Logspace
            </div>
          </a>
        </div>
              <div id="top" className="max-w-3xl space-y-4 lg:text-center">
                <h1 className="mb-4 text-3xl font-bold leading-none text-chimney lg:text-6xl">
                  Transforming the path to
                  <span
                    className="font-semibold 
                      bg-gradient-to-r  bg-clip-text text-transparent 
                      from-[#64abb8] via-[#475dc2] to-[#5b51c4]
                      animate-text"
                  >
                    {" "}
                    AI Integration{" "}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative items-center text-center hidden w-full mx-auto lg:block">
        <div className="mx-auto">
          <div className="w-full py-4">
            <div className="w-full flex justify-center gap-16" style={{ filter: "brightness(1.5)" }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
