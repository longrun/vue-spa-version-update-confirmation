import { defineStore } from 'pinia'
import { version } from '../../package.json'

export const useVersionStore = defineStore('version', {
  state: () => {
    return {
      current: version as string,
      latest: null as unknown as string,
      deliveredAt: null as unknown as Date,
    }
  },

  getters: {},

  actions: {
    isSameVersion() {
      return this.current === this.latest
    },
  },
})
