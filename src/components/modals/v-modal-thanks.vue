<template>
    <div id="modal-thanks" class="popup text-center mfp-hide">
      <div class="popup__close m-left">
        <img src="assets/img/close.svg" alt="" class="close-popup" />
      </div>
      <div class="popup__container">
        <div class="popup__title">
          Благодарим Вас за проявленный интерес!
        </div>
        <div class="popup__img">
          <img src="assets/img/modal-thanks.jpg" alt="" />
        </div>
        <div class="popup__text">
          В течении 30 минут с Вами свяжется сотрудник отдела продаж.
        </div>
        <div class="form popup__padd">
          <button class="close-popup btn btn--fat">Продолжить покупки</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'modal-thanks'
}
</script>