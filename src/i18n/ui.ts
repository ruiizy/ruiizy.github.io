export const languages = {
	en: 'English',
	es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/**
 * Every string on the page, in the language it is written in. Job titles and
 * product names stay as they are — "AI Engineer", "Frontend", "LangGraph" read
 * the same in a Spanish CV as an English one, and translating them would be
 * more foreign, not less.
 */
const en = {
	meta: {
		title: 'Rafael Galvez Ruiz — AI Engineer',
		description:
			'Rafael Galvez Ruiz — AI Engineer in Sevilla. Multi-agent systems with LangGraph, LangChain and MCP.',
	},
	nav: {
		about: 'about',
		stack: 'stack',
		work: 'work',
		posts: 'posts',
		contact: 'contact',
		menu: 'Toggle menu',
		language: 'Language',
	},
	hero: {
		eyebrow: "hi, I'm",
		role: { key: 'role', value: 'AI Engineer' },
		at: { key: 'at', value: 'CaixaBank · AI Innovation' },
		bio: 'I build the bridge between high-performance frontend architectures and production-grade agentic AI — designing stateful multi-agent workflows with LangGraph, LangChain and MCP.',
		cta: 'see work',
	},
	about: {
		eyebrow: 'profile',
		title: 'About',
		lead: "Currently at CaixaBank's AI Innovation team, I design stateful multi-agent workflows using LangGraph, LangChain and Qdrant — turning complex PoCs into enterprise-ready products.",
		body: 'I standardize LLM communication across services with the Model Context Protocol (MCP), integrating GPT, Claude and local models into scalable backend pipelines. Before that, four years as a frontend developer (React, Angular) at NTT DATA and Softtek. Studying at Universitat Oberta de Catalunya.',
		track: {
			now: { when: 'now', what: 'Stateful multi-agent workflows' },
			before: { when: 'before', what: 'Frontend, four years' },
			study: { when: 'study', what: 'In progress' },
		},
	},
	skills: {
		eyebrow: 'toolbox',
		title: 'Stack',
		groups: { ai: 'AI / Agents', frontend: 'Frontend', backend: 'Backend' },
	},
	projects: {
		eyebrow: 'work',
		title: 'Projects',
		view: 'view',
		code: 'code',
	},
	posts: {
		eyebrow: 'journal',
		title: 'Posts',
		/** Marks a linked article written in the other language. */
		otherLanguage: 'Article in Spanish',
	},
	contact: {
		eyebrow: 'contact',
		title: 'Let’s talk',
		lead: 'Agents, MCP, frontend architecture — or just to say hi.',
	},
};

const es: typeof en = {
	meta: {
		title: 'Rafael Galvez Ruiz — AI Engineer',
		description:
			'Rafael Galvez Ruiz — AI Engineer en Sevilla. Sistemas multiagente con LangGraph, LangChain y MCP.',
	},
	nav: {
		about: 'perfil',
		stack: 'stack',
		work: 'trabajo',
		posts: 'posts',
		contact: 'contacto',
		menu: 'Abrir menú',
		language: 'Idioma',
	},
	hero: {
		eyebrow: 'hola, soy',
		role: { key: 'puesto', value: 'AI Engineer' },
		at: { key: 'en', value: 'CaixaBank · AI Innovation' },
		bio: 'Construyo el puente entre arquitecturas frontend de alto rendimiento e IA agéntica lista para producción — diseñando flujos multiagente con estado usando LangGraph, LangChain y MCP.',
		cta: 'ver trabajo',
	},
	about: {
		eyebrow: 'perfil',
		title: 'Sobre mí',
		lead: 'Actualmente en el equipo de AI Innovation de CaixaBank, diseño flujos multiagente con estado usando LangGraph, LangChain y Qdrant — convirtiendo PoCs complejas en productos listos para empresa.',
		body: 'Estandarizo la comunicación con LLMs entre servicios mediante el Model Context Protocol (MCP), integrando GPT, Claude y modelos locales en pipelines de backend escalables. Antes, cuatro años como desarrollador frontend (React, Angular) en NTT DATA y Softtek. Estudiando en la Universitat Oberta de Catalunya.',
		track: {
			now: { when: 'ahora', what: 'Flujos multiagente con estado' },
			before: { when: 'antes', what: 'Frontend, cuatro años' },
			study: { when: 'estudios', what: 'En curso' },
		},
	},
	skills: {
		eyebrow: 'herramientas',
		title: 'Stack',
		groups: { ai: 'IA / Agentes', frontend: 'Frontend', backend: 'Backend' },
	},
	projects: {
		eyebrow: 'trabajo',
		title: 'Proyectos',
		view: 'ver',
		code: 'código',
	},
	posts: {
		eyebrow: 'bitácora',
		title: 'Posts',
		otherLanguage: 'Artículo en inglés',
	},
	contact: {
		eyebrow: 'contacto',
		title: 'Hablamos',
		lead: 'Agentes, MCP, arquitectura frontend — o simplemente para saludar.',
	},
};

export const ui = { en, es } satisfies Record<Lang, typeof en>;
