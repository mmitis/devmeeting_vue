<template>
  <button
    type="button"
    v-bind="$attrs"
    :disabled="loading"
    :class="classes"
    v-on="this.$listeners"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    disabled: function () {
      return this.loading || this.$attrs.disabled;
    },
    classes: function () {
      return `btn-primary ${this.loading ? 'btn-loading' : ''}`;
    }
  }

};
</script>
<style>
  .btn-loading {
    border: 1px solid red;
  }
</style>
