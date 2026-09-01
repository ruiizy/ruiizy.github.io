import type { Lang } from '../i18n/ui';
import type { Localized } from '../i18n/utils';

export interface Post {
	title: Localized;
	excerpt: Localized;
	date: string;
	/** Language the linked article itself is written in, flagged to readers of the other. */
	lang: Lang;
	link?: string;
}

export const posts: Post[] = [
	{
		title: {
			en: 'React Compound Pattern: improving how components connect',
			es: 'React Compound Pattern: mejorando la interconectividad de los componentes',
		},
		excerpt: {
			en: 'How the Compound Pattern wires child components to state and logic shared by the parent, to build cohesive, maintainable dropdowns, accordions and tabs.',
			es: 'Cómo el Compound Pattern conecta componentes hijos a un estado y lógica compartidos por el padre, para construir menús desplegables, acordeones y pestañas cohesivos y mantenibles.',
		},
		date: 'Jul 2024',
		lang: 'es',
		link: 'https://medium.com/@ruiizy/react-compound-pattern-mejorando-la-interconectividad-de-los-componentes-14274c2f1c4d',
	},
];
