// Modul 1

// Задание 1
//Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:
// название - строка "Droid"
// цена за штуку - число 2000

const productName =  "Droid";

const pricePerItem = 2000;

// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

// Задание 2
// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line

productName  = "Repair droid";
pricePerItem  = 3500;

// Задание 3
// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// Change code below this line
const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
let isOnline = true;
let isAdmin  = false;


// Задание 5 ` `
// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// Задание 6
// Change code below this line

let pricePerDroid = 800;
let orderedQuantity = 6;
let  deliveryFee = 50;
let totalPrice = (pricePerDroid*orderedQuantity) + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// Задание 7
// Change code below this line
function sayHi () {
    console.log ("Hello, this is my first function!");
  }
  
  sayHi()

// Задание 8
// Change code below this line
function add(a,b,c) {
    console.log(`Addition result equals ${a+b+c}`);
    // Change code above this line
  }
  
  add(15, 27, 10);
  add(10, 20, 30);
  add(5, 10, 15);

  // Задание 9
function add(a, b, c) {
// Change code below this line
    
return a+b+c;
  
// Change code above this line
  }
  
add(2, 5, 8); // 15
  
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// Задание 10
function makeMessage (name, price) {
// Change code below this line
    const message = `You picked ${name}, price per item is ${price} credits`;
// Change code above this line
return message;
};

// Задание 11
function calculateTotalPrice (orderedQuantity, pricePerItem) {
// Change code below this line
const totalPrice = orderedQuantity * pricePerItem;
  
// Change code above this line
return totalPrice;
};

// Задание 12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
        const message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
  
    // Change code above this line
    return message;
  }

// Задание 13
function isAdult(age) {
    // Change code below this line
    const passed = age>=18;
  
    // Change code above this line
    return passed;
  }

// Задание 14
function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Change code below this line
    const isMatch = password ===SAVED_PASSWORD;
  
    // Change code above this line
    return isMatch;
  }

// Задание 15
function checkAge(age) {
    let message;
  
    if (age >= 18) { // Change this line
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
  }

// Задание 16
function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    
    if (available < ordered) {
      message = `Not enough goods in stock!`;
    } else {
      message = `Order is processed, our manager will contact you.`;
    }
  
    // Change code above this line
    return message;
  }

// Задание 17
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

// Задание 18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
    const totalPrice = pricePerDroid * orderedQuantity;
    
        if (totalPrice > customerCredits) {
        message = `Insufficient funds!`;
      } else {
        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
      }
  
    // Change code above this line
    return message;
  }
// Задание 19
  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) { // Change this line
      message =  'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) { // Change this line
      message = 'Welcome!';
    } else {
      message = 'Access denied, wrong password!';
    }
  
    return message;
  }

// Задание 20

function checkStorage(available, ordered) {
    let message;
    if (ordered === 0) {
        message = 'There are no products in the order!';
    }
    else if (available < ordered) {
        message = 'Your order is too large, there are not enough items in stock!';
    } else {
        message = 'The order is accepted, our manager will contact you';
    }
        
    // Change code above this line
    return message;
} 

// Задание 21
function isNumberInRange(start, end, number) {
    const isInRange = (number >= start && number <= end); // Change this line
  
    return isInRange;
  }

// Задание 22
function checkIfCanAccessContent(subType) {
    const canAccessContent = (subType === "pro" || subType === "vip"); // Change this line
  
    return canAccessContent;
  }
// Задание 23
function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Change this line
  
    return isNotInRange;
  }

// Задание 24
function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Change code below this line
    
    if (totalSpent >= 50000){
      discount = GOLD_DISCOUNT;
      
    } else if (totalSpent >= 20000 && totalSpent < 50000){
      discount = SILVER_DISCOUNT;
      
    } else if (totalSpent >= 20000 && totalSpent < 5000){
      discount = BRONZE_DISCOUNT;
      
    } else {
      discount = BASE_DISCOUNT;
    }
      
    // Change code above this line
    return discount;
  }

// Задание 25
function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    
    message = ordered > available ? 'Not enough goods in stock!': 'The order is accepted, our manager will contact you';
  
  
    // Change code above this line
    return message;
  }

// Задание 26
function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
    
    message = password === ADMIN_PASSWORD ? "Access is allowed"  : "Access denied, wrong password!";
  
    // Change code above this line
    return message;
  }

// Задание 27
function getSubscriptionPrice(type) {
    let price;
    // Change code below this line
  
   switch (type) { // Change this line
     case "starter":// Change this line
        price = 0; // Change this line
        break;
  
      case "professional": // Change this line
        price = 20; // Change this line
        break;
  
      case "organization": // Change this line
        price = 50; // Change this line
        break;
    }
  
    // Change code above this line
    return price;
  }

// Задание 28
function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
    switch (password) {
  
      case null:
        password === null;
        message = "Canceled by user!";
        break;
            
      case ADMIN_PASSWORD:
        password === ADMIN_PASSWORD;
        message = "Welcome!"
        break;
        
      default:
         message = "Access denied, wrong password!";
    }
  
    // Change code above this line
    return message;
  }

// Задание 29
function getShippingCost(country) {
    let message;
    // Change code below this line
    
    switch (country) {
        
      case `China`:
        price=100;
        message = "Shipping to China will cost 100 credits";
        break;
        
      case `Chile`:
        price=250;
        message = "Shipping to Chile will cost 250 credits";
        break;
        
      case `Australia`:
        price=170;
         message = "Shipping to Australia will cost 170 credits";
        break;
        
      case `Jamaica`:
        price=120;
        message = "Shipping to Jamaica will cost 120 credits";
        break;
        
      default:
        message = "Sorry, there is no delivery to your country";
        
    }     
  
    // Change code above this line
    return message;
  }

// Задание 30
function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; // Change this line
  
    return message;
  }
// Задание 31
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic [0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

// Задание 32

function getSubstring(string, length) {
    const substring = string.slice(0, length);
  
    return substring;
  }

// Задание 33
function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
    result = message.length > maxLength ? message.slice(0, maxLength) + "..." : message;
  
    /// Change code above this line
    return result;
  }
    

// Задание 34
function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(); // Change this line
  
    return normalizedInput;
  }

// Задание 35
function checkForName(fullName, name) {
    const result = fullName.includes(name); // Change this line
     return result;
   }
// Задание 36

function checkForSpam(message) {
    let result;
    // Change code below this line
    
    message =  message.toLowerCase();
    result = message.includes("spam") || message.includes("sale");
  
    // Change code above this line
    return result;
  }