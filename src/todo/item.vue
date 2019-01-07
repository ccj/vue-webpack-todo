<template>
    <div :class="['todo-item',todo.completed ? 'completed': '']">
        <input 
            type="checkbox"
            class="toggle"
            v-model="todo.completed"
        >
        <label>{{todo.content}}</label>
        <button class="destory" @click="deleteTodo"></button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteTodo(){

        }
    }
}
</script>

<style lang="stylus" scoped>
.todo-item{
    
}

</style>
