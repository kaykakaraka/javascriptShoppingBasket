class Candy {

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    // console.log('This should be a name', this.name);
    return this.name;
  }

  getPrice() {
    return this.price;
  }

}

module.exports = Candy;
