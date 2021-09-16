<template>
  <svg viewBox="0 0 24 24">
    <path
      d="M2.1 2S2 3.8 2 6.4h20c0-2.6-.1-4.4-.1-4.4H2.1zm0 7.8c0 .6.1 1.2.1 1.7h19.5c.1-.6.1-1.2.1-1.7H2.1zm.3 3.6c.2 1.7.5 3.5 1 5.3L12 22l8.6-3.3c.5-1.7.8-3.5 1-5.3H2.4z"
      :fill="color"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: { type: String, required: false, default: '#808080' },
  },
}
</script>
