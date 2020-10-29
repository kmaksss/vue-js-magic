<template>
    <section class="banner white">
      <div
        class="container banner__container banner__container--sm d-flex justify-space"
      >
        <div class="banner__l">
          <h2 class="banner__title banner__title--sm kosko">
            Запишись на бесплатную консультацию!
          </h2>
        </div>
        <div class="banner__r">
          <form class="landing-form">
            <input
              type="text"
              name="name"
              placeholder="Введите Ваше имя"
              required=""
            />
            <input
              type="text"
              name="tel"
              placeholder="Введите Ваш телефон"
              required=""
            />
            <button class="btn">Записаться</button>
          </form>
        </div>
      </div>
      <div class="banner__bg">
        <!-- <img src="assets/img/banner-bg-1.svg" alt="">
          <img src="assets/img/banner-bg-2.svg" alt="" class="banner__bg-1"> -->
      </div>
    </section>
</template>

<script>
export default {
    name: 'bottom-banner'
}
</script>