import SaleItem from "./SaleItem.js";

export default class Sale {
  constructor(saleId) {
    this.saleId = saleId;
    this.items = [];
    this.totalAmount = 0;
  }

  addItem(product, quantity = 1) {
    const item = new SaleItem(product, quantity);
    this.items.push(item);
  }

  calculateTotal() {
    this.totalAmount = this.items.reduce(
      (sum, item) => sum + item.subTotal,
      0
    );
    return this.totalAmount;
  }

  completeSale() {
    console.log("Sale completed. Total:", this.totalAmount);
  }
}
