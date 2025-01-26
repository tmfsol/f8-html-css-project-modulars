import { twMerge } from '~/utils/tailwind';

export interface SectionTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
	title: string;
	decorateAfter?: boolean;
}

const SectionTitle = ({ children, className, title, decorateAfter = true, ...restProps }: SectionTitleProps) => {
	return (
		<div className={className}>
			<p
				className="text-medium relative ml-12 text-[1rem] leading-[1.125rem] text-text-800 before:absolute before:-left-12 before:top-[50%] before:block before:h-[1px] before:w-6 before:bg-text-800"
				{...restProps}
			>
				{title}
			</p>

			<h2
				className={twMerge('mt-3 w-[520px] text-[2.625rem] font-semibold leading-[3.25rem] text-text-800', {
					'relative after:absolute after:bottom-5 after:ml-6 after:h-[2px] after:w-[66px] after:bg-text-800':
						decorateAfter
				})}
			>
				{children}
			</h2>
		</div>
	);
};

export default SectionTitle;
