import { defineStore } from 'pinia'
import { version, name } from '../../package.json'

export const useVersionStore = defineStore('version', {
  state: () => {
    return {
      current: version as string,
      latest: null as unknown as string,
      timestamp: null as unknown as number,
    }
  },

  getters: {},

  actions: {
    isAvailableNewApp() {
      if (this.latest === null) return false
      return this.current !== this.latest
    },

    restore() {
      const stuff = localStorage.getItem(`${name}--latestversion`)
      if (stuff) {
        const obj = JSON.parse(stuff)
        this.latest = obj.version || null
        this.timestamp = obj.timestamp || null
      }
    },
    save() {
      localStorage.setItem(
        `${name}--latestversion`,
        JSON.stringify({ version: this.latest, timestamp: new Date().getTime() }),
      )
    },
  },
})
