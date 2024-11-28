/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StateAdmin {
    token: string | null
    setToken:  (token: string)=> void
}

export const UseAdminStore = create<StateAdmin>()(
    persist(
        (set) => ({
            token: null,
            setToken: (token) => set({ token }),
        }),
        {
            name: 'adminVentas', // Clave del almacenamiento persistente
        }
    )
);

