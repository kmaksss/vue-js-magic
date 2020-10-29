<template>
    <section class="main" id="main">
      <div class="container main__container d-flex">
        <div class="cols-2 main__l">
          <h1 class="main__title kosko">Твоя волшебная рыбалка 3D</h1>
          <div class="main__descr kosko">
            Новая уникальная развивающая игра с резервуаром для рыбок
          </div>
          <ul class="main-list">
            <li>3 варианта ведения игры</li>
            <li>Сделано из прочных и безопасных материалов</li>
            <li>Есть резервуар с растениями, имитирующий дно водоема</li>
            <li>Бесплатная доставка по всей России</li>
          </ul>
          <a href="#modal" class="btn main__btn popup-content"
            >Узнать подробнее</a
          >
        </div>
        <div class="cols-2 main__r">
          <img
            src="assets/img/main-img.png"
            alt=""
            class="main__elipse-items"
          />
          <img src="assets/img/main-elipse.svg" alt="" class="main__elipse" />
        </div>
        <a href="#complectation" class="main__arrow"
          ><img src="assets/img/polygon.svg" alt=""
        /></a>
      </div>
    </section>
</template>

<script>
export default {
    name: 'v-main'
}
</script>