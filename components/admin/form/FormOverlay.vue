<template>
  <v-overlay :value="overlay" opacity="0.9">
    <v-btn fixed icon top right dark @click="$emit('clicked', false)">
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <v-card>
      <v-tabs v-model="tab" background-color="primary" center-active dark>
        <v-tab><v-icon>fa-store</v-icon></v-tab>
        <v-tab><v-icon>$jeansFold</v-icon></v-tab>
        <v-tab><v-icon>$paintLogo</v-icon></v-tab>
        <v-tab><v-icon>fa-palette</v-icon></v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="overflow">
        <v-tab-item>
          <FormShops @submit="push($event)" />
        </v-tab-item>
        <v-tab-item>
          <FormJeans />
        </v-tab-item>
        <v-tab-item></v-tab-item>
        <v-tab-item>
          <FormColors />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  props: {
    overlay: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      tab: null
    }
  },
  methods: {
    async push(obj) {
      await this.$store.dispatch('firestore/push', obj)
    }
  }
}
</script>

<style lang="sass" scoped>
.overflow
  overflow: auto
  max-height: 90vh
</style>
