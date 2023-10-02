"use strict";
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

// function getPrototypeChain(obj) {
//   let arr = [];
//   let newObj = Object.getPrototypeOf(obj);
//   while (newObj !== null) {
//     arr.push(newObj);
//     newObj = Object.getPrototypeOf(newObj);
//   }
//   return arr;
// }

// const object = [];

// console.log(getPrototypeChain(object));

// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // "Меня зовут John и мне 25 лет."

// function Person(name, age) {
//   // this={}
//   // this.__proto__ = Person.protype
//   this.name = name;
//   this.age = age;
//   // return this
// }

// Функиция конструктор в объекте начинается с загалвной буквы

// Person.prototype.introduce = function () {
//   console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
// };

// const person1 = new Person("John", 25);
// person1.introduce(); // "Меня зовут John и мне 25 лет."

// Напишите конструктор объекта BankAccount, который будет
// представлять банковский счет. Конструктор должен принимать два
// аргумента: accountNumber (строка) и balance (число). Конструктор
// должен создавать объект с указанными свойствами accountNumber и
// balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает
// баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
// баланс на указанную сумму.
// 3. getBalance(): возвращает текущий баланс счета.

// В случае неверно переданных значений, либо невозможности провести
// операцию, должны выводиться соответсвующие сообщения.

// function BankAccount(accountNumber, balance) {
//   this.accountNumber = accountNumber;
//   this.balance = balance;
// }

// BankAccount.bankName = "GB";

// BankAccount.prototype.deposit = function (amount) {
//   validateMoney(amount);
//   this.balance += amount;
// };
// BankAccount.prototype.withdraw = function (amount) {
//   validateMoney(amount);
//   if (this.balance < amount) {
//     throw new Error(`Insufficient funds in account ${this.accountNumber}`);
//   }
//   this.balance -= amount;
// };

// BankAccount.prototype.printBalance = function () {
//   console.log(
//     `${BankAccount.bankName} account ${this.accountNumber} balance: ${this.balance}`
//   );
// };

// function validateMoney(amount) {
//   if (!Number.isFinite(amount) || amount <= 0) {
//     throw new Error(`Wrong deposit amount, must be a positive number`);
//   }
//   if ((amount % 1).toString().length > 4) {
//     throw new Error(`Wrong money format`);
//   }
// }

// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500);
// // account1.withdraw(200);
// // account1.withdraw(1500); // Insufficient funds in account "1234567890"
// // account1.withdraw(-200); // Wrong deposit amount, must be a positive number.
// // account1.deposit(-500); // Wrong deposit amount, must be a positive number.
// // account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
// account1.printBalance(); // GBank account "1234567890" balance: 1300

// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.

// Создайте класс Dog, который наследуется от класса Animal. Для
// класса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

// Пример использования:
// const animal1 = new Animal("Животное");
// animal1.speak(); // "Животное издает звук."
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // "Бобик издает звук."
// console.log(dog1.breed); // "Дворняжка"
// dog1.fetch(); // "Бобик принес мяч."

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} издает звук`);
  }
}

class Dog extends Animal {
  constructor(name, bread) {
    super(name);
    this.bread = bread;
  }
  fetch() {
    console.log(`Собака ${this.name} принесла мяч.`);
  }
}

const animal1 = new Animal("Животное");
animal1.speak(); // "Животное издает звук."
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // "Бобик издает звук."
console.log(dog1.bread); // "Дворняжка"
dog1.fetch(); // "Бобик принес мяч."
