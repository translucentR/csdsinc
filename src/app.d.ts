// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare global {
	interface Window {
		turnstile: {
			render: (element: HTMLElement, options: {
				sitekey: string;
				theme?: 'light' | 'dark';
				callback?: (token: string) => void;
				'error-callback'?: () => void;
				'refresh-expired'?: 'auto' | 'manual' | 'never';
			}) => string;
			reset: (widgetId: string) => void;
			remove: (widgetId: string) => void;
		};
	}
}

export { };
