import { twMerge } from '~/utils/tailwind';

export interface SectionTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
	title?: string;
	decorateAfter?: boolean;
	color?: string;
	decorateColor?: string;
}

const SectionTitle = ({
	children,
	className,
	title,

	decorateAfter = true,
	color = 'text-text-800',
	decorateColor = 'after:bg-text-800',
	...restProps
}: SectionTitleProps) => {
	return (
		<div className={className}>
			{title && (
				<p
					className="text-medium relative ml-12 text-[1rem] leading-[1.125rem] text-text-800 before:absolute before:-left-12 before:top-[50%] before:block before:h-[1px] before:w-6 before:bg-text-800"
					{...restProps}
				>
					{title}
				</p>
			)}

			{/* after:bg-primary-900 */}
			<h2
				className={twMerge(`w-[520px] text-[2.625rem] font-semibold leading-[3.25rem] ${color}`, {
					'mt-3': !!title,
					[`relative after:absolute after:bottom-5 after:ml-6 after:h-[2px] after:w-[66px] ${decorateColor}`]:
						decorateAfter
				})}
			>
				{children}
			</h2>
		</div>
	);
};

export default SectionTitle;
