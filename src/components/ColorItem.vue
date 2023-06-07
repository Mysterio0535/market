<template>
  <li class="colors__item">
    <label class="colors__label form__label--color" :for="inputId">
      <input :id="inputId" class="colors__radio sr-only" type="radio" :value="color.id" :checked="isSelected"
        @change="selectColor" />
      <span class="colors__value" :style="{ backgroundColor: color.code }">
        <!-- {{ color.code }} -->
      </span>
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
    selectedColorId: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  computed: {
    isSelected() {
      return this.color.id === this.selectedColorId;
    },
  },
  methods: {
    selectColor() {
      this.$emit('select-color', this.color.id);
    },
  },
};
</script>
