import { ButtonHTMLAttributes } from 'react';

import { twMerge } from '~/utils/tailwind';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'sm' | 'md' | 'lg';
}

const Button = ({ children, className, size = 'md', ...restProps }: ButtonProps) => {
	return (
		<button
			className={twMerge('rounded-full bg-primary px-13 py-4 text-lg font-medium text-white', className, {
				'px-8 py-2 text-[0.625rem] leading-[0.7rem]': size === 'sm'
			})}
			{...restProps}
		>
			{children}
		</button>
	);
};

export default Button;
