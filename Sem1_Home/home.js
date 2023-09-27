"use strict";

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {
  let startNumber = 0;
  return {
    increment() {
      return ++startNumber;
    },
    decrement() {
      return --startNumber;
    },
  };
}

const numInc = createCounter();

console.log(numInc.increment());
console.log(numInc.increment());
console.log(numInc.increment());

const numDec = createCounter();
console.log(numDec.decrement());
console.log(numDec.decrement());
console.log(numDec.decrement());
