import { ButtonHTMLAttributes, useRef } from 'react';
import { useHoverDirty } from 'react-use';

import { twMerge } from '~/utils/tailwind';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'sm' | 'md' | 'lg';
}

const Button = ({ children, className, size = 'md', ...restProps }: ButtonProps) => {
	const ref = useRef(null);
	const hovered = useHoverDirty(ref);

	return (
		<button
			ref={ref}
			className={twMerge('rounded-full bg-primary px-13 py-4 text-lg font-medium text-white', className, {
				'px-8 py-2 text-[0.625rem] leading-[0.7rem]': size === 'sm',
				'bg-primary-200 text-black': hovered
			})}
			{...restProps}
		>
			{children}
		</button>
	);
};

export default Button;
