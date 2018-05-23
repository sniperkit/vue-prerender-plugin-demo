<template>
  <div>
    <div>mixin </div>
  </div>
</template>

<script>
export default {
  created () {
    console.log('mixin')
  },
  methods: {
    jump () {
      console.log('mixin jump')
      this.$router.push('/')
    }
  }
}
</script>

<style>
.child {
  color: yellow;
}
</style>
