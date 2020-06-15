<template>
  <v-container>
    <v-row class="px-4 justify-space-between">
      <Card
        v-for="jean in jeans"
        :key="jean.id"
        :title="jean.data.display"
        color="#F5F5F5"
        @remove="
          remove({
            collection: 'jeans',
            child: jean.id
          })
        "
      >
        <template v-slot:card-body>
          <v-row class="justify-center">
            <svg viewBox="0 0 500 500" class="svg">
              <Base :stitch="jean.data.stitch" :sp="jean.data.stripes" />
            </svg>
          </v-row>
        </template>
        <template v-slot:action-begin>
          <span>#{{ jean.id }}</span>
        </template>
      </Card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'dashboard',
  computed: {
    ...mapState({
      jeans: (state) => state.firestore.data.jeans
    })
  },
  methods: {
    async remove(obj) {
      await this.$store.dispatch('firestore/remove', obj)
    }
  }
}
</script>

<style lang="sass" scoped>
.svg
  height: 150px
</style>
