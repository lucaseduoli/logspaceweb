export default function Mosaic({title,body}:{title:string,body:string}){
    return(
        <div className="h-full p-6 bg-cinder lg:p-12 shadow-thick rounded-2xl">
								<dt className="space-y-8">
									<div className="flex items-center text-moody">
										<svg
											className="w-6 h-6"
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
												d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
											/>
										</svg>
									</div>

									<p className="text-xl text-white lg:text-2xl">{title}</p>
								</dt>
								<dd className="mt-2 text-xs lg:text-base text-santa">
									<span>
										{" "}
										{body}{" "}
									</span>
								</dd>
							</div>
    )
}