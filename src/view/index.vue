<style lang="sass">
@import '../sass/base.scss';
.view-index {
}
</style>

<template>
    <div class="view-index">
        <h1>Index</h1>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {}
        },
        beforeCreate () {
            console.log('index beforeCreate')
        },
        created () {
            console.log(this)
            console.log('created')
            this.init()
        },
        beforeDestory () {

        },

        methods : {
            init () {
                console.log('init')
            }
        }
    }
</script>