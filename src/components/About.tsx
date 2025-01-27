import SectionTitle from '~/components/SectionTitle';

const About = () => {
	return (
		<section
			className="pb-10 pt-21"
			id="about"
		>
			<div className="container">
				<div className="relative flex justify-between">
					<div className="relative mt-22 flex gap-x-5 before:absolute before:left-[calc(50%-160px)] before:top-[calc(50%-160px)] before:h-80 before:w-80 before:rounded-full before:bg-primary-600 before:blur-[174px]">
						<img
							className="relative h-[480px] w-[284px] rounded-full object-cover"
							src="./assets/imgs/about-1.jpg"
							alt=""
						/>
						<img
							className="h-[480px] w-[284px] -translate-y-19 rounded-full object-cover"
							src="./assets/imgs/about-2.jpg"
							alt=""
						/>

						<div className="absolute -right-[8px] bottom-[8px] rounded-lg bg-white p-4 font-public-sans text-[0.625rem] leading-[0.875rem] shadow-lg">
							<p className="text-[0.875rem] font-semibold text-text-800">All Desingners</p>
							<p className="mt-[6px]">Total Balance</p>
							<div className="mt-[10px]">
								<p className="font-medium leading-[0.875rem] text-text-800">40%</p>
								<div className="relative mt-[3px] h-[2px] w-24 bg-text-50 before:block before:h-full before:w-[40%] before:bg-text-400 after:absolute after:right-0 after:top-[3px] after:inline-block after:font-medium after:leading-[0.875rem] after:text-text-800 after:content-['Loading...']" />
							</div>

							<div className="mt-5 h-3 w-3 rounded-[50%] border-[3px] border-text-50 bg-primary-900" />
							<div className="mt-[5px] flex items-center justify-between">
								<p className="text-text-800">Teams:</p>
								<div className="flex">
									<a
										href="#!"
										className="-ml-[6px]"
									>
										<img
											className="block h-4 w-4 rounded-full border border-white object-cover"
											src="./assets/imgs/team-1.jpg"
											alt=""
										/>
									</a>
									<a
										href="#!"
										className="-ml-[6px]"
									>
										<img
											className="block h-4 w-4 rounded-full border border-white object-cover"
											src="./assets/imgs/team-2.jpg"
											alt=""
										/>
									</a>
									<a
										href="#!"
										className="-ml-[6px]"
									>
										<img
											className="block h-4 w-4 rounded-full border border-white object-cover"
											src="./assets/imgs/team-3.jpg"
											alt=""
										/>
									</a>
									<a
										href="#!"
										className="-ml-[6px]"
									>
										<img
											className="block h-4 w-4 rounded-full border border-white object-cover"
											src="./assets/imgs/team-4.jpg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
					<section className="w-[486px]">
						<SectionTitle
							title="ABOUT US"
							decorateAfter={false}
						>
							We are an extention of your creative team
						</SectionTitle>
						<p className="mt-3 text-[1rem] font-medium leading-[1.625rem] text-text-200">
							At the start of every project, we cusomizea detailed project plan together with you set exectationns
							ensure alighment and define key milestones and deiverbles.
						</p>

						<div className="mt-9 flex border-b border-primary-400 pb-5">
							<p className="text-[2.625rem] font-semibold leading-[3.25rem] text-text-800">48%</p>
							<p className="ml-6 text-[0.875rem] font-medium leading-[1.5rem] text-text-200">
								Are you strive for two things in design simplicity and clarity. Great design is born of those two things
							</p>
						</div>
						<div className="mt-9 flex border-b border-primary-400 pb-5">
							<p className="text-[2.625rem] font-semibold leading-[3.25rem] text-text-800">25%</p>
							<p className="ml-6 text-[0.875rem] font-medium leading-[1.5rem] text-text-200">
								Are you strive for two things in design simplicity and clarity. Great design is born of those two things
							</p>
						</div>
					</section>

					<img
						className="absolute -top-[26px] left-[82px]"
						src="./assets/imgs/decorate-line.png"
						alt=""
					/>
					<img
						className="absolute -top-[20px] left-[40px]"
						src="./assets/imgs/decorate-snowflakes.png"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
