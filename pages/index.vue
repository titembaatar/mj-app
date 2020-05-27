<template>
  <v-container class="fill-height">
    <v-row>
      <v-col :cols="this.$vuetify.breakpoint.xsOnly ? 12 : 6">
        <v-card to="/paint" color="secondary" outlined dark>
          <v-img
            class="align-end"
            height="10rem"
            lazy-src="/paint.jpg"
            src="/paint.jpg"
          >
            <v-card-title>
              <v-icon left>$paintLogo</v-icon>
              ペイント
            </v-card-title>
          </v-img>
          <v-card-subtitle>バックポケットペイントのアプリへ</v-card-subtitle>
        </v-card>
      </v-col>

      <v-col :cols="this.$vuetify.breakpoint.xsOnly ? 12 : 6">
        <v-card to="/shift" color="secondary" outlined dark>
          <v-img
            class="align-end"
            height="10rem"
            lazy-src="/shift.jpg"
            src="/shift.jpg"
          >
            <v-card-title>
              <v-icon left>mdi-calendar</v-icon>
              シフト
            </v-card-title>
          </v-img>
          <v-card-subtitle>シフトのアプリへ</v-card-subtitle>
        </v-card>
      </v-col>

      <v-col :cols="this.$vuetify.breakpoint.xsOnly ? 12 : 6">
        <v-card to="/admin" color="secondary" outlined dark>
          <v-img
            class="align-end"
            height="10rem"
            lazy-src="/admin.jpg"
            src="/admin.jpg"
          >
            <v-card-title>
              <v-icon left>mdi-cog</v-icon>
              アドミン
            </v-card-title>
          </v-img>
          <v-card-subtitle>アドミンページへ</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello You !'
    }
  }
}
</script>
