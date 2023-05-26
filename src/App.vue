<template>
  <component
  :is="currentPageComponent"
  :page-params="currentPageParams"
  />
  </template>

<script>
import MainPage from './page/MainPage.vue';
import ProductPage from './page/ProductPage.vue';
import NoFoundPage from './page/NoFoundPage.vue';
import eventBus from '@/eventBus';

const routes = {
  main: 'MainPage',
  product: 'ProductPage',
};

export default {
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {},
    };
  },
  methods: {
    gotoPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'NoFoundPage';
    },
  },
  components: { MainPage, ProductPage, NoFoundPage },

  created() {
    eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams));
  },
};

</script>
