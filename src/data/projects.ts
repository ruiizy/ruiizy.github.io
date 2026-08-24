export interface Project {
	title: string;
	description: string;
	tags: string[];
	link?: string;
	repo?: string;
}

export const projects: Project[] = [
	{
		title: 'Proyecto ejemplo',
		description: 'Descripcion corta del proyecto. Edita este array en src/data/projects.ts.',
		tags: ['Astro', 'TypeScript'],
		link: '#',
		repo: '#',
	},
];
