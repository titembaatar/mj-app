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
      <v-btn color="secondary" depressed class="mx-1">
        ログイン
      </v-btn>
      <v-btn text class="mx-1">
        ショップ
        <v-icon right dark x-small>fa-external-link-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content app>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!-- <v-btn icon absolute bottom left @click="switchTheme()">
      <v-icon v-if="this.$vuetify.theme.dark == true">
        fa-moon
      </v-icon>

      <v-icon v-if="this.$vuetify.theme.dark == false">
        fa-sun
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
