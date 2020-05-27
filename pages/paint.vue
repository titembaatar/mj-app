<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="6">
        {{ message }}
      </v-col>
      <v-col cols="6">{{ message }}</v-col>
    </v-row>
    <v-row class="flex-grow-0"></v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'paintLayout',
  data() {
    return {
      message: 'Hello to the paint app !'
    }
  }
  // DEV Without trigger the fireStore
  // async mounted() {
  //   try {
  //     await this.$store.dispatch('firestore/bindDB')
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
}
</script>
