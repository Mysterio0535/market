<template>
  <li class="catalog__item">

        <a class="catalog__pic" href="#">
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
          <li class="colors__item">
            <label class="colors__label" for="color-item">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-1"
                value="#73B6EA"
                checked=""
                id="color-item"
              />
              <span class="colors__value" style="background-color: #73b6ea"> </span>
            </label>
          </li>
          <li class="colors__item">
            <label class="colors__label" for="color-radio">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-1"
                value="#8BE000"
                id="color-radio"
              />
              <span class="colors__value" style="background-color: #8be000"> </span>
            </label>
          </li>
          <li class="colors__item">
            <label class="colors__label" for="color-radio-sec">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-1"
                value="#222"
                id="color-radio-sec"
              />
              <span class="colors__value" style="background-color: #222"> </span>
            </label>
          </li>
        </ul>
      </li>
</template>

<script>

export default {
  props: ['product'],
};
</script>
