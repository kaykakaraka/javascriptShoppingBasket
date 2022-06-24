const Candy = require('./candy');
const ShoppingBasket = require('./shoppingbasket');

describe('shopping basket',() => {
  it('returns 0 for total price when the basket is empty',() => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0);
  })

  it('adds a candy and returns its price as the total price',() => {
    const candyDouble = { getPrice: () => 3.99 };
    const basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(3.99);
  })

  it('adds multiple candies and gives the sum of their prices',() => {
    const candyDouble = { getPrice: () => 3.99 };
    const basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(7.98);
  })

  it('applies a disocunt',() => {
    const candyDouble = { getPrice: () => 3.99 };
    const basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    basket.applyDiscount(2);
    expect(basket.getTotalPrice()).toEqual(5.98);
  })

})
