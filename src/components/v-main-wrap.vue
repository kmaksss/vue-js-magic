<template>
  <div class="wrap">
    <v-header :cart="CART"/>
    <v-main/>
    <v-complectation/>
    <v-variants/>
    <v-top-banner/>  
    <v-items/>
    <v-rewiews/>
    <v-partners/>
    <v-bottom-banner/>
    <v-footer/>
    <v-modals/>  
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import vHeader from '@/components/v-header.vue'
import vMain from '@/components/v-main.vue'
import vComplectation from '@/components/v-complectation.vue'
import vVariants from '@/components/v-variants.vue'
import vTopBanner from '@/components/v-top-banner.vue'
import vItems from '@/components/v-items.vue'
import vRewiews from '@/components/v-rewiews.vue'
import vPartners from '@/components/v-partners.vue'
import vBottomBanner from '@/components/v-bottom-banner.vue'
import vFooter from '@/components/v-footer.vue'
import vModals from '@/components/modals/v-modals.vue'

export default {
  name: "MainWrap",
  components: {
      vHeader,
      vMain,
      vComplectation,
      vVariants,
      vTopBanner,
      vItems,
      vRewiews,
      vPartners,
      vBottomBanner,
      vFooter,
      vModals
  },
  computed: {
    ...mapGetters([
        'CART'
      ])
    }
};
</script>
