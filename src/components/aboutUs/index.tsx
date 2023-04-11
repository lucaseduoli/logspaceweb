import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function AboutUs() {
  return (
    <>
      <section className="relative w-full">
        <div className="w-full h-full" id="vantaRef">
          <div className="relative items-center w-full px-5 py-32 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div className="flex w-full mx-auto text-left">
              <div className="relative flex flex-col items-center m-auto align-middle">
                <div id="top" className="max-w-3xl space-y-4 lg:text-center">
                  <h1 className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl">
                    About
                    <span
                      className="font-semibold 
                      bg-gradient-to-r  bg-clip-text text-transparent 
                      from-[#64abb8] via-[#475dc2] to-[#5b51c4]
                      animate-text"
                    >
                      {" "}
                      Logspace{" "}
                    </span>
                  </h1>
                  <p className="mb-6 text-xl font-light text-smoke">
                    Logspace provides custom machine learning solutions for
                    businesses and organizations, with pipelines covering the
                    entire process from experimentation to deployment.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative items-center w-full px-5 mx-auto pb-44 md:px-12 lg:px-20 max-w-7xl">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h1 className="text-4xl font-bold text-white">Who We Are</h1>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <main className="flex-auto bg-nero">
              <div className="max-w-2xl mx-auto">
                <p className="mt-2 text-lg text-santa">
                  We are a team of software engineers and data scientists
                  passionate about problem-solving and ready to take on
                  challenges in creative and effective ways.
                </p>
                <p className="mt-4 text-lg text-santa">
                  Our mission is to help businesses integrate Machine Learning
                  into their processes by providing affordable and hands-on
                  services, saving misused resources and time.
                </p>
                <p className="mt-4 text-lg text-santa">
                  We are currently working with governments, financial
                  institutions, and industries, as well as up-and-coming
                  startups and entrepreneurs who use data and automation to
                  develop new products.
                </p>
              </div>
            </main>
            <div className="grid my-12 gap-x-16 grid-cols-6 max-w-2xl ml-auto mr-auto">
              <a href="https://www.linkedin.com/in/rodrigo-nader-673163bb/">
                <figure>
                  <img
                    className="w-full rounded-full shadow-thick border-river"
                    src="https://media.licdn.com/dms/image/C4D03AQGL-szmiHGgqA/profile-displayphoto-shrink_200_200/0/1526259222508?e=1684972800&v=beta&t=5TX618TmK48CBJHTShxhWvrt-vtYISjMXEjuPbamIcE"
                    alt="Rodrigo Nader on Linkedin"
                    width="1310"
                    height="873"
                  />
                  <figcaption className="text-center mt-4 font-bold text-xs text-santa lg:text-base">
                    Founder
                  </figcaption>
                </figure>
              </a>
              <a href="https://www.linkedin.com/in/ogabrielluiz/">
                <figure>
                  <img
                    className="w-full rounded-full shadow-thick border-river"
                    src="https://media.licdn.com/dms/image/C4D03AQE0FdYxVREEeQ/profile-displayphoto-shrink_200_200/0/1541646587416?e=1684972800&v=beta&t=fRcyluwIK0u_xX49lEnV9fgtKIs92Zx6_ZR15qaAem4"
                    alt="Gabriel Luiz Freitas Almeida on Linkedin"
                    width="1310"
                    height="873"
                  />
                  <figcaption className="text-center mt-4 font-bold text-xs text-santa lg:text-base">
                    Co-Founder
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="grid my-12 gap-x-16 grid-cols-6 max-w-2xl ml-auto mr-auto">
              <a href="https://www.linkedin.com/in/otavio-anovazzi-104535206/">
                <figure>
                  <img
                    className="w-full rounded-full shadow-thick border-river"
                    src="https://media.licdn.com/dms/image/C5603AQGtLJqF_MrQeA/profile-displayphoto-shrink_200_200/0/1628185122820?e=1684972800&v=beta&t=2DnDS-AFSZA0A86luEY2q1QA2JOedKECVc7pKwXcRjI"
                    alt="Otavio Anovazzi on Linkedin"
                    width="1310"
                    height="873"
                  />
                </figure>
              </a>
              <a href="https://www.linkedin.com/in/carlosrodrigocoelho/">
                <figure>
                  <img
                    className="w-full rounded-full shadow-thick border-river"
                    src="https://media.licdn.com/dms/image/C4E03AQHBc-n_Ns0LNw/profile-displayphoto-shrink_200_200/0/1590614498030?e=1684972800&v=beta&t=OL-IegYUfLwflvGSN7pqOjcsY48Dp2MUoFjq-Db2f5s"
                    alt="Carlos Rodrigo on Linkedin"
                    width="1310"
                    height="873"
                  />
                </figure>
              </a>
              <a href="https://www.linkedin.com/in/ibiscp/">
                <figure>
                  <img
                    className="w-full rounded-full shadow-thick border-river"
                    src="https://media.licdn.com/dms/image/C5603AQFHnWuckvU-Kg/profile-displayphoto-shrink_200_200/0/1581501245426?e=1684972800&v=beta&t=gZSEbm1jw6Kq3Z3E2Ni9cCDODYMxfDWnFDIA6CASyUw"
                    alt="Ibis Prevedello on Linkedin"
                    width="1310"
                    height="873"
                  />
                </figure>
              </a>
              <a href="https://www.linkedin.com/in/lucas-oliveira-92266520b/">
                <figure>
                  <img
                    className="w-full rounded-full shadow-thick border-river"
                    src="https://media.licdn.com/dms/image/C4E03AQG0YoTeTagZIg/profile-displayphoto-shrink_200_200/0/1618114751659?e=1684972800&v=beta&t=xLyjYN9zl3juTJYJzpygVPcTllc9VJbviE1SjfJ9q_M"
                    alt="Lucas Oliveira on Linkedin"
                    width="1310"
                    height="873"
                  />
                </figure>
              </a>
              <a href="https://www.linkedin.com/in/matheus-jacques/">
                <figure>
                  <img
                    className="w-full rounded-full shadow-thick border-river"
                    src="https://media.licdn.com/dms/image/C4E03AQFfFCPzAhg3Eg/profile-displayphoto-shrink_800_800/0/1646045907868?e=1686787200&v=beta&t=XgAVfdvL2YarI1LhW9U06SfRHA8kN4OJMTnCcTAKZPM"
                    alt="Matheus Jacques on Linkedin"
                    width="1310"
                    height="873"
                  />
                </figure>
              </a>
              <a href="https://www.linkedin.com/in/jackson-bolcer-63446a241/">
                <figure>
                  <img
                    className="w-full rounded-full shadow-thick border-river"
                    src="https://ca.slack-edge.com/T01RA4X4X35-U049NPEAC12-e9c8aa63dfbc-512"
                    alt="Jackson Bolcer on Linkedin"
                    width="1310"
                    height="873"
                  />
                </figure>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8 mt-10">
          <div>
            <h1 className="text-4xl font-bold text-white">How It Works</h1>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <main className="flex-auto bg-nero">
              <div className="max-w-2xl mx-auto">
                <p className="mt-2 text-lg text-santa">
                  Problem definitions are hard and require technical skills from
                  multiple fields, as well as domain-specific knowledge to
                  create an actionable strategy. To achieve that, our team
                  leaders coordinate closely with domain experts and are
                  responsible for each project’s execution.
                </p>
                <p className="mt-4 text-lg text-santa">
                  We act as an internal part of your company where weekly
                  brainstorms and presentations help the teams stay involved and
                  ideas flow from both sides.
                </p>
                <p className="mt-4 text-lg text-santa">
                  Once the scope of a project is defined, we will:
                </p>
                <ul role="list" className="mt-4 space-y-2 list-disc">
                  <li className="mt-2 text-lg text-santa">
                    Decompose the problem into manageable tasks;
                  </li>
                  <li className="mt-2 text-lg text-santa">
                    Allocate the required resources and coordinate them;
                  </li>
                  <li className="mt-2 text-lg text-santa">
                    Research the best suited tools and libraries to be used;
                  </li>
                  <li className="mt-2 text-lg text-santa">
                    Provide guidance to your team and advise your managers;
                  </li>
                </ul>
              </div>
            </main>
          </div>
        </div>
        <div className="relative items-center w-full px-5 py-8 mx-auto lg:pt-32 md:px-12 lg:px-16 max-w-5xl">
          <div className="pt-12">
            <div className="max-w-xl mx-auto lg:max-w-7xl">
              <h2 className="sr-only">Title text for screen readers</h2>
              <dl className="">
                <div className="h-full p-6 bg-cinder lg:p-8 shadow-thick rounded-2xl">
                  <div className="flex w-full mx-auto text-left">
                    <div className="relative inline-flex items-center m-auto align-middle">
                      <div className="max-w-3xl space-y-8 lg:text-center">
                        <h2 className="mb-8 text-5xl font-bold leading-none text-white">
                          We Believe...
                        </h2>
                      </div>
                    </div>
                  </div>
                  <dd className="text-lg text-chimney flex flex-col gap-3 px-24 justify-between">
                    <span>• Data is the asset, knowledge should be free. </span>
                    <span>
                      • Zero bandages. Every piece of software should be
                      reusable.{" "}
                    </span>
                    <span>
                      • Simple is better (and cheaper). Fancy solutions should
                      have a strong motivation.{" "}
                    </span>
                    <span>• Clear-cut goals before taking a step ahead. </span>
                    <span>
                      • Creativity is key to connect the right tools with the
                      proper resources.{" "}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
