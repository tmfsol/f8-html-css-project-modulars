import { ButtonHTMLAttributes } from 'react';

import { twMerge } from '~/utils/tailwind';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...restProps }: ButtonProps) => {
	return (
		<button
			className={twMerge(className, 'rounded-full bg-primary px-13 py-4 text-lg font-medium text-white')}
			{...restProps}
		>
			{children}
		</button>
	);
};

export default Button;
