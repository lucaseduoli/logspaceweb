export default function Company(){
    return (
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
    )
}