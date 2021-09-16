<template>
  <v-select
    v-model="select"
    :items="items"
    item-text="display"
    item-value="id"
    item-color="color"
    :label="title"
    :color="color"
    return-object
    single-line
    dense
    outlined
    @input="$emit('input', select)"
  />
</template>

<script>
export default {
  props: {
    title: { type: String, required: true, default: 'Title' },
    items: undefined,
    color: { type: String, required: false, default: '#808080' },
  },
  data() {
    return {
      select: { display: '店舗`', id: '000' },
    }
  },
}
</script>

<style></style>
