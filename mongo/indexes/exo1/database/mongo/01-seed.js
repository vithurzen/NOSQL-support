db.products.deleteMany({});

db.products.insertMany([
  {
    _id: "product-1",
    name: "Laptop Pro 14",
    price: 1499,
    categories: [
      { id: "computers", name: "Ordinateurs" },
    ],
  },
  {
    _id: "product-2",
    name: "Clavier mécanique",
    price: 129,
    categories: [
      { id: "accessories", name: "Accessoires" },
    ],
  },
  {
    _id: "product-3",
    name: "Souris verticale",
    price: 59,
    categories: [
      { id: "accessories", name: "Accessoires" },
      { id: "ergonomics", name: "Ergonomie" },
    ],
  },
  {
    _id: "product-4",
    name: "Écran 27 pouces",
    price: 299,
    categories: [
      { id: "screens", name: "Écrans" },
    ],
  },
  {
    _id: "product-5",
    name: "Dock USB-C",
    price: 89,
    categories: [
      { id: "accessories", name: "Accessoires" },
    ],
  },
]);