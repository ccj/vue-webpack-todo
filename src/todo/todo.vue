<template>
    <section class="real-app">
        <input 
            type="text" 
            class="add-input"
            autofocus="autofocus"
            placeholder="接下去要做什么?"
            @keyup.enter="addTodo"
        >
        <Item :todo="todo"></Item>
    </section>
</template>

<script>
import Item from './item.vue'

export default {
    data() {
        return {
            todo: {
                id:0,
                content: 'this is todo',
                completed: flase
            }
        }
    },
    components:{
        Item
    },
    methods: {
        addTodo(){

        }
    }
}
</script>

<style lang="stylus" scoped>
.real-app
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666

.add-input
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit 
    line-height 1.4em
    border none
    outline none 
    color inherit 
    box-sizing border-box
    font-smmothing antialiased
    padding 16px 16px 16px 36px
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
    
</style>


