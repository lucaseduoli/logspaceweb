import Dropdown from "../dropdown";

const company = [
    { name: 'About us', href: '#', description: 'Learn more about our company values and mission to empower others' },
    { name: 'Careers', href: '#', description: 'Looking for you next career opportunity? See all of our open positions' },
    {
      name: 'Support',
      href: '#',
      description: 'Get in touch with our dedicated support team or reach out on our community forums',
    },
    { name: 'Blog', href: '#', description: 'Read our latest announcements and get perspectives from our team' },
  ]

  const openSource = [
    { name: 'Install', href: '#', description: 'Download, install, and start labeling in 10 minutes.' },
    {
      name: 'Github',
      href: '#',
      description: 'Explore our project on Github.',
    },
    { name: 'Community', href: '#', description: 'Join our Slack community and connect with contributors and Label Studio users.' },
  ]

export default function HeaderComponent(){
    return (
        <header className="w-full text-gray-400 border-b bg-pearl border-cinder">
				<div className="flex flex-col w-full px-4 mx-auto bg-bunker md:items-center md:justify-between md:flex-row md:px-6 lg:px-16 max-w-7xl">
					<div className="flex flex-row items-center justify-between py-2 lg:py-0">
						<a
							href="#"
							className="text-lg rounded-lg focus:outline-none focus:shadow-outline m-2"
						>
							<div className="inline-flex items-center gap-1">
								<object
									className="w-9 h-9"
									type="image/svg+xml"
									data="/logo.svg"
								></object>
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
						<div
							className="px-4 py-2 mt-2 text-base bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
						>
						<Dropdown items={openSource}>
							Open Source
						</ Dropdown>
						</div>

						<a
							className="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
							href="#"
						>
							Research
						</a>
						
						<div
							className="px-4 py-2 mt-2 text-base mr-auto bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
						>
						<Dropdown items={company}>
							Company	
						</ Dropdown>
						</div>
						{/* <a
							className="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out mr-auto transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
							href="#"
						>
							Blog
						</a> */}
						<div className="order-last md:order-none"></div>
						<a
							href="https://github.com/logspace-ai"
							title="See us on Github"
							className="px-8 py-2 mt-2 text-base text-white transition duration-500  ease-in-out transform rounded-lg bg-cinder md:mt-0 md:ml-4 focus:text-moody hover:bg-tuna focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 shadow-thick"
						>
							See our projects
						</a>
					</nav>
				</div>
			</header>
    )
}