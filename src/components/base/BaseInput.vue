<template>
  <label>
    {{ label }}
    <input
      type="text"
      :value="value"
      v-bind="$attrs"
      @input="emitInput"
      v-on="listeners"
      v-validate="validation"
      name="field"
    />
    <span>{{ errors.first('field') }}</span>
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
    },
    validation () {
      return this.$attrs.required ? 'required' : '';
    }
  },
  methods: {
    emitInput (event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>
