import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
	darkMode: 'class', // or 'media'
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			},
			colors: {
				blue: colors.sky,
				red: colors.rose,
				pink: colors.fuchsia,
				parker: {
					50: '#58f3e1',
					100: '#48d5c5',
					200: '#38b7a9',
					300: '#279a8c',
					400: '#177c70',
					500: '#075e54',
					600: '#05473f',
					700: '#042f2a',
					800: '#021815',
					900: '#000000'
				}
			},
			fontFamily: {
				sans: ['Graphik', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			},
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			borderRadius: {
				'4xl': '2rem'
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#4a4a4a',
						maxWidth: '100%',
						a: {
							color: '#3182ce',
							textDecoration: 'none',
							'&:hover': {
								color: '#2c5282'
							}
						},
						h1: {
							color: '#323232',
							marginTop: '0',
							marginBottom: '1rem'
						},
						h2: {
							color: '#4a4a4a',
							marginTop: '0',
							marginBottom: '0.75rem'
						},
						h3: {
							color: '#323232',
							marginTop: '0',
							marginBottom: '0.75rem'
						},
						h4: {
							color: '#4a4a4a',
							marginTop: '0',
							marginBottom: '0.5rem'
						},
						p: {
							marginTop: '0',
							marginBottom: '0.5rem'
						}
					}
				}
			}
		}
	},
	plugins: [
		plugin(({ addComponents }) => {
			const buttons = {
				'.btn': {
					padding: '.3rem 1rem',
					borderRadius: '.25rem',
					fontWeight: '600'
				},
				'.btn-blue': {
					backgroundColor: '#3490dc',
					color: '#fff',
					'&:hover': {
						backgroundColor: '#2779bd'
					},
					'&:active': {
						backgroundColor: '#2779bd'
					},
					'&.active': {
						backgroundColor: '#ddd',
						color: '#4a4a4a'
					}
				},
				'.btn-gray': {
					backgroundColor: '#e2e8f0',
					color: '#475569',
					'&:hover': {
						backgroundColor: '#cbd5e1'
					},
					'&:active': {
						backgroundColor: '#94A3B8'
					},
					'&.active': {
						backgroundColor: '#94A3B8',
						color: '#fff'
					}
				},
				'.btn-red': {
					backgroundColor: '#e3342f',
					color: '#fff',
					'&:hover': {
						backgroundColor: '#cc1f1a'
					}
				}
			}
			addComponents(buttons)
		}),
		require('windicss/plugin/filters'),
		require('windicss/plugin/forms'),
		require('windicss/plugin/aspect-ratio'),
		require('windicss/plugin/line-clamp'),
		require('windicss/plugin/typography')({
			className: 'nwp-prose',
			dartk: true,
			modifiers: ['DEFAULT', 'sm', 'lg', 'red']
		})
	]
})
