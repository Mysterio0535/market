import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/page/MainPage.vue';
import NoFoundPage from '@/page/NoFoundPage.vue';
import ProductPage from '@/page/ProductPage.vue';
import CartPage from '@/page/CartPage.vue';
import OrderInfoPage from '@/page/OrderInfoPage.vue';
import OrderPage from '@/page/OrderPage.vue';

Vue.use(Router);

const routes = [
  { name: 'main', component: MainPage, path: '/main' },
  { name: 'ProductPage', component: ProductPage, path: '/product/:id' },
  { name: 'noFoundPage', component: NoFoundPage, path: '*' },
  { name: 'cart', component: CartPage, path: '/cart' },
  { name: 'order', component: OrderPage, path: '/order' },
  { name: 'succes', component: OrderInfoPage, path: '/succes' },
];

const router = new Router({
  routes,
});

export default router;
