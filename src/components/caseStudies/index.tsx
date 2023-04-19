import woohoo from "../../assets/partners/woohoo logo.png";
import bitvore from "../../assets/partners/bitvore logo.png";
import ifood from "../../assets/partners/ifood logo.png";
import sapiens from "../../assets/partners/sapiens logo.png";
import ifoodCase from "../../assets/images/ifood.png";
import sapiensCase from "../../assets/images/sapiens.png";
import bitvoreCase from "../../assets/images/bitvore.png";
import woohooCase from "../../assets/images/woohoo.png";
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
                  data-aos-delay="300"
                  data-aos-anchor="#top"
                >
                  <img className="w-32 mx-auto" src={bitvore} alt="Bitvore" />
                </div>
                <div
                  className="flex items-center"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-delay="600"
                  data-aos-anchor="#top"
                >
                  <img className="h-10 mx-auto" src={ifood} alt="iFood" />
                </div>

                <div
                  className="flex items-center"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-delay="900"
                  data-aos-anchor="#top"
                >
                  <img className="w-32 mx-auto" src={sapiens} alt="Sapiens" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative items-center w-full px-5 mx-auto pb-20 md:px-12 lg:px-20">
        <CaseStudy
          title={"iFood"}
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
        <CaseStudy
          title={"Woohoo"}
          description={
            "WooHoo is an Enterprise based Digital voice assistant that is AI-enabled and takes care of guests’ requests with quick, accurate, and custom responses. WooHoo-powered devices offer a Unique Guest Self Service Tool with Personalized Guest Experiences."
          }
          problem={
            "WooHoo, an Enterprise Digital voice assistant, lacked the ability to integrate various services into its natural language processing (NLP) intelligence, making it difficult to provide accurate and custom responses to guests' requests."
          }
          solution={
            "Logspace helped integrate different services into WooHoo's NLP intelligence, allowing it to provide quick, accurate, and custom responses to guests' requests."
          }
          results={
            "Logspace's integration of different services to WooHoo's NLP intelligence enabled the Digital voice assistant to offer guests a unique self-service tool, leading to personalized guest experiences. As a result, WooHoo's AI-enabled devices improved guest satisfaction and overall customer experience."
          }
          image={woohooCase}
        />
        <CaseStudy
          title={"Sapiens Agro"}
          description={
            "A platform for monitoring and prediction of the direction of future commodity contracts."
          }
          problem={
            "Sapiens Agro needed a platform to monitor and predict the direction of future commodity contracts with greater accuracy."
          }
          solution={
            "Logspace developed and integrated prediction algorithms that increased the accuracy of monitoring and predicting future commodity contracts. Additionally, they implemented an NLP system to analyze future commodity sentiment."
          }
          results={
            "The solutions provided by Logspace resulted in more accurate monitoring and prediction of future commodity contracts, helping sapiens.agro to make better-informed decisions and ultimately improve their business operations."
          }
          image={sapiensCase}
        />
        <CaseStudy
          title={"Bitvore"}
          description={
            "Bitvore provides business insights from unstructured data. Products are deployed in over seventy of the world’s largest financial institutions, allowing them to make faster and more effective decisions."
          }
          problem={
            "Bitvore faced difficulties in monitoring its machine-learning pipeline. They needed a solution to streamline the process of detecting and fixing errors in their system."
          }
          solution={
            "Logspace developed a monitoring platform for Bitvore's machine-learning pipeline. This platform allowed Bitvore to quickly detect and fix errors in their system, ensuring that their products could continue to provide valuable business insights from unstructured data."
          }
          results={
            "With Logspace's monitoring platform, Bitvore was able to improve the speed and effectiveness of its decision-making processes. Additionally, Logspace implemented Language Models to replace thousands of manually reviewed articles per day, reducing costs and increasing efficiency for Bitvore."
          }
          image={bitvoreCase}
        />
      </section>
    </>
  );
}
