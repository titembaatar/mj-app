<template>
  <v-container>
    <v-row class="px-4 justify-space-between">
      <Card
        v-for="shop in shops"
        :key="shop.id"
        :title="shop.data.display"
        :color="shop.data.color"
        :dark="true"
      >
        <template v-slot:card-body>
          <span>{{ shop.data.colorDisplay }}</span>
        </template>
        <template v-slot:action-begin>
          <span>{{ shop.id }}</span>
        </template>
      </Card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'adminLayout',
  computed: {
    ...mapState({
      shops: (state) => state.firestore.data.shops
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
