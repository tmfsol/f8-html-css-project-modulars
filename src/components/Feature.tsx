import BlogIcon from '~/components/icons/BlogIcon';
import CustomerIcon from '~/components/icons/CustomerIcon';
import DocumentIcon from '~/components/icons/DocumentIcon';

const Feature = () => {
	return (
		<div className="mt-10 pb-32 pt-15">
			<div className="container">
				<h2 className="mx-auto w-[520px] text-center text-[2.625rem] font-semibold leading-[3.25rem] text-text-800">
					Share the features that help your customers
				</h2>
				<p className="mx-auto mt-5 w-[520px] text-center text-[1rem] font-medium leading-[1.625rem] text-text-200">
					You already know that the customer experience doesn&apos;t end with a sale — it&apos;s an ongoing work in
					progress that companies should be constantly seeking to improve and iterate on.
				</p>

				<div className="mt-26 flex justify-center gap-x-11">
					<a
						href="#!"
						className="flex w-[350px] cursor-pointer flex-col items-center justify-center rounded-[160px] border border-border-600 px-10 pb-19 pt-20 transition hover:-translate-y-15 hover:border-transparent hover:shadow-2xl"
					>
						<BlogIcon />
						<p className="mt-6 text-[1.25rem] font-semibold leading-[1.25rem] text-text-800">Documention</p>
						<p className="mt-2 line-clamp-4 text-center text-[0.875rem] font-medium leading-[1.5rem] text-text-200">
							We’ve researched numerous agencies and complied a list of digital marketing agency blogs you should read
							to stay ahead of your rivals and succeed online!
						</p>
					</a>
					<a
						href="#!"
						className="flex w-[350px] cursor-pointer flex-col items-center justify-center rounded-[160px] border border-border-600 px-10 pb-19 pt-20 transition hover:-translate-y-15 hover:border-transparent hover:shadow-2xl"
					>
						<DocumentIcon />
						<p className="mt-6 text-[1.25rem] font-semibold leading-[1.25rem] text-text-800">Blog</p>
						<p className="mt-2 line-clamp-4 text-center text-[0.875rem] font-medium leading-[1.5rem] text-text-200">
							In this article, we discuss the different types of documentation, what makes for great technical
							documentation, and provide examples.
						</p>
					</a>
					<a
						href="#!"
						className="flex w-[350px] cursor-pointer flex-col items-center justify-center rounded-[160px] border border-border-600 px-10 pb-19 pt-20 transition hover:-translate-y-15 hover:border-transparent hover:shadow-2xl"
					>
						<CustomerIcon />
						<p className="mt-6 text-[1.25rem] font-semibold leading-[1.25rem] text-text-800">Customers</p>
						<p className="mt-2 line-clamp-4 text-center text-[0.875rem] font-medium leading-[1.5rem] text-text-200">
							Your customers have high expectations — and if your business can&apos;t meet them, they&apos;re going to
							leave you for your competitors.
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Feature;
