// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NaN',
			description: 'NaN micro-framework for PHP',
			expressiveCode: {
				tabWidth: 4,
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/AimForNaN',
				},
			],
			sidebar: [
				{
					label: 'Components',
					autogenerate: { directory: 'components' },
				},
			],
		}),
	],
});
