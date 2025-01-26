import { useRef } from 'react';
import { useHoverDirty } from 'react-use';

const ControlLeftIcon = () => {
	const ref = useRef(null);
	const hovered = useHoverDirty(ref);

	const fill = hovered ? '#143c3c' : '#e2eddf';
	const stroke = hovered ? '#fff' : '#152427';

	return (
		<svg
			ref={ref}
			width={54}
			height={54}
			viewBox="0 0 54 54"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			cursor={hovered ? 'pointer' : 'default'}
		>
			<circle
				cx={27}
				cy={27}
				r={27}
				transform="matrix(-1 0 0 1 54 0)"
				fill={fill}
			/>
			<path
				d="M37 27.8235H17M17 27.8235L22.2941 22M17 27.8235L22.2941 33"
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ControlLeftIcon;
