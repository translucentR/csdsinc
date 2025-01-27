// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare global {
	interface Window {
		[key: `ga-disable-${string}`]: boolean;
		clarity?: {
			(command: 'consent', consent: boolean): void;
			(command: string): void;
		};
		initializeAnalytics?: () => void;
		gtag?: (
			command: 'js' | 'config' | 'event' | 'consent',
			action?: Date | string | 'update',
			options?: {
				cookie_flags?: string;
				cookie_domain?: string;
				analytics_storage?: 'granted' | 'denied';
				[key: string]: string | number | boolean | undefined;
			}
		) => void;
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

	/* eslint-disable-next-line no-var */
	var gtag: Window['gtag'];
}

export { };
