import woohoo from "../../assets/partners/woohoo logo.png";
import bitvore from "../../assets/partners/bitvore logo.png";
import ifood from "../../assets/partners/ifood logo.png";
import sapiens from "../../assets/partners/sapiens logo.png";
import ifoodCase from "../../assets/images/ifood.png";
import CaseStudy from "./caseStudy";

export default function CaseStudies() {
  return (
    <>
      <section className="relative w-full">
        <div className="w-full h-full" id="vantaRef">
          <div className="relative items-center w-full px-5 pt-32 pb-16 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div className="flex w-full mx-auto text-left">
              <div className="relative flex flex-col items-center m-auto align-middle">
                <div id="top" className="max-w-3xl space-y-4 lg:text-center">
                  <h1 className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl">
                    Case
                    <span
                      className="font-semibold 
                      bg-gradient-to-r  bg-clip-text text-transparent 
                      from-[#64abb8] via-[#475dc2] to-[#5b51c4]
                      animate-text"
                    >
                      {" "}
                      Studies{" "}
                    </span>
                  </h1>
                  <p className="mb-6 text-xl font-light text-smoke">
                    Machine learning can help you make better decisions no
                    matter what your business is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative items-center text-center hidden w-full mx-auto lg:block">
          <div className="mx-auto">
            <div className="w-full pb-32">
              <div
                className="w-full flex justify-center gap-16"
                style={{ filter: "brightness(1.5)" }}
              >
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
      <section className="relative items-center w-full px-5 mx-auto pb-44 md:px-12 lg:px-20">
        <CaseStudy
          href={"#"}
          title={"Ifood"}
          description={
            "As the biggest delivery app in Brazil, iFood needs to report suspect cases of money laundry from its registered restaurants. Logspace partnered with HighData to solve this problem by integrating AI into iFood’s annotation pipeline."
          }
          problem={
            "iFood needs to identify and report money laundering cases from its registered restaurants, which is a difficult and time-consuming task."
          }
          solution={
            "Logspace partnered with HighData to develop a machine-learning model that could be integrated into iFood's annotation pipeline. This allowed iFood to efficiently identify and report suspect cases of money laundering from its registered restaurants, using advanced machine learning techniques such as natural language processing and anomaly detection. The solution provided a scalable and automated approach, improving the accuracy and efficiency of iFood's compliance efforts."
          }
          results={
            "Through the integration of AI into its annotation pipeline, iFood was able to improve its ability to identify and report suspect cases of money laundering from its registered restaurants, thereby enhancing its compliance efforts and mitigating financial risks."
          }
          image={ifoodCase}
        />
      </section>
    </>
  );
}
