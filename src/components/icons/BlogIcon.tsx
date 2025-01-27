const BlogIcon = () => {
	return (
		<svg
			width={40}
			height={38}
			viewBox="0 0 40 38"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<rect
				width={40}
				height={38}
				fill="url(#pattern0_0_126)"
			/>
			<mask
				id="mask0_0_126"
				style={{ maskType: 'alpha' }}
				maskUnits="userSpaceOnUse"
				x={0}
				y={0}
				width={40}
				height={38}
			>
				<rect
					width={40}
					height={38}
					fill="url(#pattern1_0_126)"
				/>
			</mask>
			<g mask="url(#mask0_0_126)">
				<rect
					x={1}
					y={1}
					width={39}
					height={35}
					fill="#143C3C"
				/>
			</g>
			<defs>
				<pattern
					id="pattern0_0_126"
					patternContentUnits="objectBoundingBox"
					width={1}
					height={1}
				>
					<use
						xlinkHref="#image0_0_126"
						transform="matrix(0.00219727 0 0 0.00231291 0 -0.0789474)"
					/>
				</pattern>
				<pattern
					id="pattern1_0_126"
					patternContentUnits="objectBoundingBox"
					width={1}
					height={1}
				>
					<use
						xlinkHref="#image0_0_126"
						transform="matrix(0.00219727 0 0 0.00231291 0 -0.0789474)"
					/>
				</pattern>
				<image
					id="image0_0_126"
					width={512}
					height={512}
					xlinkHref="data:image/png;base64,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"
				/>
			</defs>
		</svg>
	);
};

export default BlogIcon;
