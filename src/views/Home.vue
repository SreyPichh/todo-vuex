<template>
  <div class="home">
    <h2>Todo App</h2>
    <div class="l_input__box">
      <!-- <form class="c_input__box"> -->
        <input class="c_input"
               :value="newTodo" 
               @change="getTodo"
               type="text" 
               placeholder="New todo list...">
        <button class="c_add__btn" @click="addTodo">Add</button>
        <current-todo></current-todo>
      <!-- </form> -->
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CurrentTodo from '@/components/CurrentTodo.vue'

export default {
  name: 'Home',
  components: {
    CurrentTodo
  },
  methods: {
    getTodo (e) {
      this.$store.dispatch('getTodo', e.target.value)
    },
    addTodo () {
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearTodo')
    }
  },
  computed: {
    newTodo () {
      return this.$store.getters.newTodo
    }
  }
}
</script>
<style scoped>
.l_input__box {
  margin: 30px;
}
.c_input__box {
  width: 600px;
}
.c_input {
  width: 520px;
  height: 40px;
  background-color: rgba(204, 204, 204, .3);
  border: none;
  font-size: 14px;
  background-size: 50px 15px;
  padding-left: 16px;
  padding-bottom: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
.c_input::placeholder {
  font-size: 14px;
  color: #666666;
}
.c_input:focus {
  outline: none;
}
.c_add__btn {
  width: 60px;
  height: 40px; 
  cursor: pointer;
  background-color: #3e99fd;
  border: 1px;
  color: #ffffff
}
.c_add__btn:focus {
  outline: none;
}
</style>
