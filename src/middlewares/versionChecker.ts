import axios from 'axios'
import { NavigationGuardNext } from 'vue-router'
import { useVersionStore } from '@/store/version'

export const checkVersion = async (next: NavigationGuardNext) => {
  const versionManager = useVersionStore()
  versionManager.restore()

  // cache enable only 10 minutes
  if (versionManager.latest === null || versionManager.timestamp + 1000 * 60 * 10 < Date.now()) {
    const url = `${location.origin}/latestversion.json`
    const res = await axios.get(url)
    versionManager.$patch((state) => {
      state.latest = res.data.version
      state.timestamp = Date.now()
    })
    versionManager.save()
  }

  next()
}
