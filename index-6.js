// Modul 6 //

// Задание 1 forEach(callback)

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// Метод forEach(callback)=================
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
   orderedItems.forEach(item => {totalPrice += item;});                
   
    return totalPrice;
  }

//   или
orderedItems.forEach(function (orderedItem) {totalPrice += orderedItem; });

// Задание 2
// Задача. Фильтрация массива чисел
function filterArray(numbers, value) {
    const filteredNumbers = [];
     
  numbers.forEach(num => {
    if (num > value)
  filteredNumbers.push(num);
  }); 
  
    return filteredNumbers;
  }

//======================= 
  //тернарник
  function filterArray(numbers, value) {
    const filteredNumbers = [];
  
  numbers.forEach(num => {
   num > value ? 
  filteredNumbers.push(num) : filteredNumbers;
  });
  
    return filteredNumbers;
  }

// Задание 3 Общие элементы

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
      
firstArray.forEach(function(elementF) {
    secondArray.forEach(function (elementSec)  {
        if(elementF === elementSec){
            commonElements.push(elementSec); 
       }
          
    })
 });
return commonElements;
}
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

 
// 2-й варіант

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//   firstArray.forEach(element =>
//    {if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     })
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }

// Задание 4 Стрелочные функции

// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
    // Пиши код выше этой строки
    return quantity * pricePerItem;
  }


  // Задание 5 Неявный возврат

// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => 
quantity * pricePerItem;
// Пиши код выше этой строки


// Задание 6 Стрелочные функции как коллбеки

// Пиши код ниже этой строки
const calculateTotalPrice = orderedItems=> {
    let totalPrice = 0;
  
    orderedItems.forEach(item => totalPrice += item); 
  
   return totalPrice;
  }
  // Пиши код выше этой строки

// Задание 7 Фильтрация массива чисел 2.0

// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach(number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
  }

// Задание 8 Общие элементы 2.0

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) =>{
    const commonElements = [];
  
    firstArray.forEach(element=> {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
  }

// Задание 9 Чистые функции

function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const arrayOfEven = [];
  
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {         
        arrayOfEven.push(numbers[i] + value)
      } if (numbers[i] % 2 !== 0) {         
        arrayOfEven.push(numbers[i]);
      
      };
    }
    
    return arrayOfEven;
  
}
 
// Тесты
// Объявлена функция changeEven(numbers, value).
// Функция changeEven не изменяет значение параметра numbers.
// Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5].
// Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16].
// Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142].
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// Задание 10 Метод map()

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planet => (planet.length));


// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => { return planet.length;});

// Тесты
// Объявлена переменная planets.
// Значение переменной planets это массив ['Земля', 'Марс', 'Венера', 'Юпитер'].
// Объявлена переменная planetsLengths.
// Значение переменной planetsLengths это массив [5, 4, 6, 6].
// Для перебора массива планет использован метод map().

// Задание 11 Метод map() и массив объектов
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
  const titles = books.map(book => book.title);


//   Тесты
// Объявлена переменная books.
// Значение переменной books это массив.
// Объявлена переменная titles.
// Значение переменной titles это массив ['Последнее королевство', 'На берегу спокойных вод', 'Сон смешного человека', 'Красна как кровь', 'Враг Божий'].
// Для перебора массива books используется метод map() как чистая функция.

// Задание 12 Метод flatMap()
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
  const genres = books.flatMap((book) => book.genres);

//   Тесты
// Объявлена переменная books.
// Значение переменной books это массив объектов.
// Объявлена переменная genres.
// Значение переменной genres это массив [ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ].
// Для перебора массива books используется метод flatMap().

// Задание 13 Имена пользователей

// Пиши код ниже этой строки
const getUserNames = users => {return users.map(user => user.name);

};


const getUserNames = users => users.map(user => user.name);


// Задание 14 Почты пользователей

// Пиши код ниже этой строки
const getUserEmails = users => {return users.map(user => user.email) 
};
// Пиши код выше этой строки


// Задание 15 Методы filter и find

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(value => value % 2 === 0);
const oddNumbers = numbers.filter(value => value % 2 !== 0);

