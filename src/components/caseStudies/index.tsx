import Mosaic from "./mosaic";

export default function CaseStudies() {
	return (
		<section className="relative w-full">
			<div className="relative items-center w-full px-5 py-12 mx-auto lg:py-32 md:px-12 lg:px-16 max-w-7xl">
				<div className="flex w-full mx-auto text-left">
					<div className="relative inline-flex items-center m-auto align-middle">
						<div className="max-w-3xl space-y-8 lg:text-center">
							<h2 className="mb-4 text-4xl font-bold leading-none text-white lg:text-6xl">
								Hear our clients
							</h2>
							<p className="mb-6 text-xl font-light text-santa">
								Our clients' satisfaction is our top priority. See what they
								have to say about their experience with us. Browse our
								testimonials now.
							</p>
						</div>
					</div>
				</div>

				<div className="py-6 lg:py-12">
					<div className="max-w-xl mx-auto lg:max-w-7xl">
						<h2 className="sr-only">Hear our clients</h2>
						<dl className="grid grid-cols-2 gap-4 lg:grid-cols-3">
							<Mosaic title="title" body="body"/>
                            <Mosaic title="title" body="body"/>
                            <Mosaic title="title" body="body"/>
                            <Mosaic title="title" body="body"/>
                            <Mosaic title="title" body="body"/>
                            <Mosaic title="title" body="body"/>
						</dl>
					</div>
				</div>
			</div>
		</section>
	);
}
