import Mosaic from "./mosaic";
import twitter1 from "../../assets/images/twitter-1.png";
import twitter2 from "../../assets/images/twitter-2.png";
import twitter3 from "../../assets/images/twitter-3.png";
import twitter4 from "../../assets/images/twitter-4.png";
import twitter5 from "../../assets/images/twitter-5.png";
import twitter6 from "../../assets/images/twitter-6.png";
import twitter7 from "../../assets/images/twitter-7.png";
import twitter8 from "../../assets/images/twitter-8.png";

export default function Community() {
	return (
		<section className="relative w-full">
			<div className="relative items-center w-full px-5 py-12 mx-auto lg:py-20 md:px-12 lg:px-16 max-w-7xl">
				<div className="flex w-full mx-auto text-left">
					<div className="relative inline-flex items-center m-auto align-middle">
						<div className="max-w-3xl space-y-8 lg:text-center">
							<h2 className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl">
								Hear the community
							</h2>
							<p className="mb-6 text-xl font-light text-chimney">
								See what the community is saying about LangFlow.
							</p>
						</div>
					</div>
				</div>

				<div className="py-6 lg:pt-12">
					<div className="max-w-xl mx-auto lg:max-w-7xl">
						<h2 className="sr-only">Hear the community</h2>
						<dl className="grid grid-cols-2 gap-4">
							<Mosaic image={twitter1} delay={0} />
                            <Mosaic image={twitter2} delay={300} />
                            <Mosaic image={twitter3} delay={600} />
                            <Mosaic image={twitter4} delay={900} />
							<Mosaic image={twitter5} delay={1200} />
                            <Mosaic image={twitter6} delay={1500} />
                            <Mosaic image={twitter7} delay={1800} />
                            <Mosaic image={twitter8} delay={2100} />
						</dl>
					</div>
				</div>
			</div>
		</section>
	);
}
