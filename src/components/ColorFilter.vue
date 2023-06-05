<template>
  <fieldset class="form__block">
    <legend class="form__legend">Цвет</legend>
    <ul class="colors">
      <li class="colors__item" v-for="color in colors" :key="color.id">
        <label class="colors__label" :for="'color-' + color.id">
          <input class="colors__radio sr-only" type="radio" name="color" :id="'color-' + color.id" :value="color.value"
            :checked="selectedColor === color.value" @change="selectColor(color.value)">
          <span class="colors__value" :style="{ backgroundColor: colors.code }"></span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    selectedColor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      colors: [],
    };
  },
  methods: {
    selectColor(colorValue) {
      if (this.selectedColor === colorValue) {
        this.$emit('updateSelectedColor', '');
      } else {
        this.$emit('updateSelectedColor', colorValue);
      }
    },
    async loadColors() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/api/colors`);
        this.colors = response.data;
      } catch (error) {
        console.error('Не удалось загрузить цвета:', error);
      }
    },
  },
  created() {
    this.loadColors();
  },
};
</script>
