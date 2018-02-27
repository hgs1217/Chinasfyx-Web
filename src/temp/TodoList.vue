<template>
  <div>
    <BaseInputText v-model="newTodoText" placeholder="New Todo" @keydown.enter="addTodo"/>
    <ul v-if="todos.length">
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo"/>
    </ul>
    <p v-else>Nothing left in the list. Add a new one into the list.</p>
  </div>
</template>

<script>
  import BaseInputText from "./BaseInputText.vue"
  import TodoListItem from "./TodoListItem.vue"

  let nextTodoId = 1

  export default {
    components: {
      BaseInputText, TodoListItem
    },
    data() {
      return {
        newTodoText: '',
        todos: [
          {
            id: nextTodoId++,
            text: 'Item 1'
          }, {
            id: nextTodoId++,
            text: 'Item 2'
          }, {
            id: nextTodoId++,
            text: 'Item 3'
          },
        ]
      }
    },
    methods: {
      addTodo() {
        const textTrim = this.newTodoText.trim()
        if (textTrim) {
          this.todos.push({
            id: nextTodoId++,
            text: textTrim
          })
          this.newTodoText = ''
        }
      },
      removeTodo(id) {
        this.todos = this.todos.filter(todo => {
          return todo.id !== id
        })
      }
    }
  }
</script>
