const app = Vue.createApp({
  data() {
    return {
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
  methods: {},
});

app.mount("#root");
