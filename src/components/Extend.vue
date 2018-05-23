<template>
  <div>
    <div @click="jump">extend </div>
  </div>
</template>

<script>
export default {
  created () {
    console.log('extend')
  },
  methods: {
    jump () {
      console.log('extend jump')
      this.$router.push('/')
    }
  }
}
</script>

<style>
.child {
  color: blue;
}
</style>
