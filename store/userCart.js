import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const userCart = defineStore('auth', {
    state: () => ({
        user: null,
        isAuth: false,
    }),
    actions: {
        
    },
})