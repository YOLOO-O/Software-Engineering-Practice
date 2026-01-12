export default class Receipt {
  constructor(receiptNumber, sale) {
    this.receiptNumber = receiptNumber;
    this.sale = sale;
    this.date = new Date();
  }

  printReceipt() {
    console.log("====== RECEIPT ======");
    console.log("Receipt No:", this.receiptNumber);
    console.log("Date:", this.date.toLocaleString());

    this.sale.items.forEach(item => {
      console.log(
        `${item.product.name} x${item.quantity} = $${item.subTotal}`
      );
    });

    console.log("Total: $", this.sale.totalAmount);
    console.log("=====================");
  }
}
