export default function Blog(){
    return (
        <>
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
            </>
    )
}