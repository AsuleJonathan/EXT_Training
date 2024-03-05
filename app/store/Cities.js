Ext.define("MyApp.store.Cities", {
  extend: "Ext.data.Store",
  alias: "store.cities",
  model: "MyApp.model.City",
  data: [
    {
      id: 1,
      name: "Nairobi",
      phone: "254525452",
      age: 200,
    },
    {
      id: 1,
      name: "Moyale",
      phone: "2545254452",
      age: 20,
    },
  ],
});
