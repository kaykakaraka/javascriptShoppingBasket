const ShoppingBasket = require('./shoppingbasket');

describe('shopping basket',() => {
  it('returns 0 for total price when the basket is empty',() => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0);
  })
})
