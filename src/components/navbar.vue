<style lang="sass">

</style>

<template>
  <div class="navbar">
    <!-- <h1>this is navbar {{myProps}}</h1> -->
    <ul class="nav navbar-list">
      <li
        v-for="v in nav"
        v-bind:id="v.active"
        v-bind:class="{cur: v.active}"
        @click="expend(v)">
        <a href="javascript:void(0);" @click="loadUrl(v)">{{v.name}}
          <span
            v-if="v.sub && v.sub.length > 0"
            v-bind:class="v.showSub ? 'minus' : 'plus'"></span>
        </a>
        <ul class="sub-nav" v-if="v.sub">
          <li v-for="sub in v.sub">
            <a href="javascript:void(0);">{{sub.name}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import menu from 'commons/menuConfig.es6'
  import Vue from 'vue'
  export default {
    name: 'NavBar',
    props: ['myProps'],
    data () {
      return {
        nav: menu.nav
      }
    },
    ready () {
      this.$watch('nav', () => {
        console.log('nav is changed')
      })
    },
    methods: {
      loadUrl (v) {
        if (v.link) {
          window.location.href = v.link
          for (let i of this.nav) {
            i.active = false
          }
          v.active = true
          this.$emit('toggleNav')
          return false
        }
      },
      expend (navItem) {
        this.nav.forEach((v) => {
          v.active = false
          v.showSub = false
        })
        navItem.active = true
        if (navItem.sub && navItem.sub.length > 0) {
          navItem.showSub = true
        }
      }
    }
  }
</script>
