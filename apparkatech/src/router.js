import { createRouter, createWebHistory } from "vue-router";
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Catalogo from './components/Catalogo.vue'
import ProductDetail from './components/ProductDetail.vue'
import Order from "./components/Order.vue"
import AllOrders from "./components/AllOrders.vue"

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
  path: '/home',
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
{
  path: '/order/:id_u/:id_o/',
  name: 'order',
  component: Order
},
{
  path: '/allorders/',
  name: 'allorders',
  component: AllOrders
}
];
const router = createRouter({

    history: createWebHistory(),
    routes,
});


export default router;
