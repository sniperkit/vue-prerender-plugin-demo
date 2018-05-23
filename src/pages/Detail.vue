<template>
  <div class="child">
    this is a detail
    <div @click="jump">11111</div>
  </div>
</template>

<script>
// import Mixin from '@/components/Mixin'
import Extend from '@/components/Extend'
export default {
  created () {
    console.log(this.$parent)
    let [a, , b] = [1, 2, 3]
    let c = [1, 2]
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(111)
  },
  // mixins: [Mixin],
  extends: Extend,
  methods: {
    jump () {
      console.log('jump')
      this.$router.push('/')
    }
  },
}
</script>

<style>
</style>
