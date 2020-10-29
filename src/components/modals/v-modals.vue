<template>
    <div>
        <v-modal-order/>
        <v-modal-order-thanks/>
        <v-modal/>
        <v-modal-thanks/>
    </div>
</template>

<script>

import vModalOrder from './v-modal-order.vue'
import vModalOrderThanks from './v-modal-order-thanks.vue'
import vModal from './v-modal.vue'
import vModalThanks from './v-modal-thanks.vue'

export default {
    name: 'modals',
    components: {
        vModalOrder,
        vModalOrderThanks,
        vModal,
        vModalThanks
    }
}
</script>