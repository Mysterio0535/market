import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '../page/MainPage';
import NoFoundPage from '../page/NoFoundPage';
import ProductPage from '../page/ProductPage';
import CartPage from '../page/CartPage';

Vue.use(Router);

const routes = [
  { name: 'main', component: MainPage, path: '/main/' },
  { name: 'ProductPage', component: ProductPage, path: '/product/:id' },
  { name: 'noFoundPage', component: NoFoundPage, path: '*' },
  { name: 'cart', component: CartPage, path: '/cart/' },
];

const router = new Router({
  routes,
});

export default router;
