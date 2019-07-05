<template>
  <div class="c_current__todo">
    <ul class="c_list__todo">
      <li v-for="(todo, index) in todos" v-bind:key="index">
        {{ todo.body }}
        <div class="l_btn">
          <div class="c_btn">
          <button class="c_btn edit" @click="editTodo(todo)">Edit</button>
          <button class="c_btn delete" @click="deleteTodo(todo)">Delete</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CurrentTodo',
  methods: {
    editTodo (todo) {
      this.$store.dispatch('editTodo', todo)
    },
    deleteTodo (todo) {
      this.$store.dispatch("deleteTodo", todo)
    }
  },
  computed: {
    todos () {
      return this.$store.getters.todos
    }
  }
}
</script>
<style scoped>
  .c_current__todo {
    width: 100%;
  }
  .c_btn {
    width: 60px;
    height: 20px;
    border-radius: 4px;
    background-color: #ffffff;
  }
  .c_btn + .c_btn {
    margin-left: 10px;
  }
  .c_btn.edit {
    border: 1px solid blue;
  }
  .c_btn.delete {
    border: 1px solid #f63f22;
  }
  .c_list__todo {
    list-style: none;
    /* float: left; */
    text-align: left;
    position: absolute;
    left: 36%;
    padding: 0;
    width: 600px;
    padding-bottom: 20px;
  }
  .c_list__todo li {
    padding-bottom: 20px;
  }
  .l_btn {
    float: right;
  }
  .c_btn {
    display: inline;
  }
</style>


