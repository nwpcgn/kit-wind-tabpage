import adapter from '@sveltejs/adapter-static'
const dev = process.argv.includes('dev')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),
		paths: {
			base: dev ? '' : '/rivera-page'
		}
	}
}

export default config
