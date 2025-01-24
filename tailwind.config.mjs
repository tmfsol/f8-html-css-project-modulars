import containerQueries from '@tailwindcss/container-queries';
import fluid, { extract } from 'fluid-tailwind';
import debugScreens from 'tailwindcss-debug-screens';
import motion from 'tailwindcss-motion';

const tailwindConfig = {
	content: {
		files: ['./src/**/*.{js,ts,jsx,tsx}'],
		extract
	},
	darkMode: 'class',

	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			'public-sans': ['"Public Sans"', 'sans-serif']
		},

		colors: {
			inherit: 'inherit',
			current: 'currentColor',
			transparent: 'transparent',
			black: '#000',
			white: '#fff',

			primary: {
				DEFAULT: 'rgba(var(--color-primary-default))',
				50: 'rgba(var(--color-primary-50))',
				200: 'rgba(var(--color-primary-200))',
				300: 'rgba(var(--color-primary-300))',
				400: 'rgba(var(--color-primary-400))',
				600: 'rgba(var(--color-primary-600))',
				900: 'rgba(var(--color-primary-900))'
			},

			'burnt-orange': {
				DEFAULT: 'rgba(var(--color-burnt-orange-default))',
				500: 'rgba(var(--color-burnt-orange-500))'
			},

			text: {
				DEFAULT: 'rgba(var(--color-text-default))',
				200: 'rgba(var(--color-text-200))',
				400: 'rgba(var(--color-text-400))',
				500: 'rgba(var(--color-text-500))',
				800: 'rgba(var(--color-text-800))'
			},

			border: {
				DEFAULT: 'rgba(var(--color-border-default))',
				500: 'rgba(var(--color-border-500))'
			}
		},

		fontSize: {
			// https://fluid.tw/#limitations, 1rem = 16px, convert px to rem follow concept of fluid-tailwind
			// import { fontSize } from 'fluid-tailwind';
			xs: ['0.75rem', '1rem'], // font-size: 12px, line-height: 16px
			sm: ['0.875rem', '1.25rem'], // font-size: 14px, line-height: 20px
			base: ['1rem', '1.5rem'], // font-size: 16px, line-height: 24px
			lg: ['1.125rem', '1.75rem'], // font-size: 18px, line-height: 28px
			xl: ['1.25rem', '1.75rem'], // font-size: 20px, line-height: 28px
			'2xl': ['1.5rem', '2rem'], // font-size: 24px, line-height: 32px
			'3xl': ['1.875rem', '2.25rem'], // font-size: 30px, line-height: 36px
			'4xl': ['2.25rem', '2.5rem'], // font-size: 36px, line-height: 40px
			'5xl': ['3rem', '3rem'], // font-size: 48px, line-height: 48px
			'6xl': ['3.75rem', '3.75rem'], // font-size: 60px, line-height: 60px
			'7xl': ['4.5rem', '4.5rem'], // font-size: 72px, line-height: 72px
			'8xl': ['6rem', '6rem'], // font-size: 96px, line-height: 96px
			'9xl': ['8rem', '8rem'] // font-size: 128px, line-height: 128px
		},

		screens: {
			// https://fluid.tw/#limitations, 1rem = 16px, convert px to rem follow concept of fluid-tailwind
			// import {  screens } from 'fluid-tailwind';
			xs: '30rem', // 480px
			sm: '40rem', // 640px
			md: '48rem', // 768px
			lg: '64rem', // 1024px
			xl: '80rem', // 1280px
			'2xl': '96rem', // 1536px
			'3xl': '120rem' // 1920px
		},

		containers: {
			// https://github.com/tailwindlabs/tailwindcss-container-queries?tab=readme-ov-file#configuration
			xs: '20rem', // (min-width: 20rem /* 320px */)
			sm: '24rem', // (min-width: 24rem /* 384px */)
			md: '28rem', // (min-width: 28rem /* 448px */)
			lg: '32rem', // (min-width: 32rem /* 512px */)
			xxl: '36rem', // (min-width: 36rem /* 576px */)
			'2xl': '42rem', // (min-width: 42rem /* 672px */)
			'3xl': '48rem', // (min-width: 48rem /* 768px */)
			'4xl': '56rem', // (min-width: 56rem /* 896px */)
			'5xl': '64rem', // (min-width: 64rem /* 1024px */)
			'6xl': '72rem', // (min-width: 72rem /* 1152px */)
			'7xl': '80rem' // (min-width: 80rem /* 1280px */)
		},

		extends: {}
	},
	plugins: [fluid, motion, debugScreens, containerQueries]
};

export default tailwindConfig;
