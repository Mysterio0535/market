<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img :src="item.product.image"
      width="120"
      height="120"
      srcset="img/phone-square-3@2x.jpg 2x"
      :alt="item.product.title">
    </div>
    <h3 class="product__title">
      {{ item.product.title }}
    </h3>
    <span class="product__code">
      Артикул: {{ item.product.id }}
    </span>

    <div class="product__counter form__counter">
      <button type="button" aria-label="Убрать один товар" @click="decrementProduct">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>

      <label for="countInput">
        <input type="text" v-model.number="localAmount" name="count" id="countInput">
      </label>

      <button type="button" aria-label="Добавить один товар" @click="incrementProduct">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>

    <b class="product__price">
      {{ item.product.price * item.amount | numberFormat }} ₽
    </b>

    <button class="product__del button-del"
    type="button"
    aria-label="Удалить товар из корзины"
    @click="deleteProduct(item.productId)">

      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import { mapMutations } from 'vuex';

export default {
  filters: { numberFormat },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localAmount: this.item.amount,
    };
  },
  methods: {
    ...mapMutations(['updateCartProductAmount', 'deleteCartProduct']),
    incrementProduct() {
      this.updateCartProductAmount({
        productId: this.item.productId,
        amount: this.item.amount + 1,
      });
    },
    decrementProduct() {
      if (this.item.amount > 1) {
        this.updateCartProductAmount({
          productId: this.item.productId,
          amount: this.item.amount - 1,
        });
      } else {
        this.deleteCartProduct(this.item.productId);
      }
    },
    deleteProduct(productId) {
      this.deleteCartProduct(productId);
    },
  },
};
</script>
