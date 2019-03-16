<template>
  <label>
    {{ label }}
    <input
      type="text"
      :value="value"
      v-bind="$attrs"
      @input="emitInput"
      v-on="listeners"
    />
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Default label'
    }
  },
  computed: {
    listeners () {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    }
  },
  methods: {
    emitInput (event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>
