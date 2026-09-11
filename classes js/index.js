// classes are just special kind of functions

class Product {
    constructor(name, price) {
        this.price = price;
        this.name = name;
        this.inStock = true;
    }
    displayProduct() {
        console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(tax) {
        return this.price * tax + this.price;
    }
}

const tax = 0.18;

const product1 = new Product("Laptop", 1200.99);
const product2 = new Product("Mouse", 25.5);
const product3 = new Product("Keyboard", 75.98);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

console.log(`The total price of product 1 including tax is $${product1.calculateTotal(tax).toFixed(2)}`);
console.log(`The total price of product 2 including tax is $${product2.calculateTotal(tax).toFixed(2)}`);
console.log(`The total price of product 3 including tax is $${product3.calculateTotal(tax).toFixed(2)}`);