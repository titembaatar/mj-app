<template>
  <v-container>
    <v-row class="px-4 justify-space-between">
      <Card
        v-for="pattern in patterns"
        :key="pattern.id"
        :title="pattern.data.display"
        color="#F5F5F5"
      >
        <template v-slot:card-body>
          <v-row class="justify-center">
            <svg viewBox="0 0 500 500" class="svg">
              <Base :stitch="false" :sp="false" />
              <BasePath
                :path="pattern.data.path"
                fill="white"
                :icsp="pattern.data.icsp"
              />
            </svg>
          </v-row>
        </template>
        <template v-slot:action-begin>
          <span>#{{ pattern.id }}</span>
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
      patterns: (state) => state.firestore.data.patterns
    })
  }
}
</script>

<style lang="sass" scoped>
.svg
  height: 150px
</style>
