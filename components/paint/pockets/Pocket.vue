<template>
  <svg viewBox="0 0 500 500">
    <Base :stitch="stitch" :sp="sp" />
    <BasePath
      v-for="layer in layers"
      :id="layer.id"
      :key="layer.id"
      :fill="layer.color"
      :path="layer.pattern"
      :icsp="layer.icsp"
    />
  </svg>
</template>

<script>
export default {
  props: {
    layers: {
      type: Array,
      required: true
    },
    stitch: {
      type: Boolean,
      required: true
    },
    sp: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="sass">
svg
  max-width: 100%
  max-height: calc( 100vh - 256px )
</style>
