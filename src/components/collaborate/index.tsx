import langflow from "../../assets/gifs/langflow-demo.gif"

export default function Collaborate(){
    return (
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
										src={langflow}
										alt="Inbox user interface"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    )
}