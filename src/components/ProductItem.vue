<template>
  <li class="catalog__item">

        <a class="catalog__pic" href="#" @click.prevent="$emit('gotoPage', 'product', { id: product.id } )">
          <img :src="product.image" :alt="product.title" />
        </a>

        <h3 class="catalog__title">
          <a href="#">
            {{ product.title }}
          </a>
        </h3>

        <span class="catalog__price">
          {{ product.price }}
        </span>

        <ul class="colors colors--black">
          <ColorItem v-for="color in product.color"
        :key="color.id"
        :color="color"
        :input-id="'color-' + product.id + '-' + color.id"
        :selected-color="selectedColor"/>
        
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
        </ul>
      </li>
</template>

<script>
import ColorItem from './ColorItem.vue';

export default {
  components: {
    ColorItem,
  },
  data() {
    return {
      selectedColor: 'selectedColor',
    };
  },
  props: ['product']
};
</script>
