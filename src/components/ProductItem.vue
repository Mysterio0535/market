<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{name: 'ProductPage', params: {id: product.id}}">
      <img :src="product.image" :alt="product.title" />
    </router-link>
    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>
    <span class="catalog__price">
      {{ product.price | numberFormat }} ₴
    </span>
    <ul class="colors colors--black">
      <ColorItem
        v-for="color in product.color"
        :key="color.value"
        :color="color"
        :input-id="`color-${product.id}-${color.value}`"
        :selected-color="selectedColor"
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
  props: ['product'],
  data() {
    return {
      selectedColor: '',
    };
  },
  methods: {
    updateSelectedColor(color) {
      this.selectedColor = color;
    },
  },
  filters: {
    numberFormat,
  },
};
</script>

        <!-- <li class="colors__item">
            <label class="colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                value="#73B6EA"
                v-model = "selectedColor"
              />
              <span class="colors__value" style="background-color: #73b6ea"> </span>
            </label>
          </li> -->

          <!-- <li class="colors__item">
            <label class="colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                value="#8BE000"
                v-model = "selectedColor"
              />
              <span class="colors__value" style="background-color: #8BE000"> </span>
            </label>
          </li>

          <li class="colors__item">
            <label class="colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                value="#222"
                v-model = "selectedColor"
              />
              <span class="colors__value" style="background-color: #222"> </span>
            </label>
          </li> -->
