<template>
    <section class="rewiews" id="rewiews">
      <div class="container">
        <div class="section-heading text-center">
          <h2
            class="section-heading__title section-heading__title--right kosko"
          >
            Отзывы наших клиентов
          </h2>
        </div>

        <!-- Slider main container -->
        <div class="swiper-container rewiews__slider">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper text-center">
            <div 
              class="swiper-slide rewiews__slide"
              v-for="(rewiew, i) in REWIEWS"
              :key="i"
            >
              <div class="rewiews__slide-img">
                <img :src="`assets/img/${rewiew.avatar}`" alt="" />
              </div>
              <div class="rewiews__slide-title circe-b">
                {{rewiew.name}}
              </div>
              <div class="rewiews__slide-descr">
                {{rewiew.rewiew}}
              </div>
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'rewiews',
    computed: {
      ...mapGetters([
        'REWIEWS'
      ])
    }
}
</script>