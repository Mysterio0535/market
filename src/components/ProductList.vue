 <template>
<ul class="catalog__list">
<PdoductItem v-for="(product, index) in products" :key="index" :product="product"></PdoductItem>
    </ul>
 </template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  comments: { ProductItem },
  props: ['products'],
};
</script>
