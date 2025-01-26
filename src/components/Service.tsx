import ControlLeftIcon from '~/components/icons/ControlLeftIcon';
import ControlRightIcon from '~/components/icons/ControlRightIcon';
import SectionTitle from '~/components/SectionTitle';

const Service = () => {
	return (
		<section className="py-16">
			<div className="container">
				<div className="flex">
					<SectionTitle title="OUR SERVICES">We offer a wide range of design services</SectionTitle>
					<div className="ml-auto flex gap-x-4">
						<ControlLeftIcon />
						<ControlRightIcon />
					</div>
				</div>

				<div className="mt-19 flex gap-x-4">
					<article className="group cursor-pointer rounded-t-[20px]">
						<figure className="h-[318px] w-[370px] overflow-hidden rounded-t-[20px]">
							<a href="#!">
								<img
									className="h-full w-full object-cover transition-all hover:scale-110"
									src="/assets/imgs/service-1.jpg"
									alt=""
								/>
							</a>
						</figure>
						<section className="bg-white pb-6 transition-all group-hover:rounded-b-[20px] group-hover:px-[18px] group-hover:shadow-lg">
							<h3 className="mt-6 text-[1.375rem] font-semibold leading-[1.375rem] text-text-800">
								<a href="#!">Branding</a>
							</h3>
							<p className="mt-[18px] line-clamp-3 w-[268px] text-[0.875rem] font-medium leading-[1.5rem] text-text-200">
								Create beautiful Agency website with Boluethat converts more visitors than any website.
							</p>
						</section>
					</article>
					<article className="group cursor-pointer rounded-t-[20px]">
						<figure className="h-[318px] w-[370px] overflow-hidden rounded-t-[20px]">
							<a href="#!">
								<img
									className="h-full w-full object-cover transition-all hover:scale-110"
									src="/assets/imgs/service-2.jpg"
									alt=""
								/>
							</a>
						</figure>
						<section className="bg-white pb-6 transition-all group-hover:rounded-b-[20px] group-hover:px-[18px] group-hover:shadow-lg">
							<h3 className="mt-6 text-[1.375rem] font-semibold leading-[1.375rem] text-text-800">
								<a href="#!">Web Design</a>
							</h3>

							<p className="mt-[18px] line-clamp-3 w-[268px] text-[0.875rem] font-medium leading-[1.5rem] text-text-200">
								Create beautiful Agency website with Boluethat converts more visitors than any website. Create beautiful
								Agency website with Boluethat converts more visitors than any website.
							</p>
						</section>
					</article>
					<article className="group cursor-pointer rounded-t-[20px]">
						<figure className="h-[318px] w-[370px] overflow-hidden rounded-t-[20px]">
							<a href="#!">
								<img
									className="h-full w-full object-cover transition-all hover:scale-110"
									src="/assets/imgs/service-3.jpg"
									alt=""
								/>
							</a>
						</figure>
						<section className="bg-white pb-6 transition-all group-hover:rounded-b-[20px] group-hover:px-[18px] group-hover:shadow-lg">
							<h3 className="mt-6 text-[1.375rem] font-semibold leading-[1.375rem] text-text-800">
								<a href="#!">Graphic Design</a>
							</h3>
							<p className="mt-[18px] line-clamp-3 w-[268px] text-[0.875rem] font-medium leading-[1.5rem] text-text-200">
								Create beautiful Agency website with Boluethat converts more visitors than any website.
							</p>
						</section>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Service;
