<template>
    <section class="items" id="items">
      <div class="container">
        <div class="section-heading text-center">
          <h2 class="section-heading__title section-heading__title--left kosko">
            Ассортимент
          </h2>
        </div>
        <div class="items__items text-center d-flex justify-space">
          <v-item 
            v-for="(product, i) in PRODUCTS"
            :key="i"
            :product_data="product" 
            @addToCart="addToCart"
          />
        </div>
      </div>
    </section>
    
</template>

<script>
import vItem from '@/components/v-item.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'items',
    components: {
      vItem
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ])
    },
    methods: {
      ...mapActions([
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data)
      }
    }
}
</script>