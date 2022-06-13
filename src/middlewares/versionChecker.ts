import { NavigationGuardNext } from 'vue-router'

export const checkVersion = (next: NavigationGuardNext): void => {
  next()
}
