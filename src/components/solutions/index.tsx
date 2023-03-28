import npl from "../../assets/images/image1.jpg"
import tsf from "../../assets/images/image2.jpg"
import dpn from "../../assets/images/image3.jpg"

export default function Solutions() {
	return (
		<section>
			<div className="py-12 lg:mx-auto lg:max-w-7xl lg:px-16 lg:py-32">
				<div className="flex flex-col w-full text-center lg:mb-12">
					<h2 className="mb-8 text-6xl font-bold leading-none text-white lg:rounded-t-md">
						Solutions
					</h2>
					<strong className="w-full mx-auto mb-8 text-xl font-light text-center text-white text-opacity-60 lg:text-center">
						We <span className="font-bold">don't</span> support boxed
						machine-learning solutions. Take a look at some domains we're best
						at:
					</strong>
				</div>
				<div className="space-y-8">
					<div className="px-5 lg:px-0">
						<div className="mx-auto max-w-7xl">
							<div className="overflow-hidden rounded-2xl shadow-thick bg-cinder lg:grid lg:grid-cols-2">
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
											Natural Language Processing
										</h2>
										<p className="text-xl font-light text-white text-opacity-60">
											Explore the fastest growing field in the AI market.
											End-to-end pipelines for:
											<ul className="text-base list-disc align-top ml-5">
												<li>Document Classification / Clustering</li>
												<li>Sentiment Analysis</li>
												<li>Named Entity Recognition</li>
												<li> Conversational AI / Chatbots</li>
											</ul>
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
										src={npl}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="px-5 lg:px-0">
						<div className="mx-auto max-w-7xl">
							<div className="overflow-hidden rounded-2xl shadow-thick bg-cinder lg:grid lg:grid-cols-2">
								<div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
									<img
										className="object-cover transform"
										src={tsf}
										alt="App screenshot"
									/>
								</div>
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
											Time Series Forecasting
										</h2>
										<p className="text-xl font-light text-white text-opacity-60">
											We are the creators of Wavy, an open-source time series
											library that helps with preprocessing for multi-level
											forecasting.
											<ul className="text-base list-disc align-top ml-5">
												<li>Quantitative Research</li>
												<li>Portfolio Optimization</li>
												<li>Time Series Prediction</li>
												<li>Anomaly Detection</li>
											</ul>
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
								
							</div>
						</div>
					</div>
					<div className="px-5 lg:px-0">
						<div className="mx-auto max-w-7xl">
							<div className="overflow-hidden rounded-2xl shadow-thick bg-cinder lg:grid lg:grid-cols-2">
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
										Deep Neural Nets
										</h2>
										<p className="text-xl font-light text-white text-opacity-60">
										Creative ways to harness the power of state-of-the-art algorithms.
											<ul className="text-base list-disc align-top ml-5">
												<li>Transformers / Attention-Based Models</li>
												<li>Graph Neural Networks</li>
												<li>Reinforcement Learning</li>
												<li> Model Visualization / Explainability</li>
											</ul>
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
										src={dpn}
										alt="App screenshot"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
