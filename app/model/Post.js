Ext.define("MyApp.model.Post", {
  extend: "Ext.data.Model",

  idProperty: "id",
  fileds: ["id", "userId", "title", "body"],

  proxy: {
    type: "ajax", //rest, ajax
    url: "https://jsonplaceholder.typicode.com/posts",
    reader: {
      type: "json",
      // rootProperty: "",
    },
  },
});
