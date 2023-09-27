"use strict";

// Павел Тарасов Полный курс:
// 1 - https://youtu.be/MbRmNGKXVOg
// 2 - https://youtu.be/dUlEIwEDkV4
// 3 - https://youtu.be/7qpbKy9XS48
// 4 - https://youtu.be/Su9Gml6xUUU
// 5 - https://youtu.be/lXJH1l9s214
// 6 - https://youtu.be/qdyJkc-BjQA
// 7 - https://youtu.be/fGTG-mrGpFY
// 8 - https://youtu.be/lXbF_Jta6vQ
// Павел Тарасов https://disk.yandex.ru/d/dNcHjZs3c96ypw

// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // [1, 2, 3, 4, 5]

// function removeDuplicates(...params) {
//   return params.filter((item, index) => params.indexOf(item) === index);
// }

function removeDuplicates(...params) {
  return [...new Set(params).values()];
}
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Задание 2 (тайминг 25 минут)
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

// function getEvenNumbers(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

function getEvenNumbers(arr) {
  return arr.filter((item) => item % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5]));
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

function calculateAverage(arr) {
  return arr.reduce((acc, a) => acc + a, 0) / arr.length;
}

console.log(calculateAverage([2, 1, 3]));
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// function capitalizeFirstLetter(str) {
//   const words = str.split(" ");
//   for (let index = 0; index < words.length; index++) {
//     words[index] = words[index][0].toUpperCase() + words[index].slice(1);
//   }
//   return words.join(" ");
// }

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
    .join(" ");
}

console.log(capitalizeFirstLetter("bla bla bla"));

// Задание 3 (тайминг 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(num) {
  let result = num;
  return {
    res() {
      return result;
    },
    add(num) {
      result += num;
    },
    subtract(num) {
      result -= num;
    },
  };
}

const calc = createCalculator(5);
calc.add(10);
calc.subtract(2);
console.log(calc.res());

// Задание 4 (тайминг 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет возвращать
// приветствие с использованием этого имени.

// // Пример использования:
// const greeting = createGreeting('John');
// console.log(greeting()); // "Hello, John!"
function createGreeting(name) {
  return function () {
    return `Hello, ${name} !`;
  };
}
const greeting = createGreeting("f");
console.log(greeting());

// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает минимальную длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина больше или равна заданной длине,
// в противном случае - false.

// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // true
// console.log(isPasswordValid('secret')); // false

// function createPasswordChecker(minLenght) {
//   return function (password) {
//     if (password.length >= minLenght) {
//       return true;
//     } else {
//       return false;
//     }
//   };
// }

function createPasswordChecker(minLenght) {
  return function (password) {
    {
      return password.length >= minLenght;
    }
  };
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid("password")); // true
console.log(isPasswordValid("secret")); // false

// Задание 6 (тайминг 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.

// // Пример использования:
// console.log(sumDigits(123)); // 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // 39 (4 + 5 + 6 + 7 + 8 + 9)

function sumDigits(number) {
  if (number < 10) {
    return number;
  }
  return (number % 10) + sumDigits(Math.trunc(number / 10));
}

console.log(sumDigits(123)); // 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // 39 (4 + 5 + 6 + 7 + 8 + 9)
