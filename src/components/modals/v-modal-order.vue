<template>
    <div id="modal-order" class="popup text-center mfp-hide">
      <div class="popup__close m-left">
        <img src="assets/img/close.svg" alt="" class="close-popup" />
      </div>
      <div class="popup__container popup__container--sm">
        <div class="popup__title popup__title--type-2">
          Ваш заказ:
        </div>
        <div class="popup__text popup__text-name">
          <v-cart-item 
            v-for="(item, i) in CART" 
            :key="i"
            :cart_data="item"
            @deleteCartItem="deleteCartItem(i)"
            @increment="increment(i)"
            @decrement="decrement(i)"
          />
        </div>
        <div class="text-right kosko">Сумма: {{cartSumm}} Р</div>
        <form class="popup__form popup__form-order modal-order">
          <div style="display: none;">
            <input type="text" name="tovar" class="popup__tovar" required="" />
            <input type="text" name="summ" class="popup__summ" required="" />
          </div>
          <div class="popup__form-row">
            <div class="popup__form-name">Введите Ваше имя*</div>
            <input type="text" name="name" class="clientName" required="" />
          </div>
          <div class="popup__form-row">
            <div class="popup__form-name">Введите Ваш e-mail*</div>
            <input type="text" name="mail" required="" />
          </div>
          <div class="popup__form-row">
            <div class="popup__form-name">Введите Ваш телефон*</div>
            <input type="text" name="tel" required="" />
          </div>
          <div class="popup__form-row">
            <div class="popup__form-name">Введите адрес доставки*</div>
            <input type="text" name="address" required="" />
          </div>
          <div class="popup__form-row">
            <div class="popup__form-name">Введите промокод</div>
            <input type="text" name="promocode" class="promocode" />
          </div>
          <button type="submit" class="btn btn--fat mt-23 order-btn-submit">
            Оформить заказ
          </button>
        </form>
      </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import vCartItem from '@/components/v-cart-item.vue' 
export default {
    name: 'modal-order',
    components: {
      vCartItem
    },
    computed: {
      ...mapGetters([
        'CART'
      ]),
      cartSumm() {
        let result = [];

        for(let item of this.CART) {
          result.push(item.price * item.quantity)
        }
        if(!result.length) {
          return 0
        }
        result = result.reduce(function(acc, i) {
          return acc + i
        });
        return result
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'CARTITEM_INCREMENT',
        'CARTITEM_DECREMENT'
      ]),
      deleteCartItem(i) {
        this.DELETE_FROM_CART(i)
      },
      increment(i) {
          this.CARTITEM_INCREMENT(i)
      },
      decrement(i) {
          this.CARTITEM_DECREMENT(i)
      }
      
    }
}
</script>

<style scoped>
  #modal-order {
    max-width: 844px;
  }
  #modal-order .popup__container--sm {
    max-width: none;
  }
</style>