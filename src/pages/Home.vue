<template>
  <div>
    1111
    lodash join ['Hello', 'webpack'], ' '
    {{value}}

    <div @click="$router.push('/parent/child')">11111</div>
    <div @click="$router.push('/transition-group')">transition group</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      src: false
    }
  },
  created () {
    console.log(this.$route)
    console.log(this.$router)
    this.value = ['Hello', 'webpack']
  },
  beforeRouteLeave (to, from, next) {
    console.log('routerleave')
    next(true)
  }
}
</script>

<style scoped>
.tile {
  width: 200px;
  height: 200px;
  line-height: 200px;
  color: #f9f6f2;
  background: #edc22e;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333);
  font-size: 90px;
  border-radius: 25px;
  text-align: center;
  font-weight: bold;
}
</style>
