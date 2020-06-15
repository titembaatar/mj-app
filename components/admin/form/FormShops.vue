<template>
  <v-row no-gutters class="justify-center">
    <v-form v-model="valid">
      <v-text-field v-model="newShop.id" :rules="rules" label="ID" required />
      <v-text-field
        v-model="newShop.display"
        :rules="rules"
        label="漢字"
        required
      />
      <v-text-field
        v-model="newShop.colorDisplay"
        :rules="rules"
        label="色名"
        required
      />
      <v-color-picker
        v-model="newShop.color"
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
            collection: 'shops',
            child: newShop.id,
            data: newShop
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
      newShop: {
        id: '',
        display: '',
        color: '#',
        colorDisplay: ''
      }
    }
  }
}
</script>
