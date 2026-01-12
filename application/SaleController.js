class SaleController {
  constructor(inventory) {
    this.inventory = inventory;
    this.currentSale = null;
  }

  createSale() {
    this.currentSale = new Sale(`SALE-${Date.now()}`);
  }

  addItem(product, quantity) {
    this.currentSale.addItem(product, quantity);
  }

  calculateTotal() {
    return this.currentSale.calculateTotal();
  }

  processPayment(amount) {
    const payment = new Payment(amount);
    const total = this.currentSale.totalAmount;

    if (!payment.validatePayment(total)) {
      throw new Error("Payment amount is insufficient.");
    }

    this.currentSale.items.forEach(item => {
      this.inventory.reduceStock(item.product, item.quantity);
    });

    const receipt = new Receipt(`R-${Date.now()}`, this.currentSale);
    receipt.printReceipt();

    this.currentSale.completeSale();
  }
}
