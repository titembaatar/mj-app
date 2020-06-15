<template>
  <v-container>
    <v-row class="px-4 justify-space-between">
      <Card
        v-for="color in colors"
        :key="color.id"
        :title="color.data.display"
        :color="color.data.color"
        :dark="color.data.color === '#ffffff' ? false : true"
        @remove="
          remove({
            collection: 'colors',
            child: color.id
          })
        "
      >
        <template v-slot:action-begin>
          <span>{{ color.id }}</span>
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
      colors: (state) => state.firestore.data.colors
    })
  },
  async mounted() {
    try {
      await this.$store.dispatch('firestore/bindDB')
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    async remove(obj) {
      await this.$store.dispatch('firestore/remove', obj)
    }
  }
}
</script>
