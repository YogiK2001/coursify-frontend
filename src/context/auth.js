import { atom, selector } from 'recoil';

export const userState = atom({
    key: "userState",
    default: {
        token: localStorage.getItem('token'),
    }
})

export const isAuthenticatedState = selector({
    key: "isAuthenticatedState",
    get: ({ get }) => {
        const { token } = get(userState);
        return !!token; // Make it false if true and Vice Versa
    }
})