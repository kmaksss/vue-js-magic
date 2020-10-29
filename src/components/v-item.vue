<template>
    <div class="items__item">
        <div class="items__item-img">
            <img :src="`assets/img/${product_data.image}`" alt="" />
        </div>
        <div class="items__item-title circe-b">
            {{product_data.name}}
        </div>
        <div class="items__item-size">
            Размер {{product_data.size}}
        </div>
        <div class="items__item-price kosko">Цена: <span>{{product_data.price}}</span> Р</div>
        <a 
            class="btn items__item-btn"
            @click="addToCart"
        >Заказать</a
        >
    </div>
</template>

<script>
export default {
    name: 'item',
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product_data)
      }
    }
}
</script>