<template>
  <div>
    <div>/user/:id/view/:otherId' </div>
    <div>路由中的ID为 {{ id }}</div>
    <div>路由中的otherId为 {{ otherId }}</div>
  </div>
</template>

<script>
export default {
  props: ['id', 'otherId']
}
</script>

<style scoped>

</style>
