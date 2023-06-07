<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html">
            Каталог
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="cart.html">
            Корзина
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Оформление заказа
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">
        3 товара
      </span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST" @submit.prevent="order">
        <div class="cart__field">
          <div class="cart__data">

            <BazeFormField title="ФИО" :error="formError.name">
              <input class="form__input" v-model="formData.name" type="text" name="name" :id="'name-field'"
                placeholder="Введите ваше полное имя">
            </BazeFormField>

            <BazeFormField title="Адрес доставки" :error="formError.address">
              <input class="form__input" v-model="formData.address" type="text" name="address" :id="'name-field'"
                placeholder="Введите ваш адрес">
            </BazeFormField>

            <BazeFormField title="Телефон" :error="formError.phone">
              <input class="form__input" v-model="formData.phone" type="tel" name="phone" :id="'name-field'"
                placeholder="Введите ваш телефон">
            </BazeFormField>

            <BazeFormField title="Email" :error="formError.email">
              <input class="form__input" v-model="formData.email" type="mail" name="email" :id="'name-field'"
                placeholder="Введите ваш Email">
            </BazeFormField>

            <BazeFormField title="Комментарий к заказу" :error="formError.comment">
              <textarea class="form__input form__input--area" v-model="formData.comment" name="comment" :id="'name-field'"
                placeholder="Ваши пожелания"></textarea>
            </BazeFormField>

          </div>

          <div class="cart__options">
            <h3 class="cart__title">Доставка</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label" for="error+-delivery">
                  <input class="options__radio sr-only" type="radio" name="delivery"
                  value="0" checked="" id="error+-delivery">
                  <span class="options__value">
                    Самовывоз <b>бесплатно</b>
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label" for="error+-delivery-500">
                  <input class="options__radio sr-only" type="radio"
                  name="delivery" value="500" id="error+-delivery-500">
                  <span class="options__value">
                    Курьером <b>500 ₽</b>
                  </span>
                </label>
              </li>
            </ul>

            <h3 class="cart__title">Оплата</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label" for="error+-card">
                  <input class="options__radio sr-only" type="radio" name="pay" value="card" id="error+-card">
                  <span class="options__value">
                    Картой при получении
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label" for="error+-cash">
                  <input class="options__radio sr-only" type="radio" name="pay" value="cash" id="error+-cash">
                  <span class="options__value">
                    Наличными при получении
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <li class="cart__order">
              <h3>Смартфон Xiaomi Redmi Note 7 Pro 6/128GB</h3>
              <b>18 990 ₽</b>
              <span>Артикул: 150030</span>
            </li>
            <li class="cart__order">
              <h3>Гироскутер Razor Hovertrax 2.0ii</h3>
              <b>4 990 ₽</b>
              <span>Артикул: 150030</span>
            </li>
            <li class="cart__order">
              <h3>Электрический дрифт-карт Razor Lil’ Crazy</h3>
              <b>8 990 ₽</b>
              <span>Артикул: 150030</span>
            </li>
          </ul>

          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>Итого: <b>3</b> товара на сумму <b>37 970 ₽</b></p>
          </div>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
        <div class="cart__error form__error-block" v-if="formErrorMessage">
          <h4>Заявка не отправлена!</h4>
          <p>
           {{ formErrorMessage }}
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import axios from 'axios';
import BazeFormField from '@/components/BazeFormField.vue';

export default {
  components: { BazeFormField },
  data() {
    return {
      formData: {},
      formError: {},

      formErrorMessage: '',
    };
  },
  methods: {
    async order() {
      this.formError = {};
      this.formErrorMessage = '';
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_BASE_URL}/api/orders`,
          {
            ...this.formData,
          },
          {
            params: {
              userAccessKey: this.$store.state.userAccessKey,
            },
          },
        );
      } catch (error) {
        if (
          error.response && error.response.data && error.response.data.error
        ) {
          this.formError = error.response.data.error.request || {};
          this.formErrorMessage = error.response.data.error.message;
        } else {
          console.error(error);
        }
      }
    },
  },
};
</script>
            // <!-- <label class="form__label">
            //   <input class="form__input" v-model="formData.name" type="text" name="name"
            //     placeholder="Введите ваше полное имя">
            //   <span class="form__value">ФИО</span>
            //   <span class="form__error" v-if="formError.name"> {{ formError.name }} </span>
            // </label> -->
            // <!-- <label class="form__label">
            //   <input class="form__input" v-model="formData.address" type="text" name="address"
            //     placeholder="Введите ваш адрес">
            //   <span class="form__value">Адрес доставки</span>
            //   <span class="form__error" v-if="formError.address"> {{ formError.address }} </span>

            // </label> -->

            // <!-- <label class="form__label">
            //   <input class="form__input" v-model="formData.phone" type="tel" name="phone"
            //     placeholder="Введите ваш телефон">
            //   <span class="form__value">Телефон</span>
            //   <span class="form__error" v-if="formError.phone"> {{ formError.phone }} </span>
            // </label> -->

            // <!-- <label class="form__label">
            //   <textarea class="form__input form__input--area" v-model="formData.comments" name="comments"
            //     placeholder="Ваши пожелания"></textarea>
            //   <span class="form__value">Комментарий к заказу</span>
            //   <span class="form__error" v-if="formError.comments"> {{ formError.comments }} </span>

            // </label> -->
            // <!-- <label class="form__label">
            //   <input class="form__input" v-model="formData.name" type="text" name="name"
            //     placeholder="Введите ваше полное имя">
            //   <span class="form__value">ФИО</span>
            //   <span class="form__error" v-if="formError.name"> {{ formError.name }} </span>
            // </label> -->
            // <!-- <label class="form__label">
            //   <input class="form__input" v-model="formData.address" type="text" name="address"
            //     placeholder="Введите ваш адрес">
            //   <span class="form__value">Адрес доставки</span>
            //   <span class="form__error" v-if="formError.address"> {{ formError.address }} </span>

            // </label> -->

            // <!-- <label class="form__label">
            //   <input class="form__input" v-model="formData.phone" type="tel" name="phone"
            //     placeholder="Введите ваш телефон">
            //   <span class="form__value">Телефон</span>
            //   <span class="form__error" v-if="formError.phone"> {{ formError.phone }} </span>
            // </label> -->

            // <!-- <label class="form__label">
            //   <textarea class="form__input form__input--area" v-model="formData.comments" name="comments"
            //     placeholder="Ваши пожелания"></textarea>
            //   <span class="form__value">Комментарий к заказу</span>
            //   <span class="form__error" v-if="formError.comments"> {{ formError.comments }} </span>

            // </label> -->
