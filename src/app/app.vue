<style lang="sass">

</style>

<template>
  <div class="view-container">
    <Header></Header>
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from 'components/header.vue'
  import Footer from 'components/footer.vue'
  import NavBar from 'components/navbar.vue'
  console.log('2333')
  export default {
    data () {
      return {}
    },
    beforeCreate () {
      console.log('before')
    },
    created () {
      console.log('created')
    },
    beforeDestory () {

    },
    components: {
      Header: Header,
      Footer: Footer,
      Navbar: NavBar
    },

    methods: {

    }
  }
</script>
