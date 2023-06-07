<template>
  <label class="form__label" :for="`${title}-field`">
    <slot></slot>
    <span class="form__value">{{ title }}</span>
    <span class="form__error" v-if="error">{{ error }}</span>
  </label>
</template>

<script>
export default {
  props: ['title', 'error'],
  computed: {
  },
};
</script>
