<template>
  <div></div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    if (from.matched && from.matched.length !== 0) {
      next()
      history.back()
    } else {
      let path = sessionStorage.getItem('path')
      next(vm => {
        vm.$router.push({ path })
      })
    }
  }
}
</script>
