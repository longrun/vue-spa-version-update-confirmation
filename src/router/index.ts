import VueRouter from "vue-router";
import { checkVersion } from "../middlewares/versionChecker";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [],
});

router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  checkVersion(next);
});
