import type { Localized } from '../i18n/utils';

export interface Project {
	title: string;
	description: Localized;
	tags: string[];
	link?: string;
	repo?: string;
}

export const projects: Project[] = [
	{
		title: 'Elmi Harness',
		description: {
			en: 'Terminal-based AI coding agent in Go, running Claude and local Ollama models through an OpenAI-compatible adapter. REPL with a permission state machine gating shell exec, file reads and writes.',
			es: 'Agente de código por terminal escrito en Go, que ejecuta modelos de Claude y de Ollama local a través de un adaptador compatible con OpenAI. REPL con una máquina de estados de permisos que controla la ejecución de shell y la lectura y escritura de ficheros.',
		},
		tags: ['Go', 'Claude API', 'Ollama', 'CLI'],
		repo: 'https://github.com/ruiizy/elmi-harness',
	},
];
