import { Product, taxCalculator } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Phone",
    price: 150.0,
  },
  {
    description: "Tablet",
    price: 200.0,
  },
];

const [total, tax] = taxCalculator({ tax: 0.15, products: shoppingCart });
console.log("Total:", total, "Tax:", tax);
