<template>
  <v-card>
    <v-card-title> {{ title }} </v-card-title>
    <v-row>
      <slot name="card-body"> </slot>
    </v-row>
    <v-card-actions>
      <v-row>
        <slot name="action-begin"></slot>
        <v-spacer />
        <v-icon> fa-pen </v-icon>
        <v-icon> fa-trash </v-icon>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped></style>
