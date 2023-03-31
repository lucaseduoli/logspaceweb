import woohoo from "../../assets/partners/woohoo logo.png";
import bitvore from "../../assets/partners/bitvore logo.png";
import ifood from "../../assets/partners/ifood logo.png";
import sapiens from "../../assets/partners/sapiens logo.png";
import datax from "../../assets/partners/datax logo.png";
import highdata from "../../assets/partners/highdata logo.png";
import etc from "../../assets/partners/etc logo.png";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function Head() {

  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE:THREE,
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x312e59,
          points: 5.00,
          backgroundColor: 0x1e2028,
          maxDistance: 17.00
        })
      );
    }
    return () => {
      if (vantaEffect) (vantaEffect as any).destroy();
    };
  }, [vantaEffect]);
  return (
    <section className="relative w-full">
      <div className="w-full" ref={vantaRef}>
        <div className="relative items-center w-full px-5 py-40 pb-60 mx-auto md:px-12 lg:px-16 max-w-7xl" >
          <div className="flex w-full mx-auto text-left lg:mt-16">
            <div className="relative flex flex-col items-center m-auto align-middle">
              <div className="max-w-3xl space-y-8 lg:text-center">
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
                <p className="mb-6 text-xl font-light text-santa">
                  AI solutions powered by state-of-the-art technologies, with
                  pipelines that start from research all the way up to deployment.
                </p>
              </div>
              <div className="flex w-full max-w-2xl gap-2 mt-20 lg:justify-center lg:mx-auto">
                <div className="my-3 rounded-lg sm:mt-0">
                  <a
                    href="https://wicked-templates.gumroad.com/l/theshadow"
                    className="items-center block px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-majorelly lg:px-10 rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-thick"
                  >
                    Buy for $89
                  </a>
                </div>
                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <a
                    href="mailto:contact@logspace.ai"
                    className="shadow-thick items-center block px-8 py-2.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-white hover:text-majorelly"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-32 items-center text-center hidden w-full px-5 mb-32 mx-auto md:px-12 lg:px-16 lg:block">
        <h1 className="mb-16 text-3xl font-bold leading-none text-white lg:text-5xl">
          Trusted by
        </h1>
        <div className="mx-auto" style={{ filter: "brightness(1.5)" }}>
          <div className="grid grid-cols-4 mx-auto max-w-4xl">
            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              <img className="w-40 mx-auto" src={woohoo} alt="Woohoo" />
            </div>

            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img className="h-12 mx-auto" src={etc} alt="ETC" />
            </div>

            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <img className="w-40 mx-auto" src={highdata} alt="Highdata" />
            </div>
            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <img className="w-40 mx-auto" src={datax} alt="DataX" />
            </div>
          </div>
          <div className="grid grid-cols-3 mx-auto max-w-2xl mt-8">
            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <img className="w-40 mx-auto" src={bitvore} alt="Bitvore" />
            </div>
            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <img className="h-12 mx-auto" src={ifood} alt="iFood" />
            </div>

            <div
              className="flex items-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              <img className="w-40 mx-auto" src={sapiens} alt="Sapiens" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
