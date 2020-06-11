<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-icon>
          <v-icon x-large :color="aShop.color">$paintLogo</v-icon>
        </v-list-item-icon>
        <v-list-item-title :color="aShop.color">
          ペイント アプリ
        </v-list-item-title>
      </v-list-item>

      <v-divider />

      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon color="secondary">$logo</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ホーム</v-list-item-title>
      </v-list-item>

      <v-divider />

      <v-list flat dense>
        <v-list-group prepend-icon="fa-store" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ aShop.display }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="shop in shops"
            :key="shop.id"
            @click="setShopActive(shop)"
          >
            <v-list-item-content>
              <v-list-item-title
                :style="{ color: shop.data.color }"
                v-text="shop.data.display"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group prepend-icon="$jeansFold" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ aJeans.display }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="jean in jeans"
            :key="jean.id"
            @click="setJeanActive(jean)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="jean.data.display" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat dense color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-btn text class="mx-1">
        <span class="hidden-xs-only">解消</span>
        <v-icon :right="this.$vuetify.breakpoint.smAndUp">
          fa-eraser
        </v-icon>
      </v-btn>
      <v-btn text class="mx-1">
        <span class="hidden-xs-only">印刷</span>
        <v-icon :right="this.$vuetify.breakpoint.smAndUp">
          fa-print
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-content app>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PaintLayout',
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapState({
      aShop: (state) => state.active.shop,
      aJeans: (state) => state.active.jeans,
      shops: (state) => state.firestore.data.shops,
      jeans: (state) => state.firestore.data.jeans
    })
  },
  methods: {
    setShopActive(obj) {
      this.$store.commit('SET_SHOP_ACTIVE', obj)
    },
    SetJeanActive(obj) {
      this.$store.commit('SET_JEAN_ACTIVE', obj)
    }
  }
}
</script>
