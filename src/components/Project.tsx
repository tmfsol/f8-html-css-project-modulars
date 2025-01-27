import SectionTitle from '~/components/SectionTitle';

const Project = () => {
	console.log('Project');

	return (
		<div className="mt-27 bg-primary-900 py-16">
			<div className="container">
				<div className="mt-13">
					<div className="flex items-center justify-between">
						<SectionTitle
							className="w-[460px]"
							color="text-white"
							decorateColor="after:bg-primary-400"
						>
							A quick glance of our past projects
						</SectionTitle>

						<div className="w-[590px] font-public-sans text-[1.125rem] leading-[1.75rem]">
							<p className="font-medium text-primary-300">
								Are you strive for the fast project simplicity and clarity. Great design is born of those two things.
							</p>
							<div className="mt-3 flex items-center font-medium">
								<a
									className="text-white"
									href="#!"
								>
									Browse all Projects
								</a>
								<svg
									className="ml-6"
									width="22"
									height="12"
									viewBox="0 0 22 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 6.29415H21M21 6.29415L15.7059 1.00003M21 6.29415L15.7059 11"
										stroke="#80A07B"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-16 overflow-hidden rounded-[22px]">
					<iframe
						className="aspect-video w-full"
						src="https://www.youtube.com/embed/ovNIpx_I8lE"
						title="Hello Youtube, mình là Tí - một Software Engineer"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
			</div>
		</div>
	);
};

export default Project;
