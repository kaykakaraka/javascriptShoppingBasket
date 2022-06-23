const Candy = require('./candy');

describe('candy',() => {
  it('returns the name and price of a candy',() => {
    const candy = new Candy('Mars', '4.99');
    expect(candy.getName()).toEqual('Mars');
    expect(candy.getPrice()).toEqual('4.99');
  })
})
