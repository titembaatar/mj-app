<template>
  <main>
    <h1>HOME</h1>
    <NuxtLink to="/paint">
      <v-btn color="success" dark>ペイント</v-btn>
    </NuxtLink>
  </main>
</template>

<script>
export default {
  async mounted() {
    try {
      await this.$store.dispatch('bindShopsCollection')
      await this.$store.dispatch('bindJeansCollection')
      await this.$store.dispatch('bindPatternsCollection')
      await this.$store.dispatch('bindColorsCollection')
    } catch (e) {
      console.error(e)
    }
  },
}
</script>
