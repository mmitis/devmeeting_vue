<template>
  <div class="home">
    <h4>{{ settings.title }}</h4>
    <VoteOptions :options="options" >
      <template #option="{ option }">
        <base-button disabled="hasUserVoted" @click="onSelect(option)" >{{ option.label }}</base-button>
        {{ groupedVotes[option.decision] }}
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
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'home',
  components: {
    BaseButton, BaseInput, VoteOptions
  },
  data: () => ({
    value: 'sample-value',
    options: [
      {label: 'Yes', decision: 'yes'},
      {label: 'Cant say', decision: "duno"},
      {label: 'No', decision: 'no'}]
  }),
  computed: {
    ...mapGetters('settings', ['settings']),
    ...mapGetters('user', ['userID']),
    ...mapGetters('votes', ['groupedVotes', 'hasUserVoted']),
    loading: function () {
      return this.value === 'loading';
    }
  },
  methods: {
    ...mapActions('votes', ['addVote']),
    onSelect: function (decision) {
      this.$store.dispatch('votes/addVote', { userId: this.userID, vote: decision.decision});
    }
  }
};
</script>
