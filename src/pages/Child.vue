<template>
  <div class="child" :class="afterClass">
    this is a Child
    <div @click="jump">11111</div>
  </div>
</template>

<script>
import Extend from '@/components/Extend'
import Mixin from '@/components/Mixin'
export default {
  data () {
    return {
      afterClass: ''
    }
  },
  mounted () {
    requestAnimationFrame(() => {
      this.afterClass = 'after'
    })
  },
  extends: Extend,
  mixins: [Mixin],
  methods: {
    jump (el) {
      console.log(el)
      console.log('jump')
      this.$router.push('/parent/detail')
    }
  },
}
</script>

<style>
@keyframes myfirst {
  from {background: red;}
  to {background: yellow;}
}

.child {
  animation: myfirst 5s;
}
</style>
