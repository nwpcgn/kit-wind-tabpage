import { _page, _loading, sleep, _params } from './data'
export { _page, _loading, sleep, _params }


/* eslint-disable */
// @index(['./**/*.svelte'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}';`)
export { default as Button } from './Button.svelte';
export { default as MovieDetails } from './cre/MovieDetails.svelte';
export { default as MovieInfo } from './cre/MovieInfo.svelte';
export { default as MovieList } from './cre/MovieList.svelte';
export { default as HeroPage } from './HeroPage.svelte';
export { default as SettingsPage } from './SettingsPage.svelte';
export { default as BackBtn } from './tabpage/BackBtn.svelte';
export { default as SettingsBtn } from './tabpage/SettingsBtn.svelte';
export { default as TabBar } from './tabpage/TabBar.svelte';
export { default as TabPage } from './tabpage/TabPage.svelte';
// @endindex



