import Button from '~/components/Button';
import SectionTitle from '~/components/SectionTitle';

const Blog = () => {
	return (
		<section className="py-14">
			<div className="container">
				<div className="container flex justify-between">
					<SectionTitle title="BLOG & ARTICLES">Take a look at our latest articles and resources</SectionTitle>
					<p className="mt-14 w-[410px] text-[1rem] font-medium leading-[1.625rem] text-text-200">
						The best agency are the ones ideated with clients. we corporate your ideas with memorable
					</p>
				</div>

				<div className="mt-22 flex justify-between gap-x-[30px]">
					<article className="group w-[360px] rounded-[20px] pb-3 hover:shadow-xl">
						<figure className="h-[320px] overflow-hidden rounded-t-[20px]">
							<a href="#!">
								<img
									className="h-full w-full object-cover transition-all group-hover:scale-110"
									src="/assets/imgs/blog-1.jpg"
									alt=""
								/>
							</a>
						</figure>

						<div className="cursor-pointer transition-all group-hover:px-8">
							<Button
								className="mt-[26px] bg-primary-200 text-black hover:bg-primary-900 hover:text-white"
								size="sm"
							>
								STORIES
							</Button>
							<p className="mt-3 border-b-[1px] border-border pb-[38px] text-[1.125rem] font-semibold leading-[1.875rem] text-primary-900">
								What did we learn from nunning over 100 design sprints in less the year?
							</p>
							<p className="mt-4 text-right text-[0.625rem] font-medium leading-[0.75rem]">JANUARY 29, 2022</p>
						</div>
					</article>

					<article className="group w-[360px] rounded-[20px] pb-3 hover:shadow-xl">
						<figure className="h-[320px] overflow-hidden rounded-t-[20px]">
							<a href="#!">
								<img
									className="h-full w-full object-cover transition-all group-hover:scale-110"
									src="/assets/imgs/blog-2.jpg"
									alt=""
								/>
							</a>
						</figure>

						<div className="cursor-pointer transition-all group-hover:px-8">
							<Button
								className="mt-[26px] bg-primary-200 text-black hover:bg-primary-900 hover:text-white"
								size="sm"
							>
								STORIES
							</Button>
							<p className="mt-3 border-b-[1px] border-border pb-[38px] text-[1.125rem] font-semibold leading-[1.875rem] text-primary-900">
								The difference between the UI/UX design a simple guide for beginner’s
							</p>
							<p className="mt-4 text-right text-[0.625rem] font-medium leading-[0.75rem]">JANUARY 29, 2022</p>
						</div>
					</article>

					<article className="group w-[360px] rounded-[20px] pb-3 hover:shadow-xl">
						<figure className="h-[320px] overflow-hidden rounded-t-[20px]">
							<a href="#!">
								<img
									className="h-full w-full object-cover transition-all group-hover:scale-110"
									src="/assets/imgs/blog-3.jpg"
									alt=""
								/>
							</a>
						</figure>

						<div className="cursor-pointer transition-all group-hover:px-8">
							<Button
								className="mt-[26px] bg-primary-200 text-black hover:bg-primary-900 hover:text-white"
								size="sm"
							>
								STORIES
							</Button>
							<p className="mt-3 border-b-[1px] border-border pb-[38px] text-[1.125rem] font-semibold leading-[1.875rem] text-primary-900">
								How marketing can help your business more than anything.
							</p>
							<p className="mt-4 text-right text-[0.625rem] font-medium leading-[0.75rem]">JANUARY 29, 2022</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Blog;
