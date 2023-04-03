import woohoo from "../../assets/partners/woohoo logo.png";
import bitvore from "../../assets/partners/bitvore logo.png";
import ifood from "../../assets/partners/ifood logo.png";
import sapiens from "../../assets/partners/sapiens logo.png";
import datax from "../../assets/partners/datax logo.png";
import highdata from "../../assets/partners/highdata logo.png";
import etc from "../../assets/partners/etc logo.png";
import DOTS from "vanta/dist/vanta.dots.min";
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
        <div className="relative items-center w-full px-5 py-40 pb-72 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="flex w-full mx-auto text-left lg:mt-16">
            <div className="relative flex flex-col items-center m-auto align-middle">
              <div id="top" className="max-w-3xl space-y-4 lg:text-center">
                <h1 className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl">
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
                <p className="mb-6 text-xl font-light text-smoke">
                  AI solutions powered by state-of-the-art technologies, with
                  pipelines that start from research all the way up to
                  deployment.
                </p>
              </div>
              <div className="flex w-full max-w-2xl gap-2 mt-6 lg:justify-center lg:mx-auto">
                  <a
                    href="/logspaceweb/#/contactus"
                    className=" flex gap-3 items-center group ring-2 ring-[#475dc2] bg-pearl px-6 py-2.5 text-base font-medium text-center text-white transition duration-500 ease-in-out rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:ring-white hover:shadow-lg  hover:shadow-[#ffffff50]
                    from-[#64abb8] via-[#475dc2] to-[#5b51c4]"
                  >
                    Schedule a Meeting
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 group-hover:translate-x-1 transition duration-200" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="text-right scale-x-0 group-hover:scale-x-100 transition origin-center duration-200" stroke="currentColor" d="M1.75 8H11" stroke-linecap="round"></path></svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative items-center text-center hidden w-full mx-auto lg:block">
        <div className="mx-auto">
          <div className="w-full py-4">
            <div className="w-full flex justify-center gap-16" style={{ filter: "brightness(1.5)" }}>
            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-delay="0"
              data-aos-anchor="#top"
            >
              <img className="w-32 mx-auto" src={woohoo} alt="Woohoo" />
            </div>

            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-delay="200"
              data-aos-anchor="#top"
            >
              <img className="h-10 mx-auto" src={etc} alt="ETC" />
            </div>

            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-delay="400"
              data-aos-anchor="#top"
            >
              <img className="w-32 mx-auto" src={highdata} alt="Highdata" />
            </div>
            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-delay="600"
              data-aos-anchor="#top"
            >
              <img className="w-32 mx-auto" src={datax} alt="DataX" />
            </div>
            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-delay="800"
              data-aos-anchor="#top"
            >
              <img className="w-32 mx-auto" src={bitvore} alt="Bitvore" />
            </div>
            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-delay="1000"
              data-aos-anchor="#top"
            >
              <img className="h-10 mx-auto" src={ifood} alt="iFood" />
            </div>

            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-delay="1200"
              data-aos-anchor="#top"
            >
              <img className="w-32 mx-auto" src={sapiens} alt="Sapiens" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
