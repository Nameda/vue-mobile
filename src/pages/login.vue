<template>
  <div class="hello">
    <h1>login</h1>
  </div>
</template>

<script>
import { test } from '../service'
export default {
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {
    test()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
p {
  color: #f00;
}
</style>
