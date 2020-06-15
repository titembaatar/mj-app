<template>
  <v-row no-gutters class="justify-center">
    <v-form v-model="valid">
      <v-text-field v-model="nColor.id" :rules="rules" label="ID" required />
      <v-text-field
        v-model="nColor.display"
        :rules="rules"
        label="色名"
        required
      />
      <v-switch v-model="nColor.ic" label="市松柄可能色" />
      <v-color-picker
        v-model="nColor.color"
        canvas-height="100"
        hide-mode-switch
        mode="hexa"
        flat
      />
      <v-btn
        :disabled="!valid"
        :dark="valid"
        block
        color="indigo"
        class="mb-4"
        @click="
          $emit('submit', {
            ref: 'colors',
            child: newColor.id,
            data: newColor
          })
        "
      >
        追加
      </v-btn>
    </v-form>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      rules: [(v) => !!v || '必要'],
      valid: false,
      nColor: {
        id: '',
        display: '',
        color: '#',
        ic: null
      }
    }
  },
  computed: {
    newColor() {
      return {
        id: this.nColor.id,
        display: this.nColor.display,
        colorDisplay: this.nColor.display,
        color: this.nColor.color,
        ic: this.nColor.ic
      }
    }
  }
}
</script>
>
