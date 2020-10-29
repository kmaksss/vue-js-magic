<template>
    <div class="cart-item d-flex justify-space align-center">
        <div class="cart-item__image">
            <img :src="`assets/img/${cart_data.image}`" alt="">
        </div>
        <div class="cart-item__name">
            {{cart_data.name}} Размер {{cart_data.size}}
        </div>
        <div class="cart-item__quantity">
            <span @click="decrement">-</span>
            {{cart_data.quantity}}
            <span @click="increment">+</span>
        </div>
        <div class="cart-item__price">
            {{cart_data.price}}
        </div>
        <div class="cart-item__delete d-flex align-center" @click="deleteItem">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9999 0.333252C7.78325 0.333252 0.333252 7.78325 0.333252 16.9999C0.333252 26.2166 7.78325 33.6666 16.9999 33.6666C26.2166 33.6666 33.6666 26.2166 33.6666 16.9999C33.6666 7.78325 26.2166 0.333252 16.9999 0.333252ZM24.1666 24.1666C24.0124 24.3211 23.8292 24.4437 23.6276 24.5273C23.426 24.6109 23.2099 24.654 22.9916 24.654C22.7733 24.654 22.5572 24.6109 22.3555 24.5273C22.1539 24.4437 21.9708 24.3211 21.8166 24.1666L16.9999 19.3499L12.1833 24.1666C11.8716 24.4782 11.449 24.6533 11.0083 24.6533C10.5675 24.6533 10.1449 24.4782 9.83325 24.1666C9.52162 23.855 9.34655 23.4323 9.34655 22.9916C9.34655 22.7734 9.38953 22.5573 9.47304 22.3557C9.55655 22.1541 9.67895 21.9709 9.83325 21.8166L14.6499 16.9999L9.83325 12.1833C9.52162 11.8716 9.34655 11.449 9.34655 11.0083C9.34655 10.5675 9.52162 10.1449 9.83325 9.83325C10.1449 9.52162 10.5675 9.34655 11.0083 9.34655C11.449 9.34655 11.8716 9.52162 12.1833 9.83325L16.9999 14.6499L21.8166 9.83325C21.9709 9.67895 22.1541 9.55655 22.3557 9.47304C22.5573 9.38953 22.7734 9.34655 22.9916 9.34655C23.2098 9.34655 23.4259 9.38953 23.6275 9.47304C23.8291 9.55655 24.0123 9.67895 24.1666 9.83325C24.3209 9.98755 24.4433 10.1707 24.5268 10.3723C24.6103 10.574 24.6533 10.79 24.6533 11.0083C24.6533 11.2265 24.6103 11.4425 24.5268 11.6442C24.4433 11.8458 24.3209 12.0289 24.1666 12.1833L19.3499 16.9999L24.1666 21.8166C24.7999 22.4499 24.7999 23.5166 24.1666 24.1666Z" fill="#E62C2C"/>
            </svg>
        </div>
    </div>
</template>

<script>

export default {
    name: 'cart-item',
    props: {
        cart_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteItem() {
            return this.$emit('deleteCartItem', this.cart_data)
        },
        increment() {
            return this.$emit('increment')
        },
        decrement() {
            return this.$emit('decrement')
        }
    }
}
</script>

<style scoped>
    .cart-item {
        background: #EDFBFF;
        border-radius: 20px;
        padding: 16px 30px;
        font-size: 18px;
        line-height: 27px;
        margin-bottom: 20px;
    }
    .cart-item__delete {
        cursor: pointer;
    }
</style>