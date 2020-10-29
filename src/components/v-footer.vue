<template>
    <footer class="footer">
      <div
        class="container container--lg footer__container d-flex align-center justify-space"
      >
        <a href="#main" class="logo"><img src="assets/img/logo.png" alt=""/></a>
        <ul class="socials d-flex justify-space">
          <li>
            <a href="https://www.instagram.com/igra_rybalka/" target="_blank"
              ><img src="assets/img/s1.svg" alt=""
            /></a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/igra.rybalka?locale=ru_RU"
              target="_blank"
              ><img src="assets/img/s2.svg" alt=""
            /></a>
          </li>
          <li>
            <a href="https://vk.com/igra_rybalka_3d" target="_blank"
              ><img src="assets/img/s3.svg" alt=""
            /></a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC0y_sdW1mh80Y_QfXvPT95w/videos"
              target="_blank"
              ><img src="assets/img/s4.svg" alt=""
            /></a>
          </li>
        </ul>
        <div class="contacts footer__contacts">
          <div class="contacts__item ">
            <div class="contacts__item-icon">
              <img src="assets/img/clock-b.svg" alt="" />
            </div>
            <div class="contacts__item-text">
              Время работы: <br />
              ежедневно с 10:00 до 22:00
            </div>
          </div>
          <div class="contacts__item">
            <div class="contacts__item-icon">
              <img src="assets/img/phone-b.svg" alt="" />
            </div>
            <div class="contacts__item-text">
              <a href="tel:+79036816871" class="d-block circe-b"
                >+7 (903) 681-68-71</a
              >
              <a href="#modal" class="d-block under popup-content"
                >Заказать обратный звонок</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    name: 'v-footer'
}
</script>