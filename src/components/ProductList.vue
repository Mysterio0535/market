<template>
  <ul class="catalog__list">
    <ProductItem
    v-for="product in products" :key="product.id"
    :product="product" @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"
    ></ProductItem>
  </ul>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  components: { ProductItem },
  props: ['products'],
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
          </li>

          <li class="colors__item">
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
        <!-- </ul> -->

