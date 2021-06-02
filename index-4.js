// Задание 1 Функция как значение

function makePizza() {
    return 'Ваша пицца готовится, ожидайте.';
  }
  // Пиши код ниже этой строки
  
  const result = makePizza();
  const pointer = makePizza;
  
  makePizza()

// Eksempel:
function greet(name) {
    return `Добро пожаловать ${name}.`;
  }
  
  /* Вызываем функцию greet 
     и выводим результат в консоль */
  console.log(greet('Манго'));
  // Добро пожаловать Манго.
  
  /* Выводим функцию greet 
     в консоль не вызывая её */
  console.log(greet);
  /* 
  ƒ greet() { 
       return `Добро пожаловать ${name}.`; 
  } 
  */

// Задание 2 Колбэк-функции

function deliverPizza(pizzaName) {
    return `Доставляем пиццу ${pizzaName}.`;
  }
  
  function makePizza(pizzaName) {
    return `Пицца ${pizzaName} готовится, ожидайте...`;
  }
  
  // Пиши код ниже этой строки
  function makeMessage(pizzaName, callback) {
     
    if (callback === deliverPizza){
      return deliverPizza(pizzaName);
    }
    return makePizza(pizzaName);
  }

makeMessage('Роял гранд', makePizza) //возвращает строку 'Пицца Роял гранд готовится, ожидайте...'.
makeMessage('Ультрасыр', deliverPizza) //возвращает строку 'Доставляем пиццу Ультрасыр.'.
// Eksempel

// Колбэк-функция
function greet(name) {
    consle.log(`Добро пожаловать ${name}.`);
  }
  
  // Функция высшего порядка
  function registerGuest(name, callback) {
    console.log(`Регистрируем гостя ${name}.`);
    callback(name);
  }
  
  registerGuest('Манго', greet);

// Задание 3 Инлайн-колбэки

function makePizza(pizzaName, callback) {
    console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
    callback(pizzaName);
  }
  
  makePizza('Роял гранд', function deliverPizza(pizzaName) {
    console.log(`Доставляем пиццу ${pizzaName}.`);
  });
  // Пиши код ниже этой строки
  
  makePizza('Ультрасыр', function eatPizza(pizzaName){
    console.log(`Едим пиццу ${pizzaName}.`);
  });
  

// Eksempel
function registerGuest(name, callback) {
    console.log(`Регистрируем гостя ${name}.`);
    callback(name);
  }
  
  // Передаём инлайн функцию greet как колбэк
  registerGuest('Манго', function greet(name) {
    consle.log(`Добро пожаловать ${name}.`);
  });
  
  // Передаём инлайн функцию notify как колбэк
  registerGuest('Поли', function notify(name) {
    consle.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
  });

// Задание 4 Несколько колбэков

const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, onSuccess, onError) {
      
      for (let el of this.pizzas){
          if (el === pizzaName){ 
           
             return onSuccess(pizzaName); 
          }
      }
           return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);                 
        
      },
  };
  // Пиши код выше этой строки
  
  // Колбэк для onSuccess
  function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
  }
  
  // Колбэк для onError
  function onOrderError(error) {
    return `Ошибка! ${error}`;
  }
  
  // Вызовы метода с колбэками
  pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
  pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
  pizzaPalace.order('Биг майк', makePizza, onOrderError);
  pizzaPalace.order('Венская', makePizza, onOrderError);




pizzaPalace.order('Аль Копчино', makePizza, onOrderError) 
// возвращает 'Ваш заказ принят. Готовим пиццу Аль Копчино.'.
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError) 
// возвращает 'Ваш заказ принят. Готовим пиццу Четыре нарезона.'.
pizzaPalace.order('Биг майк', makePizza, onOrderError) 
//возвращает 'Ошибка! В ассортименте нет пиццы с названием Биг майк.'.
pizzaPalace.order('Венская', makePizza, onOrderError) 
// возвращает 'Ошибка! В ассортименте нет пиццы с названием Венская.'.

// Eksempel
function processCall(recipient) {
    // Имитируем доступность абонента случайным числом
    const isRecipientAvailable = Math.random() > 0.5;
  
    if (!isRecipientAvailable) {
      console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
      // Логика активации автоответчика
    } else {
      console.log(`Соединяем с ${recipient}, ожидайте...`);
      // Логика принятия звонка
    }
  }
  
  processCall('Манго');


// Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.

  function processCall(recipient, onAvailable, onNotAvailable) {
    // Имитируем доступеность абонента случайным числом
    const isRecipientAvailable = Math.random() > 0.5;
  
    if (!isRecipientAvailable) {
      onNotAvailable(recipient);
      return;
    }
  
    onAvailable(recipient);
  }
  
  function takeCall(name) {
    console.log(`Соединяем с ${name}, ожидайте...`);
    // Логика принятия звонка
  }
  
  function activateAnsweringMachine(name) {
    console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
    // Логика активации автоответчика
  }
  
  function leaveHoloMessage(name) {
    console.log(`Абонент ${name} недоступен, записываем голограмму.`);
    // Логика записи голограммы
  }
  
  processCall('Манго', takeCall, activateAnsweringMachine);
  processCall('Поли', takeCall, leaveHoloMessage);

// Задание 5 Контекст вызова функции

