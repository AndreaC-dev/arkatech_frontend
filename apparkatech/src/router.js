import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';

import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Catalogo from './components/Catalogo.vue'
import ProductDetail from './components/ProductDetail.vue'
const routes = [{
  path: '/',
  name: 'root',
  component: Catalogo},
{
path: '/user/logIn',
name: "logIn",
component: LogIn
},
{
path: '/user/SignUp',
name: "signUp",
component: SignUp
},
{
  path: '/user/home',
  name: "home",
  component: Home
},
{
path: '/catalogo',
name: "catalogo",
component: Catalogo
},
  {
    path: '/product/:id/',
    name: 'productDetail',
    component: ProductDetail
  },
];
const router = createRouter({

    history: createWebHistory(),
    routes,
});


export default router;
