<template>
  <div class="page-settings">
    <h1>This is an settings page</h1>
    <base-input
      required="true"
      label="Title"
      v-model="settings.title"
    />
    <base-button @click="save()">Save</base-button>

  </div>
</template>
<script>
  // @ is an alias to /src
  import BaseInput from '@/components/base/BaseInput.vue';
  import {mapActions, mapGetters} from "vuex";
  import BaseButton from '@/components/base/BaseButton.vue';

  export default {
    name: 'home',

    components: {
      BaseInput, BaseButton
    },
    computed: {
      ...mapGetters('settings', ['settings'])
    },

    methods: {
      ...mapActions('settings', ['saveSettings']),
      save: function () {
        console.log('Save', this.settings);
        this.$store.dispatch('settings/saveSettings', {
          title: this.title
        });

      }
    },
  };
</script>

