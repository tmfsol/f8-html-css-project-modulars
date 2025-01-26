import SectionTitle from '~/components/SectionTitle';

const Process = () => {
	console.log('Process');

	return (
		<div className="py-10">
			<div className="container">
				<SectionTitle
					className="mt-9"
					title="OUR PROCESS"
				>
					A simple ,yet effective three step process
				</SectionTitle>

				<div className="mt-20">
					<div className="relative flex justify-between rounded-[32px] bg-primary-200 px-8 pb-6 pt-10">
						<div className="flex flex-1 items-center">
							<p className="w-28 text-[4.5rem] font-semibold leading-[3.25rem] text-text-800">01.</p>
							<div className="ml-16 mt-4">
								<p className="text-[1.375rem] font-semibold leading-[1.375rem] text-text-800">Project idea</p>
								<a
									className="mt-[22px] block underline underline-offset-2"
									href="#!"
								>
									Learn More
								</a>
							</div>
						</div>
						<img
							className="absolute bottom-0 right-23 h-[450px] w-[440px] object-cover"
							src="/assets/imgs/process-1.png"
							alt=""
						/>
					</div>

					<div className="flex justify-between border-b border-border px-8 pb-6 pt-10">
						<div className="flex flex-1 items-center">
							<p className="w-28 text-[4.5rem] font-semibold leading-[3.25rem] text-text-800">02.</p>
							<div className="ml-16 mt-4">
								<p className="text-[1.375rem] font-semibold leading-[1.375rem] text-text-800">Brainstormaing</p>
							</div>
						</div>
						<p className="w-[572px] font-public-sans text-[1.125rem] font-medium leading-[1.75rem] text-text-200">
							We customse a ensure aligment and difine key mileones and defiverables experience tells us the best
							solutions are the ones deated with clients.
						</p>
					</div>

					<div className="flex justify-between border-b border-border px-8 pb-6 pt-10">
						<div className="flex flex-1 items-center">
							<p className="w-28 text-[4.5rem] font-semibold leading-[3.25rem] text-text-800">03.</p>
							<div className="ml-16 mt-4">
								<p className="text-[1.375rem] font-semibold leading-[1.375rem] text-text-800">Execution</p>
							</div>
						</div>
						<p className="w-[572px] font-public-sans text-[1.125rem] font-medium leading-[1.75rem] text-text-200">
							We customse a ensure aligment and difine key mileones and defiverables experience tells us the best
							solutions are the ones deated with clients.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Process;
