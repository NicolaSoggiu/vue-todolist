const app = Vue.createApp({
  data() {
    return {
      error: false,
      newTodo: "",
      todos: [
        {
          text: "fare la spesa",
          done: true,
        },
        {
          text: "andare dal meccanico",
          done: true,
        },
        {
          text: "ritirare il pacco",
          done: true,
        },
        {
          text: "passare dal medico",
          done: true,
        },
        {
          text: "andare a correre",
          done: true,
        },
      ],
    };
  },
  methods: {
    addTodo() {
      let cleanTodo = this.newTodo.trim();
      if (cleanTodo.length > 5) {
        this.todos.unshift({
          text: cleanTodo,
          done: "<i class='bi bi-x'></i>",
        });
        this.newTodo = "";
        this.error = false;
      } else {
        this.error = true;
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    todoLineThrough(i) {
      this.todos[i].done = !this.todos[i].done;
    },
  },
});

app.mount("#root");
