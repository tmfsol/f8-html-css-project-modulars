import FacebookIcon from '~/components/icons/FacebookIcon';
import TwitterIcon from '~/components/icons/TwitterIcon';

const Footer = () => {
	return (
		<footer className="mt-11 bg-primary-900 pb-24 pt-18">
			<div className="container">
				<div className="relative flex justify-between after:absolute after:-bottom-11 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-border after:to-transparent">
					<div className="w-[420px]">
						<p className="text-[2rem] font-medium leading-[3rem] text-white">Sign up for our newsletter</p>
						<div className="relative w-[354px]">
							<input
								className="mt-4 block w-full border-b border-b-border bg-transparent pb-8 text-[1.375rem] font-semibold leading-[1.375rem] text-primary-300 outline-none"
								type="text"
								placeholder="Enter your email"
							/>

							<svg
								className="absolute right-0 top-4 cursor-pointer"
								width={28}
								height={18}
								viewBox="0 0 28 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 9H27M27 9L18.3333 1M27 9L18.3333 17"
									stroke="#C4C4C4"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>

						<div className="mt-12 flex gap-x-5">
							<a
								className="bg-primary-800 flex h-13 w-13 items-center justify-center rounded-full border border-primary-500 hover:border-burnt-orange hover:bg-burnt-orange"
								href="#!"
							>
								<FacebookIcon />
							</a>
							<a
								className="bg-primary-800 flex h-13 w-13 items-center justify-center rounded-full border border-primary-500 hover:border-burnt-orange hover:bg-burnt-orange"
								href="#!"
							>
								<TwitterIcon />
							</a>
							<a
								className="bg-primary-800 flex h-13 w-13 items-center justify-center rounded-full border border-primary-500 hover:border-burnt-orange hover:bg-burnt-orange"
								href="#!"
							>
								<FacebookIcon />
							</a>
						</div>
					</div>

					<div className="flex gap-x-[50px] font-public-sans font-medium">
						<div>
							<h3 className="text-[1.125rem] leading-[1.75rem] text-white">Pages</h3>
							<ul>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Blog Post
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-[1.125rem] leading-[1.75rem] text-white">Pages</h3>
							<ul>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Blog Post
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-[1.125rem] leading-[1.75rem] text-white">Pages</h3>
							<ul>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Blog Post
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-[1.125rem] leading-[1.75rem] text-white">Pages</h3>
							<ul>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-[1rem] font-medium leading-[2.25rem] text-text-400 hover:underline"
									>
										Blog Post
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
