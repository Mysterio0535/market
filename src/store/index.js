import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/data/products';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
    userAccessKey: null,
    cartProductsData: [],
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
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
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

    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey;
    },
    updateCartProductsData(state, items) {
      state.cartProductsData = items;
    },
    syncCartProducts(state) {
      if (Array.isArray(state.cartProductsData)) {
        state.cartProducts = state.cartProductsData.map((items) => ({
          // return {
          productId: items.product.id,
          amount: items.quantity,
          // };
        }));
      } else {
        state.cartProducts = [];
      }
    },
  },

  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => ({
        ...item,
        product: products.find((p) => p.id === item.productId),
      }));
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce(
        (acc, item) => item.product.price * item.amount + acc,
        0,
      );
    },
  },
  actions: {
    loadCart(context) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/api/baskets`, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
        .then((response) => {
          if (!context.state.userAccessKey) {
            localStorage.setItem('userAccessKey', response.data.user.accessKey);
            context.commit('updateUserAccessKey', response.data.user.accessKey);
          }
          context.commit('updateCartProductsData', response.data.user.items);
          context.commit('syncCartProducts');
        });
    },
  },
});
