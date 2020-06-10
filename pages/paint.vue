<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="6" class="d-flex justify-center">
        <Pocket :layers="pockets[0].layers" :stitch="false" :sp="false" />
      </v-col>
      <v-col cols="6" class="d-flex justify-center">
        <Pocket :layers="pockets[1].layers" :stitch="false" :sp="true" />
      </v-col>
    </v-row>
    <v-row class="flex-grow-0"> </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'paintLayout',
  computed: {
    ...mapState({
      pockets: (state) => state.active.pockets
    })
  },
  async mounted() {
    try {
      await this.$store.dispatch('firestore/bindDB')
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
