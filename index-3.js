"use strict"

// ===========№1 Создание объекта===========
const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr : "Spacious apartment in the city center",
     rating: 4,
      price: 2153,
      tags: ["premium", "promoted", "top"]
    };
    
// ============#2 №2Вложенные свойства===========
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  owner: {
name: "Henry" ,
phone: "982-126-1588",
 email:  "henry.carter@aptmail.com", 
  },
  };

//   =============#3 Доступ к свойствам через точку==========
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Change code below this line
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Change code above this line

//   ================#4 Доступ к вложенным свойствам==========
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: 'Henry',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com',
    },
  };
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[2];
  // Change code above this line

//   ===============#5 Доступ к свойствам через квадратные скобки=========
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  

  const aptRating = apartment['rating'];
  const aptDescr = apartment['descr'];
  const aptPrice = apartment["price"];
  const aptTags = apartment["tags"];
 

// ==========================#6 Изменение значения свойства====================
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: 'Henry',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com'
    }
  };
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.owner.name = "Henry Sibola";
  apartment.tags.push('trusted');
  
  
// ========================#7 Добавление свойств===========
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city centre',
    rating: 4.7,
    price: 5000,
    tags: ['premium', 'promoted', 'top', 'trusted'],
    owner: {
      name: 'Henry Sibola',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com'
    }
  };
  apartment.area = 60;
  apartment.rooms = 3;
  apartment.location = {};
  apartment.location.country = "Jamaica"; 
  apartment.location.city = "Kingston";
  
// ==================№8 Короткие свойства=================
const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
name,
price,
image,
  tags,
};
// ===================#9 Вычисляемые свойства================
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

// ===============10 Цикл for...in===================
const apartment = {
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  const keys1 = Object.keys(apartment);
  // Change code below this line
  for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
  }

//   ================#11 Метод hasOwnProperty()============
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city centre';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
}
}

// =========================12 Задача. Подсчёт свойств===========

  // countProps(object) считает кол-во собственных свойств
  // propCount хранит кол-во свойств объекта
  
  // есть ли это совйство в объекте
  // если есть то посчитай
  // передай в пропакаунт
  function countProps(object) {
    let propCount = 0;
    // Change code below this line
    keys = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
     array = [...keys];
      propCount = array.length;
    }
  }
    return propCount;
  }

  // =====================13 Метод Object.keys()=====================
  const apartment = {
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
  };
  const values = [];
  
  const keys = Object.keys(apartment);
  
  for (const key of keys) {
   values.push(apartment[key]);
  }
  
  // ======================14 Задача. Подсчёт свойств 2.0===========
  function countProps(object) {
    let propCount = 0;
  const keys = Object.keys(object);  
    
    for (const key of keys) { {
        propCount += 1;
      }
    }
      return propCount;
  }
  
// =================15 Метод Object.values() ==============
const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

// =================16 Задача. Расходы на зарплату===============
function countTotalSalary(salaries) {
  let totalSalary = 0;
  
const values = Object.values(salaries);
    
  for (const value of values) {
   totalSalary += value;
    
  }
  return totalSalary;
}  


// ============== 17 Массив объектов =================
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
// ====================18 Задача. Поиск объекта по значению свойства==========
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  let priceOfProduct = null;
  
  for (const product of products) {
    if (product.name === productName ){
        priceOfProduct = product.price;   
    }
  }
  return priceOfProduct;
}

// =============19 Задача. Коллекция значений свойства================
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
const arrayValues =[];
  
  for (const product of products) {
    if (propName === 'name'){
      arrayValues.push(product.name);
    }
    if (propName === 'price'){
      arrayValues.push(product.price);
    }
    if (propName === 'quantity'){
      arrayValues.push(product.quantity);
    }
  }
  return arrayValues;
}

// ==================20 Задача. Общая стоимость товара ===============
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
let result = 0;
  
  for (const product of products) {
  if (productName === product.name){
   result += product.price * product.quantity;  
  }  
  }
   return result;

}


// ======================21 Деструктуризация объектов=================
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday, today, tomorrow} = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;

// ===================== 22 Значения по умолчанию =========================
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday,today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

// ===================23 Изменение имени переменной==================
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, 
 icon: highIcon  = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;
// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ====================== 24 Деструктуризация в циклах==================
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

// ======================= 25 Глубокая деструктуризация===============
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
  tomorrow: {low: lowTomorrow, high: highTomorrow,
 icon: tomorrowIcon ="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},} = forecast;


//  ====================== 26 Паттерн «Объект настроек»=====================
// Change code below this line
function calculateMeanTemperature(forecast) {   
  const {today: {low:todayLow, high: todayHigh},
      tomorrow: {low: tomorrowLow, high: tomorrowHigh},} = forecast;
    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }

// ================== 27 Операция spread при передаче аргументов==================
  const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);


// =======================28 Операция spread при создании нового массива============
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// ==================== 29 Операция spread при создании нового объекта==============
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};

// ====================30 Задача. Карточки задач ===============================
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  
  // Change code below this line
   resultObject = {completed, category, priority, ...data};

  return resultObject;  
}

// ====================== 31 Операция rest для сбора всех аргументов функции===========
// Change code below this line
function add(...args) {
  
  let result = 0;  
    
  for (const element of args){
    result += element;
  }
  return result;
  }

  // ========================= 32 Операция rest для сбора части аргументов функции===========  
function addOverNum(value, ...args) {
  let total = 0;

  for (const arg of args) {
    if (value < arg) {
    total += arg;
   }
  }
  return total;
}

// ========================33 Задача. Массив совпадений =========================
// Change code below this line
function findMatches(array, ...args) {
  const matches = []; // Don't change this line
  
  for (const element of args) {
    if (array.includes(element)) {
      matches.push(element);
    }
  }
  return matches;
}

// =====================34 Методы объекта==================
const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
   return `Deleting book ${bookName}`;
     
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};

// =================== 35 Доступ к свойствам объекта в его методах============
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    
	const bookIndex = this.books.indexOf(oldName);
  const change = this.books.splice(bookIndex, 1, newName);
	
  },
};

// ==================== 36 Задача. Лавка зелий «У старой жабы» ==========
const atTheOldToad = {
  // Change code below this line
  potions: [],
  // Change code above this line
};

// ======================= 37 Задача. Получаем все зелья =============
const atTheOldToad = {
  // Change code below this line
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
  // Change code above this line
};

// ====================== 38 Задача. Добавляем новое зелье==============
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
   this.potions.push(potionName);
    return this.potions;
  },
};

// ====================== 39 Задача. Удаляем зелье =============
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    const index = this.potions.indexOf(potionName);
    this.potions.splice(index, 1);   
  },
};

// ====================== 40 Задача. Обновляем зелье ===============
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
   
  const potionsIndex = this.potions.indexOf(oldName);
  const change = this.potions.splice(potionsIndex, 1, newName);
  },
};

// ================= 41 Задача. Расширяем инвентарь==================

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === potionName) {
        return this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === oldName) {
        return (this.potions[i].name = newName);
      }
    }
  },
  // Change code above this line
};