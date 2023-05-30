<template>
  <li class="colors__item">
    <label class="colors__label form__label--color" :for="inputId">
      <input
        :id="inputId"
        class="colors__radio sr-only"
        type="radio"
        :value="color.value"
        :checked="isSelected"
        @change="selectColor"
      />
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
  computed: {

    isSelected() {
      return this.color.value === this.selectedColor;
    },
  },
  methods: {
    selectColor() {
      this.$emit('select-color', this.color.value);
    },
  },
};
</script>
