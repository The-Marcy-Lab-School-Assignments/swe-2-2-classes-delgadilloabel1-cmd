class Rectangle {
  constructor(length, width) {
    this.length = length
    this.width = width
  }
  getArea() {
    return this.length * this.width
  }
  getPerimeter() {
    return this.length * 2 + this.width * 2
  }
  isSquare() {
    if (this.length === this.width) {
      return true
    } else {
      return false
    }
  }
}

class Vehicle {
  constructor(type, capacity, color = "black") {
    this.type = type;
    this.capacity = capacity;
    this.color = color;
    this.passengers = [];
  }

  paint(color) {
    this.color = color;
    return this.color;
  }

  addPassenger(passenger) {
    if (this.passengers.length >= this.capacity) {
      return -1;
    }
    this.passengers.push(passenger);
    return this.passengers.length;
  }
}

class PasswordManager {
  #password
  constructor(password) {
    this.#password = password
  }
  checkPassword(attempt) {
    if (attempt === this.#password) {
      return true
    } else {
      return false
    }
  }
  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword
      return true;
    }
    return false;
  }
}

class TodoList {
  #arrToDo = []
  constructor(title) {
    this.title = title

  }
  addItem(description) {
    this.#arrToDo.push(description)
    return this.#arrToDo.length
  }
  removeItem(description) {
    const index = this.#arrToDo.indexOf(description);
    if (index === -1) {
      return null
    }
    const [removedItem] = this.#arrToDo.splice(index, 1);
    return removedItem

  }
  getItems() {
    return [...this.#arrToDo]
  }
}

class BankAccount {
  #balance;
  static #totalOfAllAcc = 0;

  constructor(firstName, lastName, balance = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#balance = balance;
    BankAccount.#totalOfAllAcc += this.#balance;
  }

  showBalance() {
    return `Your balance is $${this.#balance.toFixed(2)}`;
  }

  deposit(amount) {
    this.#balance += amount;
    BankAccount.#totalOfAllAcc += amount;
    return `Your balance is $${this.#balance.toFixed(2)}`;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return "You do not have enough funds.";
    }
    this.#balance -= amount;
    BankAccount.#totalOfAllAcc -= amount;
    return `Your balance is $${this.#balance.toFixed(2)}.`;
  }

  static getTotalHoldings() {
    return BankAccount.#totalOfAllAcc;
  }
}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
