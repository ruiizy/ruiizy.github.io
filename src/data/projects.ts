export interface Project {
	title: string;
	description: string;
	tags: string[];
	link?: string;
	repo?: string;
}

export const projects: Project[] = [
	{
		title: 'Example project',
		description: '[Short project description — replace with your content in src/data/projects.ts.]',
		tags: ['Astro', 'TypeScript'],
		link: '#',
		repo: '#',
	},
];
