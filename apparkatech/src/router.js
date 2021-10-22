import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import ProductDetail from './components/ProductDetail.vue'
const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/product/productDetail',
    name: 'productDetail',
    component: ProductDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
