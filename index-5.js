// Задание 1  Object.create()

const parent = {
    name: 'Stacey',
    surname: 'Moore',
    age: 54,
    heritage: 'Irish'
  };
  // Пиши код ниже этой строки
  
  const child = Object.create(parent); //
  
  // Пиши код выше этой строки
  child.name = 'Jason';
  child.age = 27;

child.name //возвращает 'Jason'.
child.hasOwnProperty('age') // возвращает true.
child.age //возвращает 27.
child.hasOwnProperty('surname') //возвращает false.
child.surname // возвращает 'Moore'.
child.hasOwnProperty('heritage') //возвращает false.
child.heritage // возвращает 'Irish'.
parent.isPrototypeOf(child) // возвращает true.

// Eksempel:
const animal = {
    legs: 4
  };
  const dog = Object.create(animal);
  dog.name = 'Манго';
  
  console.log(dog); // { name: 'Манго', __proto__: animal }
  console.log(animal.isPrototypeOf(dog)); // true

console.log(dog.hasOwnProperty('name')); // true
console.log(dog.name); // 'Манго'

console.log(dog.hasOwnProperty('legs')); // false
console.log(dog.legs); // 4

// Задание 2 Цепочка прототипов
const ancestor = {
    name: 'Paul',
    age: 83,
    surname: 'Dawson',
    heritage: 'Irish'
  };
  // Пиши код ниже этой строки
  
  const parent = Object.create(ancestor); //
  parent.name = 'Stacey';
  parent.surname = 'Moore';
  parent.age = 54;
  
  const child = Object.create(parent); //
  child.name = 'Jason';
  child.age = 27;
  
  // Пиши код выше этой строки

// Задание 3 Функция-конструктор

function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}

new Car('Audi', 'Q3', 36000) // получится объект { brand: 'Audi', model: 'Q3', price: 36000 }.
new Car('BMW', 'X5', 58900) // получится объект { brand: 'BMW', model: 'X5', price: 58900 }.
new Car('Nissan', 'Murano', 31700) // получится объект { brand: 'Nissan', model: 'Murano', price: 31700 }.

// Eksempel
function User() {
    // Тело функции
  }
  
const mango = new User();
console.log(mango); // {}
  
const poly = new User();
console.log(poly); // {}

function User(name, email, age) {
this.name = name;
this.email = email;
}
  
const mango = new User('Манго', 'mango@mail.com');
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

const poly = new User('Поли', 'poly@mail.com');
console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }  

// Задание 4 Объект настроек

function Car({brand, model, price}) { // <- {}
    this.brand = brand;
    this.model = model;
    this.price = price;
}
  
new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) // получится объект { brand: 'Audi', model: 'Q3', price: 36000 }

// Eksempel

function User({ name, email }) {
    this.name = name;
    this.email = email;
}
  
  const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
  const poly = new User({ name: 'Поли', email: 'poly@mail.com' });

// Задание 5 prototype

function Car({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}
  
Car.prototype.getPrice = function () {
    return this.price;
};
  
Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};
Car.prototype.hasOwnProperty('getPrice') // возвращает true. 
Car.prototype.hasOwnProperty('changePrice') // возвращает true. 

new Car({ brand: 'Audi', model: 'Q3', price: 36000 }), 
changePrice(35000) 
getPrice() // вернет число 35000.


// Eksempel

function User({ name, email }) {
    this.name = name;
    this.email = email;
}
  
User.prototype.getEmail = function () {
    return this.email;
};
  
User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
  };
  
  const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
  
console.log(mango.getEmail()); // mango@mail.com
mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); // mango@supermail.com

  

// Задание 6 Хранилище

function Storage (items){
    this.items = items; 
   };
   Storage.prototype.getItems = function() {
   return this.items;
   };
   
   Storage.prototype.addItem = function(newItem) {
      return this.items.push(newItem);
   };
   
   Storage.prototype.removeItem= function(item) {
        return this.items.splice(this.items.indexOf(item),1);
   };
// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// Задание 7 Конструктор строк
function StringBuilder(baseValue){
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function(){
    return  this.value;
}  
  
StringBuilder.prototype.padEnd = function (str) {
  this.value += str;
} 
StringBuilder.prototype.padStart = function(str){
   this.value = str += this.value; 
}
StringBuilder.prototype.padBoth = function(str){
this.value = str +=  this.value += str;

}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// Задание 8 Объявление класса

class Car {
  // Тело класса
}
const lexus = new Car();

// Задание 9 Конструктор класса

class Car {
  brand;
  model; 
  price;
  
  constructor({brand, model, price}){
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

// Задание 10 Методы класса


// В функции-конструкторе объявление методов 
// для работы со свойствами экземпляра делается явно,
//  путём обращения к свойству prototype и добавления на него методов.
// В классах используется более удобный синтаксис методов класса, 
// который за ширмой делает тоже самое - добавляет методы
//  на свойство User.prototype. Поэтому в самом начале 
// мы говорили что классы это просто синтаксический сахар -
//  удобная надстройка над функциями-конструкторами.

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
getPrice() {
return this.price;
}
  
changePrice(newPrice) {
 this.price = newPrice;
}  
}

//Eksepel
class User {
  constructor({ name, breed }) {
    this.name = name;
    this.breed = breed;
  }

  // Аналог User.prototype.getEmail
  getEmail() {
    return this.email;
  }

  // Аналог User.prototype.changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

// Задание 11 Приватные свойства

// Инкапсуляция - это концепция позволяющая скрыть внутренние детали кла
// Пользователь класса должен получать доступ только к публичному интерфейсу
//  - набору публичных свойств и методов класса.

// В классах инкапсуляция реализуется приватными свойствами, доступ к
//  которым можно получить только внутри класса.
//  Это одно из отличий классов и функций-конструкторов - в классах легко объявить приватные свойства.

// Допустим почта пользователя должна быть недоступна из вне,
//  то есть приватна. Добавляя к имени свойства символ # мы делаем его приватным. 
//  Объявление приватного свойства до инциализации в конструкторе - обязательно.


class Car {
  #brand
  
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand(){  
  return this.#brand;
  }
  changeBrand(newBrand){
  this.#brand = newBrand;
  }
}

// Eksepel
class User {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // Будет ошибка, это приватное свойство


// Задание 12 Хранилище 2.0
class Storage {
  #items

  constructor(items){
  this.#items = items;
  }
  
getItems() {
  return this.#items;    
}

addItem(newItem) {
   this.#items.push(newItem);
}

removeItem(item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
}
};

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// Задание 13 Конструктор строк 2.0

class StringBuilder{
  #value;
  constructor(baseValue) {
      this.#value = baseValue;
  }
  getValue() {
      return this.#value;
  }
  padEnd(str) {
      this.#value += str;
  }
  padStart(str) {
      this.#value = str + this.#value;
  }
  padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
  }
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// Задание 14 Геттеры и сеттеры

class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }
  get brand() {
    return this.#brand;
  }
  set brand(newBrand) {
    this.#brand = newBrand;
  }
  get model() {
    return this.#model;
  }
  set model(newModel) {
    this.#model = newModel;
  }
  get price() {
    return this.#price;
  }
  set price(newPrice) {
    this.#price = newPrice;
  }
}

// Задание 15 Статические свойства

// Кроме публичных и приватных свойств будущего экземпляра, в
//  классе можно объявить его собственные свойства, доступные
//   только классу, но не его экземплярам - статические свойства (static).
//    Они полезны для хранения информации относящейся к самому классу.

// Добавим классу пользователя приватное свойство type - его тип,
//  определяющий набор прав, например администратор, редактор, 
//  просто пользователь и т п. Возможные типы пользователей будем
//   хранить как статическое свойство TYPES - объект со свойствами.

// Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.

//Статические свойства
class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE){      
    this.#price = newPrice;
    }return this.#price;
    
  }
  // Пиши код выше этой строки
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// Eksempel
class User {
  // Объявление и инициализация статического свойства
  static TYPES = {
    ADMIN: 'admin',
    EDITOR: 'editor',
  };
  #email;
  #type;

