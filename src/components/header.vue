<style lang="sass">

</style>

<template>
  <div class="header">
    <div class="menu" @click="toggleNav"></div>
    <h1>this is header</h1>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: ['showNav'],
    data () {
      return {
      }
    },
    methods: {
      toggleNav (e) {
        console.log('toggleNav')
        this.$emit('toggleNav')
      }
    }
  }
</script>
