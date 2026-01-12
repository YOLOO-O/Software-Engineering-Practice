class POSUI {
  constructor(controller) {
    this.controller = controller;
  }

  startSale() {
    this.controller.createSale();
  }

  scanItem(product, quantity = 1) {
    this.controller.addItem(product, quantity);
  }

  checkout(paymentAmount) {
    this.controller.calculateTotal();
    this.controller.processPayment(paymentAmount);
  }
}