  constructor({ email, type }) {
    this.#email = email;
    this.#type = type;
  }

  get type() {
    return this.#type;
  }

  set type(newType) {
    if (User.TYPES[newType] === undefined) {
      console.log('Ошибка! Такого типа пользователя не существет');
      return;
    }

    this.#type = newType;
  }
}

const mango = new User({
  email: 'mango@mail.com',
  type: User.TYPES.ADMIN,
});

console.log(mango.TYPES); // undefined
console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

console.log(mango.type); // admin
mango.type = User.TYPES.EDITOR;
console.log(mango.type); // editor

// Задание 16 Статические методы

// В классе можно объявить не только методы будущего экземпляра, 
// но и методы доступные только классу - статические методы, которые 
// могут быть как публичные, так и приватные. Синтаксис объявления аналогичен 
// статическим свойствам, за исключением того, что значением будет метод.

// Особенность статических методов в том, что во время их вызова ключевое 
// слово this ссылается на сам класс. Это значит, что статический метод
// может получить доступ к статическим свойствам класса, но не к свойствам экземпляра.
// Логично, потому что статические методы вызывает сам класс, а не его экземпляры.


// Статические методы
class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
static checkPrice(price) {
    if (price > Car.#MAX_PRICE){
    return 'Внимание! Цена превышает допустимую.';
    }return'Всё хорошо, цена в порядке.';
}
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// Eksempel:
class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: 'mango@mail.com' });

console.log(
  User.isEmailTaken('poly@mail.com')
); // false

console.log(
  User.isEmailTaken('mango@mail.com')
); // true



// Задание 17

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки
class Admin extends User{

  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
}
// Eksempel

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentWriter extends User {
  // Тело класса ContentWriter
}

const writer = new ContentWriter('mango@mail.com');
console.log(writer); // { email: 'mango@mail.com' }
console.log(writer.email); // 'mango@mail.com'

// Задание 18 // Конструктор дочернего класса

// Первым делом в конструкторе дочернего класса необходимо вызвать специальную
// функцию super(аргументы) - это псевдоним конструктора родительского класса.
// В противном случае, при попытке обратиться к this в конструкторе дочернего клаcса,
// будет ошибка. При вызове конструктора класса родителя передаём необходимые
// ему аргументы для инициализации свойств.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel; //публичное свойство
  
  constructor ({email, accessLevel}){
  super (email);
  this.email = email;
  this.accessLevel = accessLevel;
  }
  
  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser

// Eksempel:
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentWriter extends User {
  posts;

  constructor({ email, posts }) {
    // Вызов конструктора родительского класса User
    super(email);
    this.posts = posts;
  }
}

const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
console.log(writer); // { email: 'mango@mail.com', posts: [] }
console.log(writer.email); // 'mango@mail.com'

// Задание 19 Методы дочернего класса

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  blacklistedEmails = []; 
  
  blacklist(email) {
  this.blacklistedEmails.push(email);
  }
  
  isBlacklisted(email){
    for (let el of this.blacklistedEmails){
    if (this.blacklistedEmails.includes(email)){
    return true;
   }
  }return false;
 }
  
  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

// Пиши код выше этой строки
}

const mango = new Admin({
email: 'mango@mail.com',
accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 

// Eksempel:
// Представим что выше есть объявление класса User

class ContentWriter extends User {
  posts;

  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
console.log(writer); // { email: 'mango@mail.com', posts: [] }
console.log(writer.email); // 'mango@mail.com'
writer.addPost('post-1');
console.log(writer.posts); // ['post-1']




