export default class Inventory {
  constructor() {
    this.products = new Map();
  }

  addProduct(product, quantity) {
    this.products.set(product.productId, {
      product,
      quantity
    });
  }

  reduceStock(product, quantity) {
    const record = this.products.get(product.productId);
    if (record && record.quantity >= quantity) {
      record.quantity -= quantity;
    }
  }

  increaseStock(product, quantity) {
    const record = this.products.get(product.productId);
    if (record) {
      record.quantity += quantity;
    }
  }
}
