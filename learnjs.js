'use strict';
/* ############ Basic JS ############# */

/* let userNumber = +prompt('Enter your number', '');
if (userNumber > 0) {
  alert(1);
} else if (userNumber < 0) {
  alert(-1);
} else {
  alert(0);
} */

// let result = (a + b < 4) ? 'Мало' : 'Много';

/* let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  ''; */

/* let age = +prompt('Enter your age', '');
if (age >= 14 && age <= 90) {
  alert('You are adult!');
} else {
  alert('You are too young or too old!');
} */

/* if (!(age >= 14 && age <= 90)) {
  alert('No');
}

if (age < 14 || age > 90) {
  alert('Yes');
} */

// let login = prompt('Enter login', '');


/* if (login === 'Админ') {

  let pass = prompt('Enter pass', '');

    if (pass === 'Я главный') {
      alert('Здравствуйте!');
    } else if (pass === null || pass === '') {
      alert('Отменено');
    } else {
      alert('Неверный пароль');
    }

} else if (login === '' || login === null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
} */

/*
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    alert(i);
  }
} */

/*
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
 */

/*
let number = +prompt('Enter number > 100', '');

while (number <= 100 && number) {
  number = +prompt('Try again', '');
}

alert('Good!');
 */

/* let n = 15;
next:
for (let i = 2; i < n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue next;
  }
  alert(i);
} */
/* switch (browser) {
  case 'Edge':
    alert("You've got the Edge!");
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Okay we support these browsers too');
    break;

  default:
    alert('We hope that this page looks ok!');
} */

/* if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if (browser === 'Chrome'
  || browser === 'Firefox'
  || browser === 'Safari'
  || browser === 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
} */

// const number = +prompt('Введите число между 0 и 3', '');

/* if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
} */

/* switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
} */
/*
function checkAge(age) {
  if (age > 18) {
    return true;
  }
return confirm('Родители разрешили?');
}
 */
/* let age = +prompt('Your age?', '');

function checkAge(age) {
return (age > 18) || confirm('Родители разрешили?');
}

checkAge(age); */
/*
function min(a, b) {
  return a < b ? a : b;
}
console.log(min(2, 5));  //== 2
console.log( min(3, -1)) //== -1
console.log( min(1, 1)) //== 1
 */

/* function pow(x, n) {
  x = +prompt('x?', '');
  n = +prompt('n?', '');
  alert(x ** n);
  return x ** n;
}
pow(); */

/* function ask(question, yes, no) {
  if (console.log(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
);
 */

/* ################################## */
/* ############ Objects ############# */
/* ################################## */

// #1

/* const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';

delete user.name;

console.log(user); */

// #2

/*
let schedule = {
  mode: 10,
};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty(schedule));
 */

// #3

