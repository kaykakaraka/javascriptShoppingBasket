const Candy = require('./candy');
const ShoppingBasket = require('./shoppingbasket');

describe('shopping basket',() => {
  it('returns 0 for total price when the basket is empty',() => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0);
  })

  it('adds a candy and returns its price as the total price',() => {
    const candyDouble = { getPrice: () => 4.99 };
    const basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(4.99);
  })

})
