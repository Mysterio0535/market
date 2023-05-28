<template>
  <fieldset class="form__block">
            <legend class="form__legend">Цвет</legend>
            <ul class="colors">
              <li class="colors__item" v-for="color in colors" :key="color">
                <label class="colors__label" for="'color-' + color.id">

                  <input class="colors__radio sr-only"
                  type="radio"
                  name="color"
                  :value="color.id"
                  v-model="selectedColors"
                  :id="'color-' + color.id">

                  <span class="colors__value"> {{ color.value }}
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
</template>

<script>
// import color from '../data/color';

export default {
  components: 'ColorFilter',
};
</script>