/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function getTotalSalaries(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log(getTotalSalaries(salaries));
 */

// #4

/* function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
let menu = {
  width: 400,
  height: 500,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);
 */

// #5

/* let calculator = {
  read() {
    this.a = +prompt('a?', '');
    this.b = +prompt('b?', '');
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */

// #6

/* let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert(this.step);
    return this;
  }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().down().up().up().showStep(); */

// #7

/* function Calculator() {
  this.read = function () {
    this.a = +prompt('a?', '');
    this.b = +prompt('b?', '');
  }
  this.sum = function () {
    return this.a + this.b;
  }
  this.mul = function () {
    return this.a * this.b;
  }
}

let calc = new Calculator();
calc.read();

alert( "Sum=" + calc.sum() );
alert( "Mul=" + calc.mul() ); */

// #8

/* function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.a = +prompt('Сколько нужно добавить?', 0);
    return this.value += this.a;
  }
}

let accumulator = new Accumulator(10); // начальное значение

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); */

/* ################################## */
/* ############ Numbers ############# */
/* ################################## */

// #1 - Сумма пользовательских чисел

/* let num1 = +prompt('Enter first number', '');
let num2 = +prompt('Enter second number', '');

alert(num1 + num2); */

// #2 - Почему 6.35.toFixed(1) == 6.3?

// alert( 6.35.toFixed(1) );
// alert( Math.round(6.35 * 10) / 10);

// #3 - Ввод числового значения

/* function readNumber() {

  let num;

  while (isNaN(num)) {
      num = prompt('Enter number', '0');
  }

  return num;

}

alert(`Число: ${readNumber()}`); */


// #4 - Случайное число от min до max

/* function random(min, max) {
  return (Math.random() * (max - min) + min).toFixed(10);
}

alert(random(2, 7)); */

// #5 - Случайное целое число от min до max

/* function randomInteger(min, max) {
  return (Math.random() * (max - min) + min).toFixed();
}

alert(randomInteger(2, 7)); */


/* ################################## */
/* ############ Strings ############# */
/* ################################## */

// #1 - Сделать первый символ заглавным

// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }

// #2 - Проверка на спам

/* function checkSpam(str) {
  let reg1 = new RegExp('viagra', 'ig');
  let reg2 = new RegExp('xxx', 'ig');
  if (str.match(reg1) || str.match(reg2)) {
    return true;
  }
  return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit")); */

// #3 - Усечение строки

/* function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, 19) + '...';
  }
  return str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20)); */

// #4 - Выделить число

/* function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue('$1205')); */

/* ################################## */
/* ############ Arrays ############# */
/* ################################## */

// #1 - Операции с массивами

/* //1
let styles = ['Джаз', 'Блюз'];
console.log(styles);
//2
styles.push('Рок-н-ролл');
console.log(styles);
//3
styles[Math.floor(styles.length / 2)] = 'Классика';
console.log(styles);
//4
console.log(styles.shift());
console.log(styles);
//5
styles.unshift('Рэп', 'Регги');
console.log(styles);
 */
// # 2 - Сумма введённых чисел

/* function sumInput() {
  let arr = [];
  let sum = 0;
  let num = prompt('Number?', '0');

  while (typeof(+num) === 'number') {
    if (isNaN(num) === true || num === '' || num === null) {
      break;
    } else {
      arr.push(+num);
      num = prompt('Number?', '');
    }
  }

  for (let el of arr) {
    sum += el;
  }
  alert(sum);
}

sumInput(); */

// #3 - Подмассив наибольшей суммы

/* const arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
  let maxSum = 0;
  let substrSum = 0;
  for (let el of arr) {
    // console.log('el = ', el);
    substrSum += el;

    maxSum = Math.max(maxSum, substrSum);
    // console.log('maxSum = ', maxSum);
    if (substrSum < 0) {
      substrSum = 0;
    }
    // console.log('substrSum = ', substrSum);
  }
  return maxSum;
}
console.log(getMaxSubSum(arr)); */

// #4 - Переведите текст вида border-left-width в borderLeftWidth

/* function camelize(str) {
  // let arr = str.split('-');
  // for (let i = 1; i < arr.length; i++) {
  //   arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  // }
  // return arr.join('');
  return str.split('-')
    .map((el, index) => index === 0 ? el : el[0].toUpperCase() + el.slice(1))
    .join('');
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition")); */

// #5 - Фильтрация по диапазону

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

/* function filterRange(arr, a, b) {
  let filtered = arr.slice();
  return filtered.filter(el => el >= a && el <= b);
}
let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4)); */

// #6 - Фильтрация по диапазону "на месте"

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

/* function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (el < a || el > b) {
      arr.splice(i, 1);
    }
  }
}
let arr = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr, 1, 4));
console.log(arr);
 */

// #7 - Сортировать в порядке по убыванию

/* let arr = [5, 2, 1, -10, 8];

function sortToSmall(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortToSmall(arr)); */

// #8 - Скопировать и отсортировать массив

/* function copySorted(arr) {
  let copy = arr.slice();
  return copy.sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr));
console.log(arr); */

// #9 - Создать расширяемый калькулятор

/* function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };
  this.calculate = function (str) {
    let arr = str.split(' '),
      a = +arr[0],
      op = arr[1],
      b = +arr[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b)
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func
  };
}

let calc = new Calculator;
console.log(calc.calculate("15 + 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); */

// #10 - Трансформировать в массив имён

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = [];
users.forEach(user => names.push(user.name));

console.log( names ); */

// #11 - Трансформировать в объекты

/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id}))

console.log( usersMapped[0].id) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин */

// #12 - Отсортировать пользователей по возрасту

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age)
}
sortByAge(arr);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name); */

// #13 - Перемешайте массив

/* function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);
// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
} */

//  #14 - Получить средний возраст

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users) {
  let total = users.reduce((sum, user) => sum + user.age, 0)
  return total / users.length;
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28 */

// #15 - Оставить уникальные элементы массива

function unique(arr) {
  let uniq = [];
  for (let el of arr) {
    if (!uniq.includes(el)) {
      uniq.push(el);
    }
  }
  return uniq;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) );
