<template>
  <div class="home">
     This is home page
    <base-button
      :loading="loading"
      value="Ok button!"
    />
    <base-input
      label="Write 'loading' to make it load"
      v-model="value"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';

export default {
  name: 'home',
  components: {
    BaseButton, BaseInput
  },
  data: () => ({
    value: 'sample-value'
  }),
  computed: {
    loading: function () {
      return this.value === 'loading';
    }
  }
};
</script>
