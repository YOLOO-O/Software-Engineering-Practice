import Product from "./domain/Product.js";
import Inventory from "./domain/Inventory.js";
import SaleController from "./application/SaleController.js";
import POSUI from "./presentation/POSUI.js";

console.log("=== POS System Browser Demo Start ===");

const inventory = new Inventory();

const apple = new Product("P001", "Apple", 2);
const milk = new Product("P002", "Milk", 3);

inventory.addProduct(apple, 50);
inventory.addProduct(milk, 30);

const controller = new SaleController(inventory);
const ui = new POSUI(controller);

ui.startSale();
ui.scanItem(apple, 3);
ui.scanItem(milk, 2);
ui.checkout(20);

console.log("=== POS System Browser Demo End ===");
