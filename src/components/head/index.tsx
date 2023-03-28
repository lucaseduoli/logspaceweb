import woohoo from '../../assets/partners/woohoo logo.png';
import bitvore from '../../assets/partners/bitvore logo.png';
import ifood from '../../assets/partners/ifood logo.png';
import sapiens from '../../assets/partners/sapiens logo.png';

export default function Head() {
	return (
		<section className="relative w-full">
			<div className="relative items-center w-full px-5 py-32 mx-auto md:px-12 lg:px-16 max-w-7xl">
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
								AI solutions powered by state-of-the-art technologies, with
								pipelines that start from research all the way up to deployment.
							</p>
						</div>
						<div className="flex w-full max-w-2xl gap-2 mt-6 lg:justify-center lg:mx-auto"></div>
					</div>
				</div>
			</div>
			<div className="relative items-center hidden w-full max-w-6xl px-5 py-12 mx-auto md:px-12 lg:px-16 lg:block">
						<div className="mx-auto">
							<div className="grid grid-cols-2 mx-auto lg:grid-cols-4">
								<div>
									<img
										className="h-12 mx-auto"
										src={woohoo}
										alt="Framer"
									/>
								</div>
								<div>
									<img
										className="h-12 mx-auto"
										src={bitvore}
										alt="Sketch "
									/>
								</div>
								<div>
									<img
										className="h-12 mx-auto"
										src={ifood}
										alt="Sketch "
									/>
								</div>

								<div>
									<img
										className="h-12 mx-auto"
										src={sapiens}
										alt="Invision"
									/>
								</div>
							</div>
						</div>
					</div>
		</section>
	);
}
