export default function Head(){
    return (
        <section className="relative w-full">
				<div className="relative items-center w-full px-5 py-20 mx-auto md:px-12 lg:px-16 max-w-7xl">
					<div className="flex w-full mx-auto text-left lg:mt-16">
						<div className="relative flex flex-col items-center m-auto align-middle">
							<div className="max-w-3xl space-y-8 lg:text-center">
								<h1 className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl">
									Transforming the path to
									<span
										className="font-semibold 
                    bg-gradient-to-r  bg-clip-text text-transparent 
                    from-[#64abb8] via-[#475dc2] to-[#5b51c4]
                    animate-text"
									>
										{" "}
										AI Integration{" "}
									</span>
								</h1>
								<p className="mb-6 text-xl font-light text-santa">
                               AI solutions powered by state-of-the-art technologies, with pipelines that start from research all the way up to deployment.
								</p>
							</div>
                            <div className="flex w-full max-w-2xl gap-2 mt-6 lg:justify-center lg:mx-auto">
                <div className="my-3 rounded-lg sm:mt-0">
                  <a href="https://wicked-templates.gumroad.com/l/theshadow" className="items-center block px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-majorelly lg:px-10 rounded-xl hover:bg-gov focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-thick">
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <a href="#allpages" className="shadow-thick items-center block px-8 py-2.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-white hover:text-majorelly">
                    Contact sales
                  </a>
                </div>
              </div>
						</div>
					</div>
				</div>
			</section>
    )
}