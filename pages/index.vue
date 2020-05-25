<template>
  <v-container class="fill-height">
    <nuxt-link to="/paint">
      <v-card outlined>
        <v-card-title>Paint App</v-card-title>
      </v-card>
    </nuxt-link>

    <nuxt-link to="/shift">
      <v-card outlined>
        <v-card-title>Shift App</v-card-title>
      </v-card>
    </nuxt-link>
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
