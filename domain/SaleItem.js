export default class SaleItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
    this.subTotal = this.calculateSubTotal();
  }

  calculateSubTotal() {
    return this.product.getPrice() * this.quantity;
  }
}
