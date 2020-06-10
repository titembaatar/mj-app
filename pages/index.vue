<template>
  <v-container class="ma-0 pa-0">
    <v-row no-gutters class="pa-2">
      <v-col :cols="this.$vuetify.breakpoint.xsOnly ? 12 : 3" class="pr-1">
        <v-card
          to="/paint"
          class="mb-2"
          color="primary"
          outlined
          :light="this.$vuetify.theme.dark"
          :dark="!this.$vuetify.theme.dark"
        >
          <v-card-title>
            <v-icon left large>$paintLogo</v-icon>
            ペイント
          </v-card-title>
        </v-card>

        <v-card
          to="/shift"
          class="mb-2"
          color="primary"
          outlined
          :light="this.$vuetify.theme.dark"
          :dark="!this.$vuetify.theme.dark"
        >
          <v-card-title>
            <v-icon left>fa-calendar-alt</v-icon>
            シフト
          </v-card-title>
        </v-card>

        <v-card
          to="/admin"
          color="primary"
          outlined
          :light="this.$vuetify.theme.dark"
          :dark="!this.$vuetify.theme.dark"
        >
          <v-card-title>
            <v-icon left>fa-user-cog</v-icon>
            アドミン
          </v-card-title>
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
