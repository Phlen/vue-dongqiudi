<style lang="sass">

</style>

<template>
  <div class="navbar">
    <h1>this is navbar {{myProps}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['myProps'],
    data () {
      console.log(this)
      return {}
    }
  }
</script>
