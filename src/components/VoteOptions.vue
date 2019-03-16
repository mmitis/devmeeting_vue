<template>
  <div class="vote-options">
    <h4>Available options</h4>
    <div class="vote-options-holder">
      <ul>
        <slot
          v-for="option in options"
          name="option"
          :option="option"
        >
          <li :key="option">
            {{ option.label }}
          </li>
        </slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    }
  }
};
</script>
