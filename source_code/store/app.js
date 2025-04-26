import { defineStore } from 'pinia'


export const useAppStore = defineStore('app', { //useAppstore存取區塊函式命名，存取區名稱app
    state: () => ({
      client : null,
      commandActionMap: null,
    }),
    getters: {},
    actions: {},
  })
  