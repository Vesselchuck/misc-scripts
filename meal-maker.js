const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return this._meal = mealToCheck;
    } else {
      return "Error: not a string";
    };
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return this._price = priceToCheck;
    } else "Error: not a number";
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  }
};

menu.meal = "Banana Pie";
menu.price = 4;

console.log(menu.todaysSpecial);