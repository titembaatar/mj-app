<template>
  <v-container class="fill-height">
    <v-row> {{ message }} </v-row>
  </v-container>
</template>

<script>
export default {
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
