import { defaultLang, ui, type Lang } from './ui';

/** The default locale has no prefix, so `/` is English and `/es/` is Spanish. */
export function toLang(locale: string | undefined): Lang {
	return locale === 'es' ? 'es' : defaultLang;
}

export function copy(lang: Lang) {
	return ui[lang];
}

export function otherLang(lang: Lang): Lang {
	return lang === 'es' ? 'en' : 'es';
}

/** Root-relative home of a locale. Single-page site, so this is the whole map. */
export function homeOf(lang: Lang): string {
	return lang === defaultLang ? '/' : `/${lang}/`;
}

/** A localized string a data record carries in both languages. */
export type Localized = Record<Lang, string>;
