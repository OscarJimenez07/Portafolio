import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Inicio', component: () => import('../views/Inicio.vue') },
  { path: '/sobre-mi', name: 'SobreMi', component: () => import('../views/SobreMi.vue') },
  { path: '/experiencia', name: 'Experiencia', component: () => import('../views/Experiencia.vue') },
  { path: '/habilidades', name: 'Habilidades', component: () => import('../views/Habilidades.vue') },
  { path: '/proyectos', name: 'Proyectos', component: () => import('../views/Proyectos.vue') },
  { path: '/contacto', name: 'Contacto', component: () => import('../views/Contacto.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
