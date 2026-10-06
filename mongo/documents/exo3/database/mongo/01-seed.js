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
    stock: {
      quantity: 12,
      reserved: 3,
      warehouse: "PAR",
    },
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
    stock: {
      quantity: 8,
      reserved: 2,
      warehouse: "LYO",
    },
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
    stock: {
      quantity: 35,
      reserved: 5,
      warehouse: "PAR",
    },
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
    stock: {
      quantity: 0,
      reserved: 0,
      warehouse: "LIL",
    },
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
    stock: {
      quantity: 3,
      reserved: 1,
      warehouse: "PAR",
    },
  },
]);