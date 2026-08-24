export interface Project {
	title: string;
	description: string;
	tags: string[];
	link?: string;
	repo?: string;
}

export const projects: Project[] = [
	{
		title: 'Elmi Harness',
		description:
			'Terminal-based AI coding agent in Go, running Claude and local Ollama models through an OpenAI-compatible adapter. REPL with a permission state machine gating shell exec, file reads and writes.',
		tags: ['Go', 'Claude API', 'Ollama', 'CLI'],
		repo: 'https://github.com/ruiizy/elmi-harness',
	},
	{
		title: 'Purchase System',
		description:
			'Microservices-based purchase platform split into inventory, order and notification services, modeling a distributed e-commerce checkout flow.',
		tags: ['Python', 'Microservices'],
		repo: 'https://github.com/ruiizy/purchase-system',
	},
];
