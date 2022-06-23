class ShoppingBasket {

  constructor() {
    this.totalPrice = 0;
  }

  addItem(item) {
    this.totalPrice += item.getPrice();  
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}

module.exports = ShoppingBasket;
