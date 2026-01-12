// Create inventory and products
const inventory = new Inventory();

const apple = new Product("P001", "Apple", 2);
const milk = new Product("P002", "Milk", 3);

inventory.addProduct(apple, 50);
inventory.addProduct(milk, 30);

// Create controller and UI
const saleController = new SaleController(inventory);
const posUI = new POSUI(saleController);

// Simulate cashier actions
posUI.startSale();
posUI.scanItem(apple, 3);
posUI.scanItem(milk, 2);
posUI.checkout(20);
