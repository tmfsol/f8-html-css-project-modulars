import Button from '~/components/Button';

const Hero = () => {
	return (
		<section className="pb-40 pt-15">
			<div className="container">
				<div className="relative flex gap-x-[40px]">
					<div className="mt-11 w-[42%]">
						<h1 className="w-[368px] font-public-sans text-[3.125rem] font-extrabold leading-[3.75rem] text-text-800">
							We’re a creative design agency.
						</h1>
						<p className="mt-5 w-[340px] font-public-sans text-lg font-medium">
							A brilliant, modular agency template for startup’s build yours toady.
						</p>
						<div className="mt-10 flex items-center gap-x-9">
							<Button>Get in touch</Button>

							<div className="flex items-center gap-x-4">
								<div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-primary-400 outline outline-4 outline-offset-4">
									<div className="ml-1 h-0 w-0 border-b-[6px] border-l-[12px] border-t-[6px] border-b-transparent border-l-white border-t-transparent" />
								</div>
								<p className="text-lg font-semibold text-text-800">Watch Video</p>
							</div>
						</div>
					</div>

					<div className="relative flex w-[58%] flex-shrink-0 justify-end gap-x-5 pr-6 before:absolute before:left-[calc(50%-10rem-12px)] before:top-[calc(50%-10rem+80px)] before:h-80 before:w-80 before:rounded-full before:bg-primary-600 before:blur-[174px]">
						<img
							className="relative block h-[466px] w-[202px] rounded-b-full rounded-t-full object-cover"
							src="./assets/imgs/media-1.jpg"
							alt=""
						/>
						<img
							className="block h-[466px] w-[202px] translate-y-20 rounded-b-full rounded-t-full object-cover"
							src="./assets/imgs/media-2.jpg"
							alt=""
						/>
						<img
							className="relative block h-[466px] w-[202px] rounded-b-full rounded-t-full object-cover"
							src="./assets/imgs/media-3.jpg"
							alt=""
						/>
					</div>

					<img
						className="absolute -top-8 right-[298px]"
						src="./assets/imgs/decorate-line.png"
						alt=""
					/>

					<img
						className="absolute -top-[24px] left-[254px]"
						src="./assets/imgs/decorate-snowflakes.png"
						alt=""
					/>

					<img
						className="absolute -bottom-[144px] right-[70px] rotate-180"
						src="./assets/imgs/decorate-line.png"
						alt=""
					/>

					<img
						className="absolute -bottom-[138px] right-[27px]"
						src="./assets/imgs/decorate-snowflakes.png"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
