import { useEffect, useState } from "react";
import npl from "../../assets/gifs/natural-language-processing.gif";
import tsf from "../../assets/images/image2.jpg";
import dpn from "../../assets/images/image3.jpg";
import TRUNK from "vanta/dist/vanta.trunk.min";
import HALO from "vanta/dist/vanta.halo.min";
import DOTS from "vanta/dist/vanta.dots.min";

export default function Solutions() {
  const [vantaEffect1, setVantaEffect1] = useState(null);
  useEffect(() => {
    if (!vantaEffect1) {
      setVantaEffect1(
        TRUNK({
          el: "#trunk",
          backgroundColor: 0x252731,
          spacing: 4.10,
          color: 0x64abb8,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 1,
          scaleMobile: 1.0,
          chaos: 2.0,
        })
      );
    }
    return () => {
      if (vantaEffect1) (vantaEffect1 as any).destroy();
    };
  }, [vantaEffect1]);
  const [vantaEffect2, setVantaEffect2] = useState(null);
  useEffect(() => {
    if (!vantaEffect2) {
      setVantaEffect2(
        HALO({
          el: "#halo",
          backgroundColor: 0x252731,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        })
      );
    }
    return () => {
      if (vantaEffect2) (vantaEffect2 as any).destroy();
    };
  }, [vantaEffect2]);
  const [vantaEffect3, setVantaEffect3] = useState(null);
  useEffect(() => {
    if (!vantaEffect3) {
      setVantaEffect3(
        DOTS({
          el: "#dots",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 700.00,
          minWidth: 700.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xe282b5,
          color2: 0x5b51c4,
          backgroundColor: 0x252731,
          size: 0,
          spacing: 10.00
        })
      );
    }
    return () => {
      if (vantaEffect3) (vantaEffect3 as any).destroy();
    };
  }, [vantaEffect3]);
  return (
    <section>
      <div className="py-12 lg:mx-auto lg:max-w-7xl lg:px-16 lg:py-16" id="solutions">
        <div className="flex flex-col w-full text-center lg:mb-12">
          <h2 className="mb-8 text-6xl font-bold leading-none text-white lg:rounded-t-md">
            Solutions
          </h2>
          <strong className="w-full mx-auto mb-8 text-xl font-light text-center text-chimney lg:text-center">
            We <span className="font-bold">don't</span> support boxed
            machine-learning solutions. Take a look at some domains we're best
            at:
          </strong>
        </div>
        <div className="space-y-8">
          <div className="px-5 lg:px-0">
            <div className="mx-auto max-w-7xl">
              <div className="overflow-hidden rounded-2xl shadow-thick bg-cinder lg:grid lg:grid-cols-2">
                <div className="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                  <div className="space-y-4 lg:space-y-8 lg:self-center">
                    <div className="flex items-center text-moody">
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none rounded-e-tl-md"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <h2 className="text-4xl font-bold leading-snug text-white lg:text-3xl">
                      Natural Language Processing
                    </h2>
                    <p className="text-xl font-light text-chimney">
                      Explore the fastest growing field in the AI market.
                      End-to-end pipelines for:
                      <ul className="text-base list-disc align-top ml-5 mt-2">
                        <li>Document Classification / Clustering</li>
                        <li>Sentiment Analysis</li>
                        <li>Named Entity Recognition</li>
                        <li> Conversational AI / Chatbots</li>
                      </ul>
                    </p>
                    <div className="flex w-full max-w-2xl gap-2">
                      <div className="my-3 rounded-lg sm:mt-0">
                        <a
                          href="#"
                          className="text-base font-medium text-center text-white transition duration-500 ease-in-out transform rounded-t-none hover:text-flamingo focus:outline-none"
                        >
                          Learn more &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full" id="halo"></div>
              </div>
            </div>
          </div>
          <div className="px-5 lg:px-0">
            <div className="mx-auto max-w-7xl">
              <div className="overflow-hidden rounded-2xl shadow-thick bg-cinder lg:grid lg:grid-cols-2">
                <div className="overflow-hidden h-[544px]">
                  <div className="w-[1300px] h-[1300px] bottom-20 -left-[650px]" id="trunk"></div>
                </div>
                <div className="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                  <div className="space-y-4 lg:space-y-8 flex flex-col justify-center h-full">
                    <h2 className="text-4xl font-bold leading-snug text-white lg:text-3xl">
                      Time Series Forecasting
                    </h2>
                    <p className="text-xl font-light text-chimney">
                      We are the creators of Wavy, an open-source time series
                      library that helps with preprocessing for multi-level
                      forecasting.
                      <ul className="text-base list-disc align-top ml-5">
                        <li>Quantitative Research</li>
                        <li>Portfolio Optimization</li>
                        <li>Time Series Prediction</li>
                        <li>Anomaly Detection</li>
                      </ul>
                    </p>
                    <div className="flex w-full max-w-2xl gap-2">
                      <div className="my-3 rounded-lg sm:mt-0">
                        <a
                          href="#"
                          className="text-base font-medium text-center text-white transition duration-500 ease-in-out transform rounded-t-none hover:text-flamingo focus:outline-none"
                        >
                          Learn more &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 lg:px-0">
            <div className="mx-auto max-w-7xl">
              <div className="overflow-hidden rounded-2xl shadow-thick bg-cinder lg:grid lg:grid-cols-2">
                <div className="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                  <div className="space-y-4 lg:space-y-8 lg:self-center flex flex-col justify-center py-8">
                    
                    <h2 className="text-4xl font-bold leading-snug text-white lg:text-3xl">
                      Deep Neural Nets
                    </h2>
                    <p className="text-xl font-light text-chimney">
                      Creative ways to harness the power of state-of-the-art
                      algorithms.
                      <ul className="text-base list-disc align-top ml-5">
                        <li>Transformers / Attention-Based Models</li>
                        <li>Graph Neural Networks</li>
                        <li>Reinforcement Learning</li>
                        <li> Model Visualization / Explainability</li>
                      </ul>
                    </p>
                    <div className="flex w-full max-w-2xl gap-2">
                      <div className="my-3 rounded-lg sm:mt-0">
                        <a
                          href="#"
                          className="text-base font-medium text-center text-white transition duration-500 ease-in-out transform hover:text-flamingo focus:outline-none"
                        >
                          Learn more &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="relative -top-20 -left-20 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1"
                  id="dots"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
