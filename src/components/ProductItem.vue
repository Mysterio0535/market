<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{ name: 'ProductPage', params: { id: product.id } }">
      <img :src="product.image" :alt="product.title" style="object-fit: contain" />
    </router-link>
    <h3 class="catalog__title">
      <router-link :to="{ name: 'ProductPage', params: { id: product.id } }">
        {{ product.title }}
      </router-link>
    </h3>

    <span class="catalog__price">
      {{ product.price | numberFormat }} ₴
    </span>

    <ul class="colors colors--black">
      <ColorItem
        v-for="color in product.colors"
        :key="color.id"
        :color="color"
        :input-id="`color-${product.id}-${color.id}`"
        :selected-color-id="selectedColorId"
        @select-color="updateSelectedColor"
      />
    </ul>
  </li>
</template>

<script>
import ColorItem from '@/components/ColorItem.vue';
import numberFormat from '@/helpers/numberFormat';

export default {
  components: {
    ColorItem,
  },
  props: ['product', 'colorFilter'],
  data() {
    return {
      selectedColorId: 0,
    };
  },
  methods: {
    updateSelectedColor(colorId) {
      this.selectedColorId = colorId;
    },
  },
  filters: {
    numberFormat,
  },
};
</script>
