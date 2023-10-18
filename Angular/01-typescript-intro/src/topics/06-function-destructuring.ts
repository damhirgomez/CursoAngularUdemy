export interface Product {
  description: string;
  price: number;
}

// const phone: Product = {
//   description: "Nokia phone",
//   price: 150.0,
// };

// const tablet: Product = {
//   description: "Samsung tablet",
//   price: 200.0,
// };

interface TaxCalculatorOptions {
  tax: number;
  products: Product[];
}

export function taxCalculator(options: TaxCalculatorOptions): [number, number] {
  let total = 0;
  const { tax, products } = options;
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

// const shoppingCard = [phone, tablet];
// const tax = 0.15;

// const [total, taxes] = taxCalculator({ tax: tax, products: shoppingCard });

// console.log("Total:", total, "Tax:", taxes);
