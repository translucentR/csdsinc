export { };

declare global {
    interface Window {
        keapForms: {
            SNIPPET_VERSION: string;
            appId: string;
            renderAllForms?: () => void;
            invoked?: boolean;
        };
    }
} 