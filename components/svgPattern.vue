<template>
  <g>
    <path
      v-if="icsp"
      fill="#ffffff"
      d="M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"
    />
    <path :fill="color" :d="path" />
  </g>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: 'M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z',
    },
    color: {
      type: String,
      default: 'transparent',
    },
    icsp: {
      type: [String, Boolean],
      default: false,
    },
  },
}
</script>
