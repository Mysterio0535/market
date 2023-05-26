<template>
  <aside class="filter">
        <h2 class="filter__title">Фильтры</h2>

        <form class="filter__form form" action="#" method="get" @submit.prevent="submit">
          <fieldset class="form__block">
            <legend class="form__legend">Цена</legend>
            <label class="form__label form__label--price" for="111">

              <input class="form__input"
              type="text" name="min-price"
              v-model.number="currentPriceFrom"
              id="111">

              <span class="form__value">От</span>
            </label>
            <label class="form__label form__label--price" for="112">

              <input class="form__input"
              type="text" name="max-price"
              v-model.number="currentPriceTo"
              id="112">

              <span class="form__value">До</span>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Категория</legend>
            <label class="form__label form__label--select"
            for="123">
              <select class="form__select" type="text" name="category" v-model="currentCategoryId"
              id="123">
                <option value="0">Все категории</option>

                <option :value="category.id"
                v-for="category in categories" :key="category.id">
                {{ category.title }}
              </option>

              </select>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Цвет</legend>
            <ul class="colors">
              <li class="colors__item" :for="'color-' + color.id"  v-for="color in colors" :key="color">
                <label class="colors__label" >

                  <input class="colors__radio sr-only"
                  type="radio"
                  name="color"
                  :value="color"
                  v-model="selectedColors"
                  :id="'color-' + color.id">

                  <span class="colors__value"> {{ color }}
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="125">

                  <input class="colors__radio sr-only"
                  type="radio"
                  name="color"
                  value="#FFBE15"
                  id="125">

                  <span class="colors__value" style="background-color: #FFBE15;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="126">

                  <input class="colors__radio sr-only"
                  type="radio"
                  name="color"
                  value="#939393"
                  id="126">

                  <span class="colors__value" style="background-color: #939393;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="127">

                  <input class="colors__radio sr-only"
                  type="radio"
                  name="color"
                  value="#8BE000"
                  id="127">

                  <span class="colors__value" style="background-color: #8BE000;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="128">

                  <input class="colors__radio sr-only"
                  type="radio"
                  name="color"
                  value="#FF6B00"
                  id="128">

                  <span class="colors__value" style="background-color: #FF6B00;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="129">

                  <input class="colors__radio sr-only"
                  type="radio"
                  name="color"
                  value="#FFF"
                  id="129">

                  <span class="colors__value" style="background-color: #FFF;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="130">

                  <input class="colors__radio sr-only"
                  type="radio"
                  name="color"
                  value="#000"
                  id="130">

                  <span class="colors__value" style="background-color: #000;">
                </span></label>
              </li>
            </ul>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Объемб в ГБ</legend>
            <ul class="check-list">
              <li class="check-list__item">
                <label class="check-list__label" for="131">

                  <input class="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                  value="8"
                  checked=""
                  id="131">

                  <span class="check-list__desc">
                    8
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="132">

                  <input class="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                  value="16"
                  id="132">

                  <span class="check-list__desc">
                    16
                    <span>(461)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="133">

                  <input class="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                  value="32"
                  id="133">

                  <span class="check-list__desc">
                    32
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="134">

                  <input class="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                  value="64"
                  id="134">

                  <span class="check-list__desc">
                    64
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="135">

                  <input class="check-list__check sr-only"
                  type="checkbox"
                  name="volume"
                  value="128"
                  id="135">

                  <span class="check-list__desc">
                    128
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="136">

                  <input class="check-list__check sr-only"
                   type="checkbox"
                   name="volume"
                   value="264"
                   id="136">

                  <span class="check-list__desc">
                    264
                    <span>(313)</span>
                  </span>
                </label>
              </li>
            </ul>
          </fieldset>

          <button class="filter__submit button button--primery" type="submit">
            Применить
          </button>
          <button class="filter__reset button button--second" type="button" @click.prevent="reset">
            Сбросить
          </button>
        </form>
      </aside>
</template>

<script>
import category from '../data/categories';
import color from '../components/ColorItem.vue';

export default {
  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      selectedColors: [],
    };
  },
  props: ['priceFrom', 'priceTo', 'categoryId','color'],
  computed: {
    colors() {
      return color.value;
    },

    categories() {
      return category;
    },
  },
  watch: {
    priceFrom(value) {
      this.currentPriceFrom = value;
    },
    priceTo(value) {
      this.currentPriceTo = value;
    },
    categoryId(value) {
      this.currentCategoryId = value;
    },
    colors(value) {
      this.selectedColors = value;
    }
  },
  methods: {
    submit() {
      this.$emit('update:priceFrom', this.currentPriceFrom);
      this.$emit('update:priceTo', this.currentPriceTo);
      this.$emit('update:categoryId', this.currentCategoryId);
      this.$emit('update:colors', this.selectedColors )
    },
    reset() {
      this.$emit('update:priceFrom', 0);
      this.$emit('update:priceTo', 0);
      this.$emit('update:categoryId', 0);
    },

  },
};
</script>
