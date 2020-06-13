<template>
  <v-app>
    <v-app-bar app elevate-on-scroll color="primary" clipped-left dark>
      <v-btn icon @click="miniD = !miniD">
        <v-icon v-if="miniD"> fa-bars </v-icon>
        <v-icon v-if="!miniD"> fa-ellipsis-v </v-icon>
      </v-btn>
      <v-toolbar-title>Dashboard</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      app
      permanent
      :mini-variant="miniD ? true : false"
      clipped
      dark
    >
      <v-list nav dense>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon size="20px">fa-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ホーム</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list nav dense>
        <v-list-item :to="{ name: 'admin-shops' }">
          <v-list-item-icon>
            <v-icon size="20px">fa-store</v-icon>
          </v-list-item-icon>
          <v-list-item-title>店舗</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ name: 'admin-jeans' }">
          <v-list-item-icon>
            <v-icon>$jeansFold</v-icon>
          </v-list-item-icon>
          <v-list-item-title>ジーンズ</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ name: 'admin-patterns' }">
          <v-list-item-icon>
            <v-icon>$paintLogo</v-icon>
          </v-list-item-icon>
          <v-list-item-title>柄</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{ name: 'admin-colors' }">
          <v-list-item-icon>
            <v-icon>fa-palette</v-icon>
          </v-list-item-icon>
          <v-list-item-title>色</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list nav dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>fa-plus-square</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ miniD }} を追加 </v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-content app>
      <nuxt :nuxt-child-keu="$route.fullPath" />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      miniD: true
    }
  },
  methods: {
    test() {
      console.log('lol')
    }
  }
}
</script>