const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    // Пиши код ниже этой строки
    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);
  
      if (!isPizzaAvailable) {
        return `В ассортименте нет пиццы с названием «${pizzaName}».`;
      }
  
      return `Заказ принят, готовим пиццу «${pizzaName}».`;
    },
    // Пиши код выше этой строки
  };

pizzaPalace.order('Аль Копчино') //возвращает строку 'Заказ принят, готовим пиццу «Аль Копчино».'.
pizzaPalace.order('Четыре нарезона') //возвращает строку 'Заказ принят, готовим пиццу «Четыре нарезона».'.
pizzaPalace.order('Биг майк') //возвращает строку 'В ассортименте нет пиццы с названием «Биг майк».'.
pizzaPalace.order('Венская') //возвращает строку 'В ассортименте нет пиццы с названием «Венская».'.

// Eksempel
const bookShelf = {
    authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
    getAuthors() {
      return this.authors;
    },
    addAuthor(authorName) {
      this.authors.push(authorName);
    },
  };
  
  console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли']
  bookShelf.addAuthor('Ли Танит');
  console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли', 'Ли Танит']

// Задание 6 Аккаунт пользователя

const customer = {
    username: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['Burger', 'Pizza', 'Salad'],
    // Пиши код ниже этой строки
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Пиши код выше этой строки
  };


customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

customer.setDiscount(0.15) //обновляет значение свойства discount.
customer.getBalance() //возвращает текущее значение свойства balance.
customer.getOrders() //возвращает текущее значение свойства orders.
customer.addOrder(5000, 'Steak') //добавляет 'Steak' в массив значений свойства orders и обновляет баланс.

// Задание 7 Метод call

const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
  ];
  
  // Пиши код ниже этой строки
  function composeMessage(position) { 
     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
    }
  
  const messages = [];
  
   for (let i = 0; i < orders.length; i += 1){
   messages.push(composeMessage.call(orders[i], i + 1));
   } 



// EKsempel
// foo.call(obj, arg1, arg2, ...)

function greetGuest(greeting) {
    console.log(`${greeting}, ${this.username}.`);
  }
  
  const mango = { username: "Манго" };
  const poly = { username: "Поли" };
  
  greetGuest.call(mango, "Добро пожаловать");
  // Добро пожаловать, Манго.
  
  greetGuest.call(poly, "С приездом");
  // С приездом, Поли.

// Задание 8 Метод apply

const orders = [
    { email: "solomon@topmail.ua", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "jacob@mail.com", dish: "Taco" },
  ];
  
  // Пиши код ниже этой строки
  function composeMessage(position) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
  }
  
  const messages = [];
  for (let i = 0; i < orders.length; i++) {
    const msg = composeMessage.apply(orders[i], [i + 1]);
    messages.push(msg);
  }



// Eksempel
// foo.call(obj, arg1, arg2, ...)

// foo.apply(obj, [arg1, arg2, ...])

function greetGuest(greeting) {
    console.log(`${greeting}, ${this.username}.`);
  }
  
  const mango = { username: "Манго" };
  const poly = { username: "Поли" };
  
  greetGuest.apply(mango, ["Добро пожаловать"]); // Добро пожаловать, Манго.
  greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.

// Задание 9 Метод bind

const pizzaPalace = {
    company: 'Pizza Palace',
  };
  
  const burgerShack = {
    company: 'Burger Shack',
  };
  
  function composeMessage(customerName) {
    return `${customerName}, всегда рады вас видеть в «${this.company}».`;
  }
  // Пиши код ниже этой строки
  
  const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
  const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
  
  const burgerShackComposer = composeMessage.bind(burgerShack);
  const burgerShackMessage = burgerShackComposer('Поли');



// Eksempel

// foo.bind(obj, arg1, arg2, ...)

function greet(clientName) {
    return `${clientName}, добро пожаловать в «${this.service}».`;
  }
  
  const steam = { service: 'Steam' };
  const steamGreeter = greet.bind(steam);
  steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."
  
  const gmail = { service: 'Gmail' };
  const gmailGreeter = greet.bind(gmail);
  gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."


// Задание 10 Метод bind и методы объекта

const service = {
    mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
    subscribe(email) {
      this.mailingList.push(email);
      return `Почта ${email} добавлена в рассылку.`;
    },
    unsubscribe(email) {
      this.mailingList = this.mailingList.filter((e) => e !== email);
      return `Почта ${email} удалена из рассылки.`;
    },
  };
  
  function logAndInvokeAction(email, action) {
    console.log(`Выполняем действие с ${email}.`);
    return action(email);
  }
  
  const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
  console.log(firstInvoke);
  // Почта kiwi@mail.uk добавлена в рассылку.
  
  console.log(service.mailingList);
  /* ['mango@mail.com', 
      'poly@hotmail.de', 
      'ajax@jmail.net', 
      'kiwi@mail.uk']*/
  const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
  console.log(secondInvoke);
  // Почта poly@hotmail.de удалена из рассылки.
  
  console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
  

// Eksempel
const customer = {
    firstName: 'Jacob',
    lastName: 'Mercer',
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
  function makeMessage(callback) {
    // callback() это вызов метода getFullName без объекта
    console.log(`Обрабатываем заявку от ${callback()}.`);
  }
  
  makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// ❌ Было
makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// ✅ Стало
makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.


