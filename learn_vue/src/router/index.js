import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "../views/HelloWorld.vue"
import ReactivityView from "../views/ReactivityView.vue"
import BindView from "../views/BindView.vue"
import VModel from "../views/VModel.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/first",
      name:"HelloWorld",
      component: HelloWorld,
    },
    {
      path:"/reactivity",
      name:"reactivity",
      component: ReactivityView,
    },
      {
      path:"/bind",
      name:"bind",
      component: BindView,
    },
    {
      path:"/model",
      name:"model",
      component: VModel,
    },

  ]
})

export default router
