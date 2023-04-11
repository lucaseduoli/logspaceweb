export default function CaseStudy({
  href = "",
  title,
  description,
  problem,
  solution,
  results,
  image,
}: {
  href: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  results: string;
  image: string;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className="py-16 lg:mx-auto lg:max-w-7xl lg:px-16 flex flex-col shadow-thick bg-cinder rounded-2xl"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div className="flex justify-between items-center">
          <div className="max-w-xl px-5 mx-auto sm:px-6 lg:py-16 lg:max-w-lg lg:mx-0 lg:px-0">
            <h1 className="max-w-4xl flex items-center text-5xl font-bold leading-none tracking-tighter text-white lg:text-5xl lg:max-w-xl">
              {title}
            </h1>
            <p
              data-animate="subtitle"
              className="max-w-md mt-6 text-base text-chimney font-light sm:text-lg md:mt-5 md:max-w-xl"
            >
              {description}
            </p>
            <div className="mt-6">
              {href !== "" ? (
                <a
                  href={href}
                  className="text-base font-medium text-center text-white transition duration-500 ease-in-out transform rounded-t-none hover:text-flamingo focus:outline-none"
                >
                  Learn more &rarr;
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="mt-12 rounded-xl sm:mt-16 lg:mt-0 w-96">
            <div className="">
              <img
                className=" ring-1 ring-pearl ring-opacity-5"
                src={image}
                alt={title}
              />
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-6 mt-20">
          <div className="max-w-xl px-5 mx-auto sm:px-6  lg:max-w-lg lg:mx-0 lg:px-0">
            <h1 className="max-w-4xl flex items-center text-5xl font-bold leading-none tracking-tighter text-white lg:text-3xl lg:max-w-xl">
              Problem
            </h1>
            <p
              data-animate="subtitle"
              className="max-w-md mt-6 text-base text-chimney font-light sm:text-lg md:mt-5 md:max-w-xl"
            >
              {problem}
            </p>
          </div>
          <div className="max-w-xl px-5 mx-auto sm:px-6  lg:max-w-lg lg:mx-0 lg:px-0">
            <h1 className="max-w-4xl flex items-center text-5xl font-bold leading-none tracking-tighter text-white lg:text-3xl lg:max-w-xl">
              Solution
            </h1>
            <p
              data-animate="subtitle"
              className="max-w-md mt-6 text-base text-chimney font-light sm:text-lg md:mt-5 md:max-w-xl"
            >
              {solution}
            </p>
          </div>
          <div className="max-w-xl px-5 mx-auto sm:px-6  lg:max-w-lg lg:mx-0 lg:px-0">
            <h1 className="max-w-4xl flex items-center text-5xl font-bold leading-none tracking-tighter text-white lg:text-3xl lg:max-w-xl">
              Results
            </h1>
            <p
              data-animate="subtitle"
              className="max-w-md mt-6 text-base text-chimney font-light sm:text-lg md:mt-5 md:max-w-xl"
            >
              {results}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
