<template>
  <v-card :color="color" :dark="dark" class="card">
    <v-card-title> {{ title }} </v-card-title>
    <v-card-text>
      <slot name="card-body"> </slot>
    </v-card-text>
    <v-card-actions>
      <slot name="action-begin"></slot>
      <v-spacer />
      <v-icon> fa-pencil-alt </v-icon>
      <v-icon class="ml-4"> fa-trash </v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  min-width: 250px
</style>
