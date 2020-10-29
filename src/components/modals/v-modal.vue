<template>
    <div id="modal" class=" popup text-center mfp-hide">
      <div class="popup__close m-left">
        <img src="assets/img/close.svg" alt="" class="close-popup" />
      </div>
      <div class="popup__container popup__container--sm">
        <div class="popup__title popup__title--type-2">
          Узнайте подробнее
        </div>
        <div class="popup__text">
          о преимуществах игры <br />“Твоя волшебная рыбалка 3D”
        </div>
        <form action="" class="popup__form popup__form-modal landing-form">
          <div class="popup__form-row">
            <div class="popup__form-name">Введите Ваше имя</div>
            <input type="text" name="name" required="" />
          </div>
          <div class="popup__form-row">
            <div class="popup__form-name">Введите Ваш телефон</div>
            <input type="text" name="tel" required="" />
          </div>
          <button type="submit" class="btn btn--fat mt-23">
            Узнать подробнее
          </button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
    name: 'modal'
}
</script>