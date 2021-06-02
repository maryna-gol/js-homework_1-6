console.log("Hello World");

// split
const message = 'Welcome to Bahamas!';

// Розбиває рядок по розмежовувачу, в такому випадку це пробіл
console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// Виклик split з нового рядка розіб'є по буквах
console.log(message.split('')); // [багато букв :)]

// join
const clients = ['Mango', 'Poly', 'Ajax'];

// Зшиє всі елементи масиву в рядок,
// між кожною парою елементів буде вказаний роздільник
console.log(clients.join(' ')); // "Mango Poly Ajax"
console.log(clients.join(',')); // "Mango,Poly,Ajax"
console.log(clients.join('-')); // "Mango-Poly-Ajax"

// 2. Методи indexOf() і includes()
//const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

console.log(clients.indexOf('Poly')); // 2
console.log(clients.indexOf('Monkong')); // -1

//const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

console.log(clients.includes('Poly')); // true
console.log(clients.includes('Monkong')); // false

// 2.1. Перевірка множинних умов з includes()
const fruit = 'apple';

if (fruit === 'apple' || fruit === 'strawberry') {
  console.log('It is a red fruit!');
}
// Можемо переписати умову, з використанням Array.includes, це дуже просто і масштабовано.

// Виносимо варіанти в масив
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
const fruit = 'cherry';

if (redFruits.includes(fruit)) {
  сonsole.log('It is a red fruit!');
}
// Function

const withdraw = function(amount, balance) {
  if (amount === 0) {
    console.log('Для проведення операції введіть суму більше нуля.');
  } else if (amount > balance) {
    console.log('Недостатньо коштів на рахунку.');
  } else {
    console.log('Операція зняття коштів проведена.');
  }
};

withdraw(0, 300); // Для проведення операції введіть суму більше нуля.
withdraw(500, 300); // Недостатньо коштів на рахунку.
withdraw(100, 300); // Операція зняття коштів проведена.

// Звичайний функціональний вираз
const add = function(a, b, c) {
  return a + b + c;
};

// Теж саме записано, як стрілкова функція
const add = (a, b, c) => a + b + c;

// Якщо параметрів кілька, то вони перераховуються через кому в круглих дужках.
const fn = (a, b, c) => {
  return a + b + c;
};

// Якщо параметр один, то він може бути без круглих дужок.
const fn = x => {
  return x * 2;
};

// Якщо параметрів немає, то обов'язково повинні бути порожні круглі дужки.
const fn = () => {
  console.log('Hello! :]');
};
// Після => йде тіло функції. Тут може бути два варіанти: з фігурними дужками і без них.

const fn = (a, b, c) => {
  return a + b + c;
};

// eller

const fn = (a, b, c) => a + b + c;



// Задание 1

function checkAge(age) {
  if (age >=18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

// Задание 2
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line
  
  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }


    return "Access denied, wrong password!";
  // Change code above this line
}
// OR

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
  // Change code above this line
}

// Задание 3
function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return "Your order is empty!";
  } if (ordered > available) {
    	return "Your order is too large, not enough goods in stock!";
  }

    	return "The order is accepted, our manager will contact you";

  // Change code above this line
}

// OR

function checkStorage(available, ordered) {
  // Change code below this line
  let message;

  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  return message;
  // Change code above this line
}

// Задание 4
// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"];

// Задание 5
const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line

const firstElement = fruits[0];

const secondElement = fruits[1];

const lastElement = fruits[3];

// Задание 6

const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line

fruits[1] = "peach";
fruits[3] = "banana";

// Задание 7
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

const fruitsArrayLength = fruits.length;

// Задание 8
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

const lastElementIndex = fruits.length - 1;
      
const lastElement = fruits[lastElementIndex];
// Задание 9
function getExtremeElements(array) {
  
  const firstElement = array[0];
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  
  return [firstElement, lastElement]
}

// Задание 10
function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  
  words = message.split(delimeter);
	
  // Change code above this line
  return words;
}

// Задание 11
function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line

 return message.split(" ").length * pricePerWord;

  // Change code above this line
}

// calculateEngravingPrice("JavaScript is in my blood", 10
// calculateEngravingPrice("JavaScript is in my blood", 20) 

// Задание 12

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
  string = array.join(delimeter);
  // Change code above this line
  return string;
}

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// makeStringFromArray(["M", "a", "n", "g", "o"], ""))

// Задание 13
function slugify(title) {
  // Change code below this line
	const slug = title.toLowerCase().split(' ').join('-');
  	return slug
  
}
// slugify("Arrays for begginers")
// slugify("English for developer"

// Задание 14
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(2);

// Задание 15
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); 

// Задание 16
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let arr = firstArray.concat(secondArray);
 if (arr.length>maxLength) {
      arr.length = maxLength;
     return arr;
  }
  return arr.slice(0,);
}

// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) 
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)

// Задание 17
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1 ) { // Change this line
  console.log(i);
}

// Задание 18
function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  return sum;
} 

calculateTotal(1);
calculateTotal(3);
calculateTotal(7);

// Задание 19

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i< fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// Задание 20
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (const item of order) {
  total += item;
  }
  // Change code above this line
  return total;
}

calculateTotalPrice([12, 85, 37, 4])
calculateTotalPrice([164, 48, 291])
calculateTotalPrice([412, 371, 94, 63, 176])

// Задание 21
function findLongestWord(string) {
	const arrayString = string.split(" ");
	let longestWord = arrayString[0];
	for (let i = 0; i < arrayString.length; i+=1) {
		if (longestWord.length < arrayString[i].length) {
			longestWord = arrayString[i];
		}
	}
	return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog") //jumped

findLongestWord("Google do a roll") //Google

// Задание 22
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for(let i = min; i<=max; i+=1){
  numbers.push(i);
  }
  // Change code above this line
  return numbers;
}

createArrayOfNumbers(1, 3)  //[1, 2, 3]

createArrayOfNumbers(14, 17)  //[14, 15, 16, 17]

// Задание 23
function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (const number of numbers) {
      if (number > value) {
          filteredNumbers.push(number);
      }
  }
  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3)
//[4, 5]
filterArray([1, 2, 3, 4, 5], 4) 
//[5]
filterArray([1, 2, 3, 4, 5], 5)
//[]
// Задание 24
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return(fruits.includes(fruit)); // Change this line
}
checkFruit("plum") //true

checkFruit("mandarin") //false

// Задание 25
function getCommonElements(array1, array2) {
  //Объявить Новый пустой массив,
    const uniqieElements = [];
  //через фор оф перебрать элементы первого массива,
    for (const element of array1) {
  //через иф проверить включаются элементы второго массива в первый(инклуд),
        if (array2.includes(element)) {
  //вывести общие элементы в Новый массив(push)
          uniqieElements.push(element);
          }
  }
  //и ретерн новый массив
    return uniqieElements;
  // Change code above this line
  } 
  
  getCommonElements([1, 2, 3], [2, 4]) //[2]
  getCommonElements([1, 2, 3], [2, 1, 17, 19]) //[1, 2]
  getCommonElements([1, 2, 3], [10, 20, 30]) //[]
  

// Задание 26
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for(const item of order) {
    total += item;
  }
  return total;
}
calculateTotalPrice([12, 85, 37, 4]) //138
calculateTotalPrice([164, 48, 291])  //503

// Задание 27

function filterArray(numbers, value) {
  const filteredNumbers = [];
  for(const number of numbers) {
  let i = 0; i < numbers.length; i += 1;
    if (number > value) {
      filteredNumbers.push(number);
    }	
  }
return filteredNumbers;
}
filterArray([1, 2, 3, 4, 5], 3) //[4, 5]
filterArray([1, 2, 3, 4, 5], 4) //[5]
filterArray([1, 2, 3, 4, 5], 5) //[]

// Задание 28
const a = 3 % 3; //0
const b = 4 % 3; //1
const c = 11 % 8; //3
const d = 12 % 7; //5
const e = 8 % 6; //2

// Задание 29
function getEvenNumbers(start, end) {
  const evenElement = [];

  for (let i = start; i <= end; i++) {
	  if (i %2 === 0) {
  		evenElement.push(i);
	  }
  }
  return evenElement;
}

getEvenNumbers(2, 5) //возвращает [2, 4]
getEvenNumbers(3, 11) //возвращает [4, 6, 8, 10]
getEvenNumbers(7, 7) //озвращает []

// Задание 30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
// Eksempel
for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Нашли число 3, прерываем выполнение цикла");
    break;
  }
}

console.log("Лог после цикла");

// Задание 31
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return i;
    }
  }

  return number;
  // Change code above this line
}

findNumber(2, 6, 5) //возвращает 5
findNumber(8, 17, 3) //возвращает 9
findNumber(16, 35, 7) //возвращает 21

//Eksempel
function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
      console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
      return i;
    }
  }

  // Этот console.log не выполнится
  console.log("Лог после цикла в теле функции");
}

const result = fn();
console.log("Лог после выхода из функции");
console.lof(`Результат выполнения функции ${result}`);
// Задание 32 функция includes()
function includes(array, value) {
  // Change code below this line
  for (i = 0; i <= array.length; i += 1){
    if (array[i] === value) {
      return true;
    }
  }
  return false;

  // Change code above this line
}
includes([1, 2, 3, 4, 5], 3) //возвращает true
includes([1, 2, 3, 4, 5], 17) //возвращает false
includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") //возвращает true
