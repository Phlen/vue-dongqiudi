<style scoped>
    
</style>

<template>
    <div class="view-container">
        <router-view></router-view>
    </div>
</template>

<script>
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
        methods: {
            
        }
    }
</script>