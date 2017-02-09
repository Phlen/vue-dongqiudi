<style lang="sass">
</style>

<template>
  <div class="view-container" v-bind:class="{'sidebar-in': showNav}">
    <my-header @toggleNav="test"></my-header>
    <my-navbar v-bind:my-props="showNav" @toggleNav="test"></my-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Header from 'components/header.vue'
  import Footer from 'components/footer.vue'
  import NavBar from 'components/navbar.vue'
  export default {
    data () {
      return {
        showNav: false
      }
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
      'my-header': Header,
      'my-footer': Footer,
      'my-navbar': NavBar
    },

    methods: {
      test () {
        this.showNav = !this.showNav
      }
    }
  }
</script>
