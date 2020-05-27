<template>
  <v-app>
    <v-app-bar app elevate-on-scroll color="primary" dark>
      <nuxt-link class="d-flex align-center" to="/">
        <v-icon x-large>$logo</v-icon>
        <v-toolbar-title
          v-if="this.$vuetify.breakpoint.smAndUp"
          class="font-weight-medium text-uppercase white--text ml-1"
        >
          {{ title }}
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text class="mx-1">
          ログイン
        </v-btn>
        <v-btn text class="mx-1">
          ショップ
          <v-icon dark small>mdi-open-in-new</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content app>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- <v-btn icon absolute bottom left @click="switchTheme()">
      <v-icon v-if="this.$vuetify.theme.dark == true">
        mdi-brightness-7
      </v-icon>

      <v-icon v-if="this.$vuetify.theme.dark == false">
        mdi-brightness-4
      </v-icon>
    </v-btn> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Momotaro Jeans App'
    }
  },
  methods: {
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style lang="sass" scoped>
.noActive
  text-decoration: none
  outline: 0

  .v-btn--active
    &::before
      opacity: 0
</style>
