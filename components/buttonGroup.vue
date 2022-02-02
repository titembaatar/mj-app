<template>
  <v-btn-toggle
    v-model="select"
    :color="color"
    @change="$emit('change', select)"
  >
    <v-btn
      v-for="object in array"
      :key="object.id"
      v-text="object.display"
      :disabled="(isIc && !object.ic) || (!isIc && object.ic && object.display !== '限定')"
      v-bind:class="{ disable: (isIc && !object.ic) || (!isIc && object.ic && object.display !== '限定') }"
    />
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
    isIc: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data() {
    return {
      select: null,
    }
  },
  methods: {
    reset() {
      this.select = null
    }
  },
}
</script>

<style>
.disable {
	display: none !important;
}
</style>