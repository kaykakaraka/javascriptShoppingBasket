class ShoppingBasket {

  constructor() {
    this.totalPrice = 0;
    this.discount = 0;
  }

  addItem(item) {
    this.totalPrice += item.getPrice();  
  }

  applyDiscount(discount) {
    this.discount = discount;
    console.log(this.discount);
  }

  getTotalPrice() {
    console.log(this.totalPrice);
    console.log(this.discount);
    return this.totalPrice - this.discount;
  }
}

module.exports = ShoppingBasket;
