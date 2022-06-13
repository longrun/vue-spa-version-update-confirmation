import { NavigationGuardNext } from 'vue-router'
import { useVersionStore } from '@/store/version'

export const checkVersion = (next: NavigationGuardNext): void => {
  const versionManager = useVersionStore()
  versionManager.latest = '0.0.2'
  versionManager.deliveredAt = new Date()
  next()
}
