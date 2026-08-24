export interface Post {
	title: string;
	excerpt: string;
	date: string;
	link?: string;
}

export const posts: Post[] = [
	{
		title: 'React Compound Pattern: mejorando la interconectividad de los componentes',
		excerpt:
			'Cómo el Compound Pattern conecta componentes hijos a un estado y lógica compartidos por el padre, para construir menús desplegables, acordeones y pestañas cohesivos y mantenibles.',
		date: 'Jul 2024',
		link: 'https://medium.com/@ruiizy/react-compound-pattern-mejorando-la-interconectividad-de-los-componentes-14274c2f1c4d',
	},
];
