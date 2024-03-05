Ext.define(
  "MyApp.model.Person",
  {
    name: "Unknown",
    requires: ["MyApp.util.Util", "MyApp.util.Math"],

    constructor: function (name) {
      if (name) {
        this.name = name;
      }
    },

    eat: function (foodType) {
      MyApp.util.Util.logInfo(this.name + " is eating: " + foodType);
      MyApp.util.Math.add(2, 5);
      //   console.log(this.name + " is eating: " + foodType);
    },
  },
  function () {
    var bob = Ext.create("MyApp.model.Person", "Bob");
    bob.eat("Salad");
  }
);
