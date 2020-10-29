<template>
    <section class="variants" id="variants">
      <div class="section-heading text-center">
        <h2 class="section-heading__title section-heading__title--right kosko">
          Варианты ведения игры
        </h2>
      </div>
      <div class="variants__items d-flex justify-space">
        <div class="variants__item">
          <div class="variants__item-icon center-x-y">
            <img src="assets/img/100icon.svg" alt="" />
          </div>
          <div class="variants__item-title circe-b text-center">
            На очки
          </div>
          <div class="variants__item-text">
            Поймайте больше всего рыбок или артефактов и заработай больше всего
            очков
          </div>
        </div>
        <div class="variants__item">
          <div class="variants__item-icon center-x-y">
            <img src="assets/img/speedicon.svg" alt="" />
          </div>
          <div class="variants__item-title circe-b text-center">
            На скорость
          </div>
          <div class="variants__item-text">
            Соберите все 9 рыбок и артефактов быстрее всех
          </div>
        </div>
        <div class="variants__item">
          <div class="variants__item-icon center-x-y">
            <img src="assets/img/timeicon.svg" alt="" />
          </div>
          <div class="variants__item-title circe-b text-center">
            На время
          </div>
          <div class="variants__item-text">
            За 1 минуту поймайте больше всех рыбок и артефактов
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'variants'
}
</script>