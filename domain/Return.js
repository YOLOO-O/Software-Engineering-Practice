export default class Return {
  constructor(returnId, product, quantity) {
    this.returnId = returnId;
    this.product = product;
    this.quantity = quantity;
    this.refundAmount = 0;
  }

  calculateRefund() {
    this.refundAmount = this.product.getPrice() * this.quantity;
    return this.refundAmount;
  }

  processReturn(inventory) {
    inventory.increaseStock(this.product, this.quantity);
    console.log("Return processed. Refund:", this.refundAmount);
  }
}
