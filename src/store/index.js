import Vue from 'vue';
import Vuex from 'vuex';
import products from '../data/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [
      { productId: 1, amount: 2 },
    ],
  },
  mutations: {
    addProductToCart(state, { productId, amount }) {
      const foundItem = state.cartProducts.find((cartItem) => cartItem.productId === productId);
      if (foundItem) {
        foundItem.amount += amount;
      } else {
        state.cartProducts.push({
          productId,
          amount,
        });
      }
    },
    updateCartProductAmount(state, { productId, amount }) {
      const foundItem = state.cartProducts.find((cartItem) => cartItem.productId === productId);
      if (foundItem) {
        foundItem.amount = amount;
      }
    },
    deleteCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId)
    }
  },
  incrementCartItem(state, productId) {
    const foundItem = state.cartProducts.find((cartItem) => cartItem.productId === productId);
    if (foundItem) {
      foundItem.amount += 1;
    }
  },
  decrementCartItem(state, productId) {
    const foundItem = state.cartProducts.find((cartItem) => cartItem.productId === productId);
    if (foundItem) {
      foundItem.amount -= 1;
      if (foundItem.amount <= 0) {
        state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
      }
    }
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map(item => {
        return {
          ...item,
          product:products.find(p => p.id === item.productId)
        }
      });
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce((acc, item) => (item.product.price * item.amount) + acc, 0);

    }
  }
});
