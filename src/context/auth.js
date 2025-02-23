import { atom, selector } from 'recoil';

export const userState = atom({
    key: "userState",
    default: {
        token: localStorage.getItem('token'),
    }
})

export const adminState = atom({
    key: "adminState",
    default: {
        token: localStorage.getItem('adminToken'),
    }
})

export const adminNameState = atom({
    key: "adminNameState",
    default: localStorage.getItem('adminName')
        ? JSON.parse(localStorage.getItem('adminName'))
        : ""
});



export const isAuthenticatedAdmin = selector({
    key: "isAuthenticatedAdmin",
    get: ({ get }) => {
        const { token } = get(adminState);
        return !!token; // Make it false if true and Vice Versa
    }
})

export const isAuthenticatedState = selector({
    key: "isAuthenticatedState",
    get: ({ get }) => {
        const { token } = get(userState);
        return !!token; // Make it false if true and Vice Versa
    }
})

