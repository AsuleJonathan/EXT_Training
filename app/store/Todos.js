Ext.define("MyApp.store.Todos", {
  extend: "Ext.data.Store",
  alias: "store.todos",
  model: "MyApp.model.Todo",
  requires: "MyApp.model.Todo",
  autoLoad: true,
  sorters: ["id", "userId"],
});

// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
