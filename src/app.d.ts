// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare global {
	interface Window {
		[key: `ga-disable-${string}`]: boolean;
		clarity?: {
			(command: 'consent', consent: boolean): void;
			(command: 'set', key: string, value: string): void;
			(command: 'identify', userId: string, sessionId?: string, pageId?: string, userHint?: string): void;
			(command: string, ...args: unknown[]): void;
			q?: unknown[];
		};
		initializeAnalytics?: () => void;
		gtag?: (
			command: 'js' | 'config' | 'event' | 'consent',
			action?: Date | string | 'update' | 'default',
			options?: {
				cookie_flags?: string;
				cookie_domain?: string;
				analytics_storage?: 'granted' | 'denied';
				ad_storage?: 'granted' | 'denied';
				wait_for_update?: number;
				cookie_update?: boolean;
				first_party_collection?: boolean;
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
