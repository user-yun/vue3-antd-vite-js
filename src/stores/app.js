import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  let app = reactive({})

  let setApp = (data) => {
    app = data
  }

  return { app, setApp }
})
