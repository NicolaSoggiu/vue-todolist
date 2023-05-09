const app = Vue.createApp({
  data() {
    return {
      error: false,
      newTodo: "",
      todos: [
        {
          text: "fare la spesa",
          done: "<i class='bi bi-x'></i>",
        },
        {
          text: "andare dal meccanico",
          done: "<i class='bi bi-x'></i>",
        },
        {
          text: "ritirare il pacco",
          done: "<i class='bi bi-x'></i>",
        },
        {
          text: "passare dal medico",
          done: "<i class='bi bi-x'></i>",
        },
        {
          text: "andare a correre",
          done: "<i class='bi bi-x'></i>",
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
  },
});

app.mount("#root");
