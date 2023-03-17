import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className=" w-full h-full bg-pearl overflow-x-hidden">
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
							href="#Products"
						>
							Products
						</a>

						<a
							className="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
							href="#"
						>
							Research
						</a>
						<a
							className="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
							href="#OpenSource"
						>
							Open Source
						</a>
						<a
							className="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
							href="#"
						>
							Company
						</a>
						<a
							className="px-4 py-2 mt-2 text-base transition duration-500 ease-in-out mr-auto transform bg-transparent rounded-lg text-magnesium lg:text-base md:mt-0 md:ml-4 hover:text-white focus:text-white hover:bg-pearl focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
							href="#"
						>
							Blog
						</a>
						<div className="order-last md:order-none"></div>
						<a
							href="https://github.com/logspace-ai"
							title="see us on github"
							className="px-8 py-2 mt-2 text-base text-white transition duration-500  ease-in-out transform rounded-lg bg-cinder md:mt-0 md:ml-4 focus:text-moody hover:bg-tuna focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 shadow-thick"
						>
							See our projects
						</a>
					</nav>
				</div>
			</header>
			<section className="relative w-full">
				<div className="relative items-center w-full px-5 py-20 mx-auto md:px-12 lg:px-16 max-w-7xl">
					<div className="flex w-full mx-auto text-left lg:mt-16">
						<div className="relative inline-flex items-center m-auto align-middle">
							<div className="max-w-3xl space-y-8 lg:text-center">
								<h1 className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl">
									Transforming the path to
									<span
										className="font-semibold 
                    bg-gradient-to-r  bg-clip-text text-transparent 
                    from-[#404AC7] via-[#28abcc] to-[#4338CA]
                    animate-text"
										style={{ animation: "text 5s ease infinite" }}
									>
										{" "}
										AI Integration{" "}
									</span>
								</h1>
								<p className="mb-6 text-xl font-light text-santa">
									Free and Premium themes, UI Kit's, templates and landing pages
									built with Tailwind CSS, HTML & Next.js.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className=" pb-8 px-5 pt-32 mx-auto max-w-7xl">
					<div className="flex w-full mx-auto text-left py-12">
						<div className="relative inline-flex items-center m-auto align-middle">
							<div className="max-w-3xl space-y-8 lg:text-center">
								<h2
									id="Products"
									className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl"
								>
									Products
								</h2>
								<p className="mb-6 text-xl font-light text-santa">
									Experience the benefits of intelligent technology and
									transform the way you work with our cutting-edge AI products,
									taking your business to the next level.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="overflow-hidden">
					<div
						className="py-6 lg:mx-auto lg:max-w-7xl lg:px-16 lg:py-32"
						data-aos="fade-left"
						data-aos-duration="2000"
					>
						<div className="lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-24">
							<div className="max-w-xl px-5 mx-auto sm:px-6 lg:py-16 lg:max-w-lg lg:mx-0 lg:px-0">
								<h1 className="max-w-4xl mt-24 text-5xl font-bold leading-none tracking-tighter text-white lg:text-5xl lg:max-w-xl">
									Langflow
								</h1>
								<p
									data-animate="subtitle"
									className="max-w-md mt-6 text-base text-santa sm:text-lg md:mt-5 md:max-w-xl"
								>
									LangFlow is a GUI for LangChain, designed with react-flow to
									provide an effortless way to experiment and prototype flows
									with drag-and-drop components and a chat box.
								</p>
								<div className="flex w-full max-w-2xl gap-2 mt-6">
									<div className="my-3 rounded-lg sm:mt-0">
										<a
											href="#"
											className="items-center block px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-majorelly lg:px-10 rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-thick"
										>
											Learn more
										</a>
									</div>
								</div>
							</div>
							<div className="mt-12 rounded-xl sm:mt-16 lg:mt-0">
								<div className="pl-5 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
									<img
										className="w-full shadow-thick rounded-2xl ring-1 ring-pearl ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
										src="langflow-demo.gif"
										alt="Inbox user interface"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="overflow-auto">
					<div className="py-12 lg:mx-auto lg:max-w-7xl lg:px-16 lg:py-32">
						<div
							data-aos="fade-right"
							className="lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-24"
						>
							<div className="mt-12 rounded-xl sm:mt-16 lg:mt-0 lg:col-span-2">
								<div className="pr-5 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
									<img
										className="w-full shadow-thick rounded-2xl ring-1 ring-pearl ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
										src="datacentric.png"
										alt="Inbox user interface"
									/>
								</div>
							</div>
							<div className="max-w-xl px-5 mx-auto sm:px-6 lg:py-16 lg:max-w-lg lg:mx-0 lg:px-0">
								<h1 className="max-w-4xl mt-24 text-5xl font-bold leading-none tracking-tighter text-white lg:text-5xl lg:max-w-xl">
									Datacentric
								</h1>
								<p className="max-w-md mt-6 text-base text-santa sm:text-lg md:mt-5 md:max-w-xl">
									Datacentric is a no-code AI platform that simplifies
									annotation and LLM model training. It streamlines data
									labeling and provides powerful tools to build custom language
									models.
								</p>
								<div className="flex w-full max-w-2xl gap-2 mt-6">
									<div className="my-3 rounded-lg sm:mt-0">
										<a
											href="#"
											className="items-center block px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-majorelly lg:px-10 rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-thick"
										>
											Learn more
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full" id="OpenSource">
				<div className="items-center px-5 py-12 lg:mx-auto lg:max-w-7xl lg:px-16 lg:py-32">
					<div className="flex w-full mx-auto text-left">
						<div className="relative inline-flex items-center mx-auto align-middle">
							<div className="max-w-3xl space-y-8 lg:text-center">
								<h1 className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl">
									Collaborate on
									<span className="text-iris whitespace-nowrap">
										{" "}
										open-source{" "}
									</span>
									AI projects with us.{" "}
								</h1>
								<p className="mb-6 text-xl font-light text-santa">
									Join our open-source community and collaborate on building
									cutting-edge AI projects together. Let's push the boundaries
									of what's possible and make a positive impact on the world.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="overflow-hidden">
					<div
						className="py-6 lg:mx-auto lg:max-w-7xl lg:px-16 lg:py-32"
						data-aos="fade-left"
						data-aos-duration="2000"
					>
						<div className="lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-24">
							<div className="max-w-xl px-5 mx-auto sm:px-6 lg:py-16 lg:max-w-lg lg:mx-0 lg:px-0">
								<h1 className="max-w-4xl mt-24 text-5xl font-bold leading-none tracking-tighter text-white lg:text-5xl lg:max-w-xl">
									Langflow
								</h1>
								<p
									data-animate="subtitle"
									className="max-w-md mt-6 text-base text-santa sm:text-lg md:mt-5 md:max-w-xl"
								>
									LangFlow is a GUI for LangChain, designed with react-flow to
									provide an effortless way to experiment and prototype flows
									with drag-and-drop components and a chat box.
								</p>
								<div className="flex w-full max-w-2xl gap-2 mt-6">
									<div className="my-3 rounded-lg sm:mt-0">
										<a
											href="#"
											className="items-center block px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-majorelly lg:px-10 rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-thick"
										>
											Learn more
										</a>
									</div>
								</div>
							</div>
							<div className="mt-12 rounded-xl sm:mt-16 lg:mt-0">
								<div className="pl-5 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
									<img
										className="w-full shadow-thick rounded-2xl ring-1 ring-pearl ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
										src="langflow-demo.gif"
										alt="Inbox user interface"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="py-12 lg:mx-auto lg:max-w-7xl lg:px-16 lg:py-32">
					<div className="flex flex-col w-full text-center lg:mb-12">
						<h2 className="mb-4 text-4xl font-bold leading-none text-white rou lg:rounded-t-mdnded-t-n">
							Research
						</h2>
						<strong className="w-full mx-auto mb-8 text-xl font-light text-center text-white text-opacity-60 lg:text-center">
							Research text
						</strong>
					</div>
					<div className="space-y-8">
						<div className="px-5 lg:px-0">
							<div className="mx-auto max-w-7xl">
								<div className="overflow-hidden rounded-2xl shadow-thick bg-cinder lg:grid lg:grid-cols-2 lg:gap-4">
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
												Legacy
											</h2>
											<p className="text-xl font-light text-white text-opacity-60">
												Legacy Shadow is a true real-time platform with no start
												of day files to reconcile or end of day files to post,
												we provide APIs for real-time interactions.
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
									<div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
										<img
											className="object-cover transform"
											src="dashboardSquare.png"
											alt="App screenshot"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="px-5 lg:px-0">
							<div className="mx-auto max-w-7xl">
								<div className="overflow-hidden rounded-2xl shadow-thick bg-cinder lg:grid lg:grid-cols-2 lg:gap-4">
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
												API
											</h2>
											<p className="text-xl font-light text-white text-opacity-60">
												Low-cost pricing to launch and scale your product with
												new revenue opportunities not previously available, and
												credits to help you get started.
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
									<div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
										<img
											className="object-cover transform"
											src="dashboardSquareTools.png"
											alt="App screenshot"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="px-5 lg:px-0">
							<div className="mx-auto max-w-7xl">
								<div className="overflow-hidden rounded-2xl shadow-thick bg-cinder lg:grid lg:grid-cols-2 lg:gap-4">
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
												Code
											</h2>
											<p className="text-xl font-light text-white text-opacity-60">
												No need for "testing in production", Shadow’s Sandbox
												environment is identical to production enabling you to
												build and launch faster.
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
									<div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
										<img
											className="object-cover transform"
											src="dashboardSquarePens.png"
											alt="App screenshot"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative items-center hidden w-full max-w-6xl px-5 py-12 mx-auto md:px-12 lg:px-16 lg:block">
						<div className="mx-auto">
							<div className="grid grid-cols-2 mx-auto lg:grid-cols-5">
								<div>
									<img className="h-12 mx-auto" src="logoOne.svg" alt="Figma" />
								</div>
								<div>
									<img
										className="h-12 mx-auto"
										src="logoTwo.svg"
										alt="Framer"
									/>
								</div>
								<div>
									<img
										className="h-12 mx-auto"
										src="logoThree.svg"
										alt="Sketch "
									/>
								</div>
								<div>
									<img
										className="h-12 mx-auto"
										src="logoFour.svg"
										alt="Sketch "
									/>
								</div>

								<div>
									<img
										className="h-12 mx-auto"
										src="logoFive.svg"
										alt="Invision"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="relative">
				<div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-12">
					<div className="relative py-10 overflow-hidden lg:px-6 sm:py-20">
						<div className="relative">
							<div className="">
								<span className="text-xs font-semibold tracking-tighter uppercase text-santa lg:text-2xl">
									{" "}
									Company{" "}
								</span>
								<h2 className="max-w-5xl mb-12 text-2xl font-bold leading-snug tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-majorelly via-fandango to-flamingo sm:text-4xl lg:max-w-5xl">
									Company text
								</h2>
							</div>
						</div>
						<div
							className="container flex flex-col justify-start my-10 overflow-hidden md:flex-row"
							x-data="{ testimonialActive: 2 }"
						>
							<div>
								<div className="relative flex flex-col h-full text-left">
									<div className="relative z-10 h-full">
										<div className="h-52">

											<div>
												<p className="max-w-md mx-auto mt-5 text-xl text-white sm:text-lg md:text-2xl md:max-w-2xl">
													second company text with members
												</p>
											</div>

											<div style={{ display: "none" }}>
												<p
													className="max-w-md mx-auto mt-5 text-xl text-white sm:text-lg md:text-2xl md:max-w-2xl"
													style={{ display: "none" }}
												>
													Just found a great template at @WickedTemplates :)
												</p>
											</div>
										</div>
										<div className="flex items-center justify-start mt-12 lg:my-4">
											<button className="inline-block w-12 h-12 mx-2 font-bold text-center rounded-full shadow-xs opacity-25 focus:outline-none focus:ring bg-trueGray-300 text-trueGray-600">
												<img
													className="inline-block w-12 h-12 rounded-full"
													src="https://d33wubrfki0l68.cloudfront.net/7d44e25909eeb00de6b393dda78c058bac682f8f/2f7e1/images/testimonials/dustin.jpg"
													alt="@terribledustin on twitter"
												/>
											</button>
											<button className="inline-block mx-2 font-bold text-center text-white rounded-full shadow-xs opacity-100 w-14 h-14 bg-trueGray-200 focus:outline-none focus:ring">
												<img
													className="inline-block w-12 h-12 rounded-full"
													src="https://d33wubrfki0l68.cloudfront.net/e5f690ffb55be77ece41b736b6d8f2f5c15e9734/04be3/images/testimonials/dom.jpg"
													alt="@dqmonn on twitter"
												/>
											</button>
											<button className="inline-block w-12 h-12 mx-2 font-bold text-center rounded-full shadow-xs opacity-25 focus:outline-none focus:ring bg-trueGray-300 text-trueGray-600">
												<img
													className="inline-block w-12 h-12 rounded-full"
													src="https://d33wubrfki0l68.cloudfront.net/9b654806a710dd47d5e98560f0a897bd3a8ec456/1730c/images/testimonials/blake.jpg"
													alt="@heyblake on twitter"
												/>
											</button>
										</div>
										<div className="flex justify-start px-4 pt-2 pb-6 text-left md:py-6 lg:px-0">
											<div
												className="text-left"
												x-show="testimonialActive == 1"
												style={{ display: "none" }}
											>
												<h2 className="text-sm font-bold leading-tight text-fandango md:text-base">
													Dustin McCaffree
												</h2>
												<a
													href="https://twitter.com/terribledustin"
													target="_blank"
													className="text-xs truncate text-santa md:text-sm"
												>
													@terribledustin.
												</a>
											</div>

											<div
												className="text-left"
												x-show="testimonialActive == 2"
											>
												<h2 className="text-sm font-bold leading-tight text-fandango md:text-base">
													Dom
												</h2>
												<a
													href="https://twitter.com/dqmonn"
													target="_blank"
													className="text-xs truncate text-santa md:text-sm"
												>
													@dqmonn.
												</a>
											</div>

											<div
												className="text-left"
												x-show="testimonialActive == 3"
												style={{ display: "none" }}
											>
												<h2 className="text-sm font-bold leading-tight text-fandango md:text-base">
													Blake Emal
												</h2>
												<a
													href="https://twitter.com/heyblake"
													target="_blank"
													className="text-xs truncate text-santa md:text-sm"
												>
													{" "}
													CMO @ Copy.ai{" "}
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="relative w-full">
				<div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
					<div className="flex w-full mx-auto text-left lg:mt-16">
						<div className="relative inline-flex items-center m-auto align-middle">
							<div className="space-y-8 max-w-7xl lg:text-center">
								<div className="items-start text-left lg:inline-flex">
									<div className="lg:pr-16">
										<h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white lg:text-5xl">
											Blog
										</h1>
									</div>
									<div>
										<p className="max-w-md mt-4 text-xl font-light text-santa md:max-w-xl lg:mt-0">
											Blog description
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="relative items-center w-full px-5 py-12 mx-auto lg:pb-12 lg:py-0 md:px-12 lg:px-16 max-w-7xl">
					<div className="relative rounded-xl bg-cinder lg:p-10">
						<div className="relative z-10 p-4 mx-auto max-w-7xl">
							<div className="max-w-md mx-auto space-y-4 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
								<div className="flex flex-col overflow-hidden rounded-xl">
									<div className="px-6 py-8 bg-pearl sm:p-10 sm:pb-6">
										<div>
											<h3
												className="inline-flex px-4 py-1 text-sm font-semibold tracking-wide uppercase text-santa"
												id="tier-plain"
											>
												Blog image with link
											</h3>
										</div>
										<div className="flex items-baseline mt-4 text-6xl font-extrabold text-white">
											$32
											<span className="ml-1 text-2xl font-medium text-santa">
												{" "}
												/mo{" "}
											</span>
										</div>
										<p className="mt-5 text-lg text-white">Features for all.</p>
									</div>
									<div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-pearl sm:p-10 sm:pt-6">
										<ul role="list" className="space-y-4">
											<li className="flex items-start">
												<div className="flex-shrink-0">
													{/* <!-- Heroicon name: outline/check --> */}
													<svg
														className="w-6 h-6 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M5 13l4 4L19 7"
														/>
													</svg>
												</div>
												<p className="ml-3 text-base text-santa">
													15 Templates + releases
												</p>
											</li>

											<li className="flex items-start">
												<div className="flex-shrink-0">
													{/* <!-- Heroicon name: outline/check --> */}
													<svg
														className="w-6 h-6 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M5 13l4 4L19 7"
														/>
													</svg>
												</div>
												<p className="ml-3 text-base text-santa">
													HTML & Next.js
												</p>
											</li>
										</ul>
										<div className="rounded-md shadow">
											<a
												href="#"
												className="items-center block px-8 py-2.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-white hover:text-majorelly"
												aria-describedby="tier-plain"
											>
												Buy Plain
											</a>
										</div>
									</div>
								</div>

								<div className="flex flex-col overflow-hidden border-2 rounded-xl border-majorelly">
									<div className="px-6 py-8 bg-pearl sm:p-10 sm:pb-6">
										<div>
											<h3
												className="inline-flex px-4 py-1 text-sm font-semibold tracking-wide uppercase text-santa"
												id="tier-plain"
											>
												Blog image with link
											</h3>
										</div>
										<div className="flex items-baseline mt-4 text-6xl font-extrabold text-white">
											$99
											<span className="ml-1 text-2xl font-medium text-santa">
												{" "}
												/mo{" "}
											</span>
										</div>
										<p className="mt-5 text-lg text-white">
											Yeah, more features.
										</p>
									</div>
									<div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-pearl sm:p-10 sm:pt-6">
										<ul role="list" className="space-y-4">
											<li className="flex items-start">
												<div className="flex-shrink-0">
													{/* <!-- Heroicon name: outline/check --> */}
													<svg
														className="w-6 h-6 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M5 13l4 4L19 7"
														/>
													</svg>
												</div>
												<p className="ml-3 text-base text-santa">
													15 Templates + releases
												</p>
											</li>

											<li className="flex items-start">
												<div className="flex-shrink-0">
													{/* <!-- Heroicon name: outline/check --> */}
													<svg
														className="w-6 h-6 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M5 13l4 4L19 7"
														/>
													</svg>
												</div>
												<p className="ml-3 text-base text-santa">
													HTML & Next.js
												</p>
											</li>

											<li className="flex items-start">
												<div className="flex-shrink-0">
													{/* <!-- Heroicon name: outline/check --> */}
													<svg
														className="w-6 h-6 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M5 13l4 4L19 7"
														/>
													</svg>
												</div>
												<p className="ml-3 text-base text-santa">
													Flexible license
												</p>
											</li>

											<li className="flex items-start">
												<div className="flex-shrink-0">
													{/* <!-- Heroicon name: outline/check --> */}
													<svg
														className="w-6 h-6 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														aria-hidden="true"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M5 13l4 4L19 7"
														/>
													</svg>
												</div>
												<p className="ml-3 text-base text-santa">Figma files</p>
											</li>
										</ul>
										<div className="rounded-md shadow">
											<a
												href="#"
												className="items-center block w-full px-8 py-3 mx-auto text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-majorelly lg:px-10 rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2"
												aria-describedby="tier-plain"
											>
												Buy Astronomic
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className="border-t border-tuna bg-cinder">
				<div className="px-5 py-4 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
					<div className="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
						<a href="https://www.linkedin.com/company/logspace-ai/" className="text-santa hover:text-white">
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

						<a href="mailto:contact@logspace.ai" className="text-santa hover:text-white">
							<span className="sr-only">Email</span>
							<svg
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 8 6"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
							</svg>
						</a>

						<a href="https://twitter.com/logspace_ai" className="text-santa hover:text-white">
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

						<a href="https://github.com/logspace-ai/langflow" className="text-santa hover:text-white">
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
					</div>

					<div className=" py-2 max-w-7xl sm:px-6">
						<div>
							<div className="text-white">
								<span className="text-lg font-bold lg:text-2xl">
									<div className="inline-flex items-center">
										<object
											className="w-9 h-9"
											type="image/svg+xml"
											data="/logo.svg"
										></object>
										Logspace
									</div>
								</span>
								<p className=" ml-3 -mt-2  text-sm text-santa">
									All rights reserved
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<script src="js/app.js"></script>
			<script
				src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
				defer
			></script>
			<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js"></script>
		</div>
	);
}

export default App;
