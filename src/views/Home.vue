<template>
  <div class="home">
    <h4>{{ settings.title }}</h4>
    <VoteOptions :options="options" >
      <template #option="{ label }">
        <base-button @click="onSelect(label)" >{{ label }}</base-button>
      </template>
    </VoteOptions>

    <base-input
      required="true"
      label="Write 'loading' to make it load"
      v-model="value"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import VoteOptions from '@/components/VoteOptions.vue';
import {mapGetters} from "vuex";
export default {
  name: 'home',
  components: {
    BaseButton, BaseInput, VoteOptions
  },
  data: () => ({
    value: 'sample-value',
    options: ['Yes', 'Cant say', 'No']
  }),
  computed: {
    ...mapGetters('settings', ['settings', 'settings']),
    loading: function () {
      return this.value === 'loading';
    }
  },
  methods: {
    onSelect: function (label) {
      console.log(label);
    }
  }
};
</script>
