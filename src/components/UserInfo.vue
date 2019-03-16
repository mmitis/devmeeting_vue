<template>
  <div class="user-container">
    <h4 class="user-name">{{ user.name }}</h4>
    <h4 class="user-id">{{ user.id }}</h4>
    <h4 class="user-state">{{ !user.isAdmin ? 'User' : 'Admin' }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style type="scss" >




</style>
