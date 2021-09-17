<template>
  <v-btn-toggle
    v-model="select"
    :color="color"
    @change="$emit('change', select)"
  >
    <v-btn v-for="object in array" :key="object.id" v-text="object.display" />
  </v-btn-toggle>
</template>

<script>
export default {
  props: {
    array: {
      type: Array,
      default: () => ['Loading...'],
    },
    color: {
      type: String,
      required: true,
      default: '#808080',
    },
  },
  data() {
    return {
      select: null,
    }
  },
  methods: {
    reset() {
      this.select = null
    },
  },
}
</script>

<style></style>
