<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
    </div>
</template>

<script>
import Header from './todo/header.vue'

export default {
    components: {
        Header,
    }
}
</script>

<style lang="stylus" scoped>
#app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    #cover
        position absolute
        left 0
        right 0
        top 0
        bottom 0   
        background-color #999 
        opacity 0.8
        z-index -1

</style>
