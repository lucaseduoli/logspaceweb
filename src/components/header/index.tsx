import Dropdown from "../dropdown";

import logo from "../../assets/logo.svg";
import { ReactComponent as Github } from "../../assets/images/github logo.svg";

const company = [
  {
    name: "About us",
    href: "#",
    description:
      "Learn more about our company values and mission to empower others",
  },
  {
    name: "Careers",
    href: "#",
    description:
      "Looking for you next career opportunity? See all of our open positions",
  },
  {
    name: "Support",
    href: "#",
    description:
      "Get in touch with our dedicated support team or reach out on our community forums",
  },
];

const openSource = [
  {
    name: "Install",
    href: "#",
    description: "Download, install, and start labeling in 10 minutes.",
  },
  {
    name: "Github",
    href: "#",
    description: "Explore our project on Github.",
  },
];
const resources = [
  {
    name: "Documentation",
    href: "#",
    description: "See the documentation of our projects",
  },
  { name: "Blog", href: "#", description: "Read the lastests new about us" },
  {
    name: "Integrations",
    href: "#",
    description:
      "Choose from a wide range of third-party tools and applications ",
  },
];

export default function HeaderComponent() {
  return (
    <header className="w-full text-gray-400 border-b bg-pearl border-cinder">
      <div className="flex flex-col w-full px-4 mx-auto bg-bunker md:items-center md:justify-between md:flex-row md:px-6 lg:px-16 max-w-[90rem]">
        <div className="flex flex-row items-center justify-between py-2 lg:py-0">
          <a
            href="#"
            className="text-lg rounded-lg focus:outline-none focus:shadow-outline m-2"
          >
            <div className="inline-flex items-center gap-1">
              <img className="w-9 h-9" src={logo}></img>
              Logspace
            </div>
          </a>
        </div>
        <nav
          className={
            " items-center flex-grow px-5 md:pb-0 md:flex md:justify-end flex-row hidden"
          }
        >
          <a
            className="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-auto hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            href="https://logspace.ai/"
          >
            Solutions
          </a>
          <a
            className="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            href="#"
          >
            Case Studies
          </a>
          <div className="px-4 py-2 mt-2 text-base bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
            <Dropdown items={resources}>Resources</Dropdown>
          </div>
          <div className="px-4 py-2 mt-2 text-base bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
            <Dropdown items={openSource}>Open Source</Dropdown>
          </div>

          <div className="px-4 py-2 mt-2 text-base mr-auto bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
            <Dropdown items={company}>Company</Dropdown>
          </div>
          {/* <a
							className="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out mr-auto transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
							href="#"
						>
							Blog
						</a> */}
          <div className="order-last md:order-none"></div>

          <a
            href="https://www.linkedin.com/company/logspace-ai/"
            className="pr-2 mt-2 text-base hover:text-white transition duration-500  ease-in-out transform md:mt-0 md:ml-4"
          >
            <span className="sr-only">Linkedin</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[22px] h-[22px]"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>


          <a
            href="https://youtube.com/@logspace_ai"
            className="pr-2 mt-2 text-base hover:text-white transition duration-500  ease-in-out transform md:mt-0 md:ml-4"
          >
            <span className="sr-only">Youtube</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              height="800px"
              width="800px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 461.001 461.001"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728   c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137   C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607   c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                />
              </g>
            </svg>
          </a>

          <a
            href="https://twitter.com/logspace_ai"
            className="pr-2 mt-2 text-base hover:text-white transition duration-500  ease-in-out transform md:mt-0 md:ml-4"
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>

          <a
            href="https://github.com/logspace-ai/langflow"
            className="pr-2 mt-2 text-base hover:text-white transition duration-500  ease-in-out transform md:mt-0 md:ml-3"
          >
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#contact"
            title="Contact us"
            className="px-8 py-2 mt-2 text-base text-white transition duration-500  ease-in-out transform rounded-lg bg-cinder md:mt-0 md:ml-4 focus:text-moody hover:bg-tuna focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 shadow-thick"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
