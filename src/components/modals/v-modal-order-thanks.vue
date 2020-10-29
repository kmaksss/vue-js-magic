<template>
    <div id="modal-order-thanks" class="popup text-center mfp-hide">
      <div class="popup__close m-left">
        <img src="assets/img/close.svg" alt="" class="close-popup" />
      </div>
      <div class="popup__container">
        <div class="popup__title">
          Поздравляем, <span class="popup__title-iinerName"> name </span
          >! Ваш заказ оформлен
        </div>
        <div class="popup__img">
          <img src="assets/img/modal-thanks.jpg" alt="" />
        </div>
        <div class="popup__text">
          В ближайшее время с Вами свяжется сотрудник отдела продаж.
        </div>
        <div class="form popup__padd">
          <button class="close-popup btn btn--fat">Вернуться на сайт</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'modal-order-thanks',
}
</script>