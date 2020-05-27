<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-icon>
          <v-icon x-large color="primary">$paintLogo</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ペイント アプリ</v-list-item-title>
      </v-list-item>

      <v-divider />

      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon color="secondary">$logo</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ホーム</v-list-item-title>
      </v-list-item>

      <v-divider />

      <v-list>
        <v-list-group prepend-icon="mdi-store" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ navShopTitle }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> TEST </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group prepend-icon="$jeansFold" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ navJeansTitle }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> TEST </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-btn text class="mx-1">
        <span class="hidden-xs-only mr-1">解消</span>
        <v-icon>
          mdi-eraser
        </v-icon>
      </v-btn>
      <v-btn text class="mx-1">
        <span class="hidden-xs-only mr-1">印刷</span>
        <v-icon>
          mdi-printer
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-content app>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'PaintLayout',
  data() {
    return {
      drawer: false,
      navShopTitle: '店舗',
      navJeansTitle: 'ジーンズ'
    }
  }
}
</script>
