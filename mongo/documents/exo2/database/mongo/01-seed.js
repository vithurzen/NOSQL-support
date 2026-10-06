db.products.insertMany([
  {
    name: "Laptop Pro 14",
    variants: [
      {
        color: "black",
        price: 1499,
        stock: 0,
      },
      {
        color: "silver",
        price: 1899,
        stock: 12,
      },
    ],
  },

  {
    name: "Laptop Air 13",
    variants: [
      {
        color: "black",
        price: 1299,
        stock: 8,
      },
      {
        color: "blue",
        price: 1399,
        stock: 0,
      },
    ],
  },

  {
    name: "Laptop Ultra 16",
    variants: [
      {
        color: "black",
        price: 1799,
        stock: 15,
      },
      {
        color: "silver",
        price: 1999,
        stock: 20,
      },
    ],
  },

  {
    name: "Laptop Mini",
    variants: [
      {
        color: "white",
        price: 999,
        stock: 0,
      },
    ],
  },

  {
    name: "Laptop Essential",
    variants: [
      {
        color: "gray",
        price: 1599,
        stock: 3,
      },
    ],
  },
]);