<template>
  <g>
    <path
      v-if="icsp"
      fill="#ffffff"
      d="M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"
    />
    <path :fill="fill" :d="path" />
  </g>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    fill: {
      type: String,
      required: true
    },
    icsp: {
      type: Boolean,
      required: true
    }
  }
}
</script>
