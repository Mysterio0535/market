<template>
  <li class="colors__item">
    <label class="colors__label form__label--color" >
      <input

        class="colors__radio sr-only"
        type="radio"
        value="color"
      />
       <!-- v-model="color" -->
      <span :style="{ backgroundColor: color.value }" class="colors__value"></span>
    </label>
  </li>
</template>

<script>

export default {
  props: {
    color: {
      type: Object,
      required: true,
    },
    inputId: {
      type: String,
      required: true,
    },
    selectedColor: {
      type: String,
      required: true,
    },
  },
};
</script>
