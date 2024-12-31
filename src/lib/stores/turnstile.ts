import { writable } from 'svelte/store';

type TurnstileState = {
    token: string | null;
    error: string | null;
    visible: boolean;
};

function createTurnstileStore() {
    const { subscribe, set, update } = writable<TurnstileState>({
        token: null,
        error: null,
        visible: false
    });

    return {
        subscribe,
        showTurnstile: () => update(state => ({ ...state, visible: true })),
        setToken: (token: string) => update(state => ({ ...state, token, error: null })),
        setError: (error: string) => update(state => ({ ...state, error, token: null })),
        reset: () => set({ token: null, error: null, visible: false })
    };
}

export const turnstileStore = createTurnstileStore(); 