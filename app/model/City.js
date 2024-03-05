Ext.define(
  "MyApp.model.City", // className => <AppName.folderName.ClassAndFileName>
  {
    extend: "Ext.data.Model",
    fields: [
      "id",
      "name",
      { name: "phone", type: "string" },
      { name: "age", type: "int" },
    ],
  }, //configuration/ properties
  function () {
    var city = Ext.create("MyApp.model.City");
    console.log(city);
  }
);
