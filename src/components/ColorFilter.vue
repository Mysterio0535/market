<template>
  <fieldset class="form__block">
    <legend class="form__legend">Цвет</legend>
    <ul class="colors">
      <li class="colors__item" v-for="color in uniqueColors" :key="color.id">
        <label class="colors__label" :for="'color-' + color.id">
          <input class="colors__radio sr-only" type="radio" name="color" :id="'color-' + color.id" :value="color"
            :checked="selectedColor === color.id" @change="selectColor(color)">
          <span class="colors__value" :style="{ backgroundColor: color.code }"></span>
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
  computed: {
    uniqueColors() {
      const unique = [];
      const map = new Map();
      if (Array.isArray(this.colors)) {
        this.colors.forEach((color) => {
          if (!map.has(color.code)) {
            map.set(color.code, color);
            unique.push(color);
          }
        });
      }
      return unique;
    },
  },
  methods: {
    selectColor(color) {
      this.$emit('input', color.id);
      this.$emit('updateSelectedColor', color.id);
    },

    async loadColors() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/api/colors`);
        this.colors = response.data.items;
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
