<template>
  <div>
    <AppHeader />

    <router-view />

    <AppFooter />
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppHeader, AppFooter },
  async created() {
    const userAccessKey = localStorage.getItem('userAccessKey');
    if (userAccessKey) {
      this.updateUserAccessKey(userAccessKey);
    }
    try {
      await this.loadCart();
    } catch (error) {
      alert('Ошибка при загрузке корзины');
    }
  },

  methods: {
    ...mapActions(['loadCart']),
    ...mapMutations(['updateUserAccessKey']),
  },
};

</script>
