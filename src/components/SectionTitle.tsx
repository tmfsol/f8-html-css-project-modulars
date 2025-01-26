export interface SectionTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const SectionTitle = ({ children }: SectionTitleProps) => {
	return (
		<p className="text-medium relative ml-12 text-[1rem] leading-[1.125rem] text-text-800 before:absolute before:-left-12 before:top-[50%] before:block before:h-[1px] before:w-6 before:bg-text-800">
			{children}
		</p>
	);
};

export default SectionTitle;
