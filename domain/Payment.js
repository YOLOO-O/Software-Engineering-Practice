class Payment {
  constructor(amount, paymentType = "CASH") {
    this.amount = amount;
    this.paymentType = paymentType;
  }

  validatePayment(totalAmount) {
    return this.amount >= totalAmount;
  }
}
