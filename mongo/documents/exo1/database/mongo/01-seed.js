db.products.insertMany([
  {
    name: "Laptop Pro 14",
    price: 1499,
    categories: [
      { id: "computers", name: "Ordinateurs" },
    ],
    stock: {
      quantity: 12,
    },
  },
  {
    name: "Clavier mécanique",
    price: 129,
    categories: [
      { id: "accessories", name: "Accessoires" },
    ],
    stock: {
      quantity: 50,
    },
  },
  {
    name: "Souris verticale",
    price: 59,
    categories: [
      { id: "accessories", name: "Accessoires" },
      { id: "ergonomics", name: "Ergonomie" },
    ],
    stock: {
      quantity: 30,
    },
  },
  {
    name: "Webcam 4K",
    price: 179,
    categories: [
      { id: "accessories", name: "Accessoires" },
    ],
    stock: {
      quantity: 8,
    },
  },
  {
    name: "Écran 27 pouces",
    price: 299,
    categories: [
      { id: "screens", name: "Écrans" },
    ],
    stock: {
      quantity: 45,
    },
  },
  {
    name: "Dock USB-C",
    price: 89,
    categories: [
      { id: "accessories", name: "Accessoires" },
    ],
    stock: {
      quantity: 20,
    },
  },
]);