// Тесты
// Объявлена переменная numbers.
// Значение переменной numbers это массив [17, 24, 82, 61, 36, 18, 47, 52, 73].
// Объявлена переменная evenNumbers.
// Значение переменной evenNumbers это массив [24, 82, 36, 18, 52].
// Объявлена переменная oddNumbers.
// Значение переменной oddNumbers это массив [17, 61, 47, 73].
// Для перебора массива numbers использован метод filter().

// Задание 16 Фильтрация уникальных элементов
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter(
    (genre, index, array) => array.indexOf(genre) === index);

// Задание 17 Метод filter() и массив объектов
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  
  const MIN_RATING = 8;
  const AUTHOR = 'Бернард Корнуэлл';
  // Пиши код ниже этой строки
  
  const topRatedBooks = books.filter(
      ({rating}) => rating >= MIN_RATING);
    const booksByAuthor = books.filter(({author}) => 
    author === AUTHOR);

// Задание 18 Пользователи с цветом глаз
const getUsersWithEyeColor = (users, color) =>
 users.filter(user => color === user.eyeColor);
// Задание 19 Пользователи в возрастной категории

const getUsersWithAge = (users, minAge, maxAge) => 
users.filter(user => user.age >= minAge && user.age <= maxAge);


// Задание 20 Пользователи с другом
const getUsersWithFriend = (users, friendName) => 
  users.filter(user => user.friends.includes(friendName));

// Задание 21 Список друзей

const getFriends = (users) => users.flatMap((user) => 
user.friends).filter((friend, index, array) =>
array.indexOf(friend) === index);

// Задание 22 Активные пользователи

const getActiveUsers = (users) => users.filter(user => user.isActive);

// Задание 23 Неактивные пользователи

const getInactiveUsers = (users) => users.filter(user=> !user.isActive);

// Задание 24 // Метод find()

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  ];
  const BOOK_TITLE = 'Сон смешного человека';
  const AUTHOR = 'Роберт Шекли';
  // Пиши код ниже этой строки
  
  const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
  const bookByAuthor = books.find(book => book.author === AUTHOR);
  

// Задание 25 Пользователь с почтой

const getUserWithEmail = (users, email) =>
users.find(user => user.email === email);

// Задание 26 Метод every()

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(evenEl => evenEl % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(evenEl => evenEl % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(evenEl => evenEl % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(evenEl => evenEl % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(evenEl => evenEl % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(evenEl => evenEl % 2 !== 0);


// Задание 27 Все ли пользователи активны

const isEveryUserActive = (users) =>
{return users.every(user => user.isActive ? true : false);   
};

// тернарник
// const isEveryUserActive = (users) =>
//  {return users.every(user => user.isActive );   
// };

// Задание 28 Метод some()
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(element => element %2 === 0);
const anyElementInFirstIsOdd = firstArray.some(element => element %2 !== 0);

const anyElementInSecondIsEven = secondArray.some(element => element %2 === 0);
const anyElementInSecondIsOdd = secondArray.some(element => element %2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(element => element %2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(element => element %2 !== 0);


// Задание 29 Есть ли активные пользователи

const isAnyUserActive = users => 
users.some(user => user.isActive);

// Задание 30 Метод reduce()

const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]
  // Пиши код ниже этой строки
  
  const totalPlayTime = playtimes.reduce((acc, number) => {
  return acc + number}, 0);
  
  // Пиши код выше этой строки
  const averagePlayTime = totalPlayTime / playtimes.length;

// Задание 31 Метод reduce() и массив объектов

const players = [
    { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
    { name: 'Поли', playtime: 469, gamesPlayed: 2 },
    { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
    { name: 'Киви', playtime: 241, gamesPlayed: 1 },
  ];
  // Пиши код ниже этой строки
  
  const totalAveragePlaytimePerGame = players.reduce((time, player) =>
  {return player.playtime / player.gamesPlayed + time}, 0);

// Задание 32 Общий баланс пользователей

const calculateTotalBalance = users => {
    return users.reduce((totalBalance, user) => 
  { return totalBalance += user.balance}, 0); 
     
  };

// вариант Вадима
// const calculateTotalBalance = users => {
//     const totalSum = users.reduce((total, user) => {
//       return total + user.balance;
//     }, 0);
//     return totalSum;
//   };  

// Задание 33 Общее количество друзей
const getTotalFriendCount = users => users.reduce 
    ((allFriends, user) =>
     {return allFriends += user.friends.length}, 0);     

    //  ===========or
    // const getTotalFriendCount = users =>
    // { return users.reduce((allFriends, user) =>
    //{return allFriends += user.friends.length}, 0);  }    


// maybe...but no
// const getTotalFriendCount = users => 
// {users.flatMap(user => user.friends).filter((friend, index, array) => 
// array.indexOf(friend) === index).reduce
// ((allFriends, user) => {return allFriends += user.friend}, 0)   
//  };
        

// Задание 34 Метод sort()

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();


// Задание 35 Свой порядок сортировки чисел
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = 
[...releaseDates].sort((first, second) => first - second);

const descendingReleaseDates =
 [...releaseDates].sort((first, second) => second- first);

// Задание 36 Свой порядок сортировки строк

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((first, second) => first.localeCompare(second));
  
  const authorsInReversedOrder = [...authors].sort((first, second) => second.localeCompare(first));

// Задание 37 Сортировка объеков
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
 
  // Пиши код ниже этой строки
  
  
  const sortedByAuthorName = [...books].sort((firstBook, lastBook) => 
    firstBook.author.localeCompare(lastBook.author));
  
  const sortedByReversedAuthorName = [...books].sort((firstBook, lastBook) =>
  lastBook.author.localeCompare(firstBook.author));
  
  const sortedByAscendingRating = [...books].sort((firstRate, lastRate) =>
   firstRate.rating - lastRate.rating);
  
  const sortedByDescentingRating = [...books].sort((firstRate, lastRate) => 
  lastRate.rating - firstRate.rating);
  
  

// Задание 38 Сортировка по балансу

const sortByAscendingBalance = users => {return users.sort(
    (min, max) => min.balance - max.balance);     
  };

// Задание 39 Сортировка по количеству друзей

const sortByDescendingFriendCount = users =>
 {return [...users].sort((min, max) => 
    max.friends.length - min.friends.length);
};

// Задание 40 Сортировка по имени

const sortByName = users => 
{return [...users].sort((firstName, nextName) => 
    firstName.name.localeCompare(nextName.name));
}

// Задание 41 Цепочки методов (чейнинг, chaining)
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
    { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
  ];
  const MIN_BOOK_RATING = 8;
  // Пиши код ниже этой строки
  
  const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort((firstN, nextN) => firstN.localeCompare(nextN));

// Задание 42 Пользователи и друзья
const getNamesSortedByFriendCount = users => 
[...users]
.sort((firstValue, secondValue) =>  
      firstValue.friends.length - secondValue.friends.length)
.filter((name, index, array) => array.indexOf(name) === index)
.map(user => user.name); 

// Задание 43

// Дополни функцию getSortedFriends(users) так,
//  чтобы она возвращала массив уникальных имён друзей
//  (свойство friends) отсортированный по алфавиту .

const getSortedFriends = users => 
   [...users] 
.map (user => user.friends)
.flatMap((friend) => friend)
.sort((fN, sN) => fN.localeCompare(sN))
  .filter((name, index, arr) => arr.indexOf(name) === index);


//   const getSortedFriends = (users) => {
//     const friends = [...users]
//       .flatMap((friend) => friend.friends)
//       .filter((name, index, array) => array.indexOf(name) === index)
//       .sort((a, b) => a.localeCompare(b));
  
//     return friends;
//   };


// Задание 44 Общий баланс

// Дополни функцию getTotalBalanceByGender(users, gender) так, 
// чтобы она возвращала общий баланс пользователей 
// (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.



const getTotalBalanceByGender = (users, gender) => 
   [...users]    
    .filter(user =>
    user.gender === gender)
 .reduce((acc, user) =>{ return acc += user.balance}, 0);






