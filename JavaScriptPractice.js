// let age = 4;
// age = 32;
// console.log(age)
1
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes
// console.log("total:", total)
// const diff = apples - grapes;
// console.log("diff:", diff)
2
// let students = 100;
// students += 50;
// console.log("students:", students)
3
// const value = 27.4;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));
// console.log("value:", value)
4
// const companyName = 'Cyberdyne System';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stoks`;
// console.log("message:", message)
5
// let weight = '88,3';
// let heigth = '1.75';
// const normalizeWeight = weight.replace(",", ".");
// const normalizeHeight = heigth.replace(",", ".");
// console.log("normalizeHeight:", normalizeHeight);
// console.log("normalizeWeight:", normalizeWeight);
// const bmi = (normalizeWeight / normalizeHeight ** 2).toFixed(1);
// console.log("bmi:", bmi)
6
// console.log(true && 3);
// console.log(true || 3);
7
// const incomingValue = 5;
// const defaultValue = 10;
// let value;
// const value = incomingValue || defaultValue;

// if (incomingValue === undefined || incomingValue === null) {
//     value = defaultValue
// } else {
//     value = incomingValue
// }

// value =
//     incomingValue === undefined || incomingValue === null
//     ? defaultValue
//     : incomingValue;

// value = incomingValue ?? defaultValue;
    
// console.log("value:", value)
8
// const totalMinutes = 90;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const normalaizeHours = String(hours).padStart(2, 0);
// const normalaizeMinutes = String(minutes).padStart(2, 0);
// // const message = normalaizeHours + ':' + normalaizeMinutes;
// const message = `${normalaizeHours}:${normalaizeMinutes}`

// console.log(message)

// МАСИВЫ
9

// const genres = ["Jazz", "Blues"];

// // добавить запись в конец
// genres.push("Rock-n-Roll")

// // показать первую запись
// console.log(genres[0])

// // показать последнюю запись
// console.log(genres[genres.length - 1])

// // удалить первую запись
// console.log(genres.shift())

// // добавить запись в начало
// console.log(genres.unshift("Country", "Reggae"))

// console.log("genres:", genres)
 
10

// const values = '8 11';

// function getRectArea(values) {
//     // розделение на одельные елементы
//     const array = values.split(" ");
//     // умножение елеметна на елемент
//     const area = array[0] * array[1];
//     // возврат результата
//     return area;
// }
// console.log(getRectArea(values));
11
// const fruits = ["appels", "orange", "banana", "lemon"];
// const friends = ["Mango", "Poly", "Ajax"];

// function logItems(items) {
//     for (let index = 1; index <= items.length; index += 1) {
//         console.log(`$(index): ${items[index - 1]}`);
//     }
// }
// logItems(fruits)
12
// const names = "Artem,Roma,Oleg,Tolik";
// const phones = "80991233211,80667566547,80631123321,806733223456";
// function printContactsInfo(names, phones) {
//     const arrayNames = names.split(',');
//     const arrayPhones = phones.split(',');
//     for (let index = 0; index < arrayNames.length; index+=1) {
//         console.log(`name: ${arrayNames[index]}; phone: ${arrayPhones[index]}`);
//     }
// }

// printContactsInfo(names, phones);
13
// const string = "Welcome to a beatiful and happy future";

// function transformArray(string) {
//     const array = string.split(" ");
//     array.shift();
//     array.pop();
//     const newString = array.join(" ");
//     console.log(newString)
// }
// transformArray(string)
14
// const string = "welcome to the future";
//     function reverseString(string) {
//         const array = string.split('');
//         const reverseArray = array.reverse();
//         const newArray = reverseArray.join("");
//         console.log("newArray:", newArray)
// }
// reverseString(string)
15
// const user = {
//     name: "Artem",
//     age: 32,
//     hobby: "html",
//     premium: true,
// };
// user.mood = "happy"
// user.hobby = "bike"
// user.premium = false
// const keys = Object.keys(user)
//     for (const key of keys) {
//         console.log(`$(key): $(user[key])`);
//     }
// console.log(user);
16
// const salaries = {
//     Artem: 5500,
//     Alesia: 4000,
// };
// function getTotalSalary(object) {
//     let total = 0;
//     const values = Object.values(object);
//     for (const value of values) {
//         total += value;
//     }
//     return total;
// }
// console.log(getTotalSalary(salaries));
17
// const stones = [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Daimond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 900, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 52 },
//     { name: "Ruby", price: 800, quantity: 22 },
// ]
// function calcTotalPrice(stones, stoneName) {
//     let total = 0
//     for (const { name, price, quantity} of stones) {
//         if (name === stoneName)
//             total += price * quantity
//     }
//     return total
// }
// console.log(calcTotalPrice(stones,"Ruby"));
18
// const calculator = {
//     read(a, b) {
//         if (isNaN(a) || isNaN(b)) {
//             console.log("Hey, good morning");
//             return;
//         }
//         this.prop1 = Number(a);
//         this.prop2 = Number(b);
//     },
//     sum() {
//         const result = this.prop1 + this.prop2;
//         return result
//     },
//     mult() {
//         const result = this.prop1 * this.prop2;
//         return result
//     }
// }
// console.log(calculator);
// calculator.read("3", 32)   
// console.log(calculator.mult());
// console.log(calculator.sum());
19
// const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
// };
// const account = {
//     balance: 0,

//     transactions: [
//         {
//             amount: 150,
//             type: 'deposit',
//             id: 0.11358072382122719
//         },
//         {
//             amount: 190,
//             type: 'deposit',
//             id: 0.4398800326125094
//         },
//         {
//             amount: 680,
//             type: 'deposit',
//             id: 0.8658151254901705
//         },
//         {
//             amount: 550,
//             type: 'deposit',
//             id: 0.11579700587297004
//         },
//         {
//             amount: -400,
//             type: 'withdraw',
//             id: 0.48901685941840944
//         },
//         {
//             amount: -200,
//             type: 'withdraw',
//             id: 0.11415427815140822
//         },
//         {
//             amount: -130,
//             type: 'withdraw',
//             id: 0.4683892838100949
//         }
//     ],
//    createTransaction(amount, type) {
//         const id = Math.random()
//         const transaction = {
//             amount,
//             type,
//             id,
//         };
//         return transaction;
//     },

//     deposit(amount) {
//         if (isNaN(amount)) {
//             console.log("Введіть будь ласка число");
//             return;
//         }
//         const normalizeAmount = Number(amount);
//         const type = normalizeAmount > 0 ? Transaction.DEPOSIT : Transaction.WITHDRAW;
        
//         const transaction = this.createTransaction(normalizeAmount, type);
//         this.transactions.push(transaction)
//         this.balance += normalizeAmount;
//     },
//     withdraw(amount) {
//         if (isNaN(amount)) {
//             console.log("Введіть будь ласка число");
//             return;
//         }
//         const currentBalance = this.getBalance();
//         if (!(currentBalance + Number(amount) > 0)) {
//             console.log("Недостатньо коштів");
//             return;
//         }
//         const type = amount > 0 ? Transaction.DEPOSIT : Transaction.WITHDRAW;

//         const transaction = this.createTransaction(amount, type);
//         this.transactions.push(transaction)
//         this.balance += amount;
//      },
    
//     getBalance() { 
//         return this.balance;
//     },
    
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction
//             }
//         }
//      },

//     getTransactionTotal(type) { 
//         let result = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 result += transaction.amount;
//             }
//         }
//         return result;
//     },
// };
// account.deposit(150)
// account.deposit(190)
// account.deposit(680)
// account.deposit(550)
// console.log(account.balance);
// // console.log(account.transactions);
// account.withdraw(-400)
// account.withdraw(-200)
// account.withdraw(-130)
// console.log(account.balance);
// console.log(account.getTransactionTotal("deposit"));

// console.log(account.getTransactionDetails(0.8658151254901705));
20
// function createProduct(obj, callback) {
//     const product = { ...obj, id: Date.now() };
//     callback(product);
// }
// function logProduct(product) {
//     console.log(product);
// }
// function logTotalPrice(product) {
//     console.log(product.price * product.quantity);
// }

// createProduct({ name: "banana", price: 100, quantity: 15 }, logProduct)
// createProduct({ name: "banana", price: 100, quantity: 15 }, logTotalPrice)
21
// const TRANSACTION_LIMIT = 1000;
// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`${amount} should not exceed ${TRANSACTION_LIMIT} credits`)
//             return
//         }
//          if (amount > this.balance) {
//             onError(`${amount} can't exceed account balance of ${this.balance} credits`)
//             return
//         }
//         this.balance -= amount
//         onSuccess(`Account balance: ${this.balance}`)
        
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`${amount} should not exceed ${TRANSACTION_LIMIT} credits`)
//             return;
//         }
//         if (amount <= 0) {
//             onError('Amount must be more than 0 credits')
//             return;
//         }
//         this.balance += amount
//         onSuccess(`Account balance: ${this.balance}`)
//     },
// };
// function handleSuccess(message) {
//     console.log(`Success! ${message}`);
// }
// function handleError(message) {
//     console.log(`Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(2000, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-2000, handleSuccess, handleError);
// account.deposit(200, handleSuccess, handleError);
22
// function each(array, callback0) {
//     return array.map((element) => callback0(element));
// }
// function doble(element) {
//     return element*2
// }
// each([1, 2, 3, 4, 5, 6], doble);
// console.log("each([1, 2, 3, 4, 5, 6], doble):", each([1, 2, 3, 4, 5, 6], doble));
23
// const createProduct = (partiaProduct, callback) => {
//     const product = { id: Date.now(), ...partiaProduct };
//     callback(product)
// };
// const logProduct = (product) => {
//     console.log(product)
// };
// const logTotalPrice = (product) => {
//     console.log(product.price * product.quantity)
// };
// createProduct({ name: "Apple", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "Lemon", price: 20, quantity: 7 }, logTotalPrice);
24
// const cars = [
//     { name: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24999, onSale: true },
//     { name: "Honda", model: "Acord", type: "sedan", amount: 15, price: 22999, onSale: true },
//     { name: "Mazda", model: "Mazda 6", type: "sedan", amount: 4, price: 23999, onSale: false },
//     { name: "Mazda", model: "CX-9", type: "suv", amount: 17, price: 25999, onSale: true },
//     { name: "Toyota", model: "4Runner", type: "suv", amount: 24, price: 22999, onSale: false },
//     { name: "Toyota", model: "Sequoia", type: "suv", amount: 9, price: 26999, onSale: false },
//     { name: "Toyota", model: "Tacoma", type: "truck", amount: 114, price: 27999, onSale: true },
//     { name: "Ford", model: "F-150", type: "truck", amount: 144, price: 28999, onSale: true },
//     { name: "Ford", model: "Fusion", type: "sedan", amount: 141, price: 29999, onSale: true },
//     { name: "Ford", model: "Explorer", type: "suv", amount: 140, price: 34999, onSale: false },
// ];
// const getModel = (cars) => {return cars.map((el) => el.model) };

// console.table(getModel(cars));
25
// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map((element) => ({
//         ...element, price: element.price - element.price * discount,
//     }));
// };
// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.9));
26
// const filterByPrice = (cars, threshold) => {
//     return cars.filter((element) => element.price < threshold);

// }
// console.log(filterByPrice(cars, 23000))
27
// const getCarsWithDiscount = (cars) => { return cars.filter((element) => element.onSale) };
// console.log(getCarsWithDiscount(cars));
28
// const getCarsWithType = (cars, type) => {
//     return cars.filter((element) => element.type === type);
// }
// console.log(getCarsWithType(cars, "suv"));
// console.log(getCarsWithType(cars, "sedan"));
29
// const getCarsWithModel = (cars, model) => cars.find((el) => el.model === model);
// console.log(getCarsWithModel(cars, "F-150"));
30
// const getTotalAmount = (cars) => {
//     return cars.reduce((acc, element, i, array) => {
//         return (acc += element.amount);
//     }, 0);
// };
// const getTotalAmount = (cars) => cars.reduce((acc, el, i, array) => (acc += el.amount), 0);

// console.log(getTotalAmount(cars));
31
// const getModelOnSle = (cars) => {
//     return cars.filter((el) => el.onSale).map((el) => el.model);
// };

// const getModelOnSle = (cars) =>
//     cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// const getModelOnSle = (cars) =>
//     cars.reduce((acc, el) => {
//         if (el.onSale) {
//             acc.push(el.model);
//         }
//         return acc;
//     }, []);

// console.log(getModelOnSle(cars))
32
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
33
// const chopShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         { name: 'Diamond', price: 2700, quantity: 3 },
//         { name: 'Sapphire', price: 1400, quantity: 7 },
//         { name: 'Ruby', price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         let result = 0;
//         for (const stone of this.stones) {
//             if (stone.name === stoneName) {
//                 result = stone.price * stone.quantity;
//             }
//         }
//         return result;
//     },
// };
// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Diamond'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Ruby'));
34
// const phonebook = {
//     contacts: [],
//     add(contact) {
//         const newContact = {
//             list: "default",
//             ...contact,
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         };
//         this.contacts.push(newContact);
//     },
//     generateId() {
//         return `_${Math.random().toString(36).substr(2, 9)}`;
//     },
//     getDate() {
//         return Date.now();
//     },
// };

// phonebook.add({
//     name: "Mango",
//     email: "mango@gmail.com",
//     list: "Friends",
// });

// phonebook.add({
//     name: "Aleks",
//     email: "aleks@gmail.com",
//     list: "Friends",
// });
// console.log(phonebook.contacts);
35
// const calculator = {
//     read(a, b) {
//         this.prop1 = a;
//         this.prop2 = b;
//     },
//     add() {
//         return this.prop1 + this.prop2
//     },
//     mult() {
//         return this.prop1 * this.prop2
//     },
// }
// calculator.read(7, 32)
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());
36
// const chopShop = {
//     stones: [
//         { name: "Emerald", price: 1300, quantity: 4 },
//         { name: "Diamond", price: 2700, quantity: 3 },
//         { name: "Sapphire", price: 1400, quantity: 7 },
//         { name: "Ruby", price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         let result = 0;
//         for (const stone of this.stones) {
//             if (stone.name === stoneName) {
//                 result = stone.price*stone.quantity
//             }
//         }
//         return result;
//     },
// }
// console.log(chopShop.calcTotalPrice("Emerald"))
// console.log(chopShop.calcTotalPrice("Diamond"))
// console.log(chopShop.calcTotalPrice("Sapphire"))
// console.log(chopShop.calcTotalPrice("Ruby"))
37
// const phonebook = {
//     contacts: [],
//     add(contact) {
//         const newContact = {
//             list: "default",
//             ...contact,
//             id: this.generateId(),
//             createAt: this.getDate(),
//         };
//         this.contacts.push(newContact);
//     },
//     generateId() {
//         return `_${Math.random().toString(36).substr(2, 9)}`;
//     },
//     getDate() {
//         return Date.now();
//     },
// };

//     phonebook.add({
//         name: 'Roman',
//         email: 'romka@gmail.com',
//         list: 'friends'
//     }),

//     phonebook.add({
//         name: 'Oleg',
//         email: 'olegg@gmail.com',
//         list: 'friends'
//     })
// console.log(phonebook.contacts)
38
// const calculator = {
//     read(a, b) {
//         this.prop1 = a;
//         this.prop2 = b;
//      },
//     add() {
//         return this.prop1 + this.prop2
//     },
//     mult() {
//         return this.prop1 * this.prop2
//      },
// };
// calculator.read(3, 6)
// console.log(calculator)
// console.log(calculator.add())
// console.log(calculator.mult())
39
// class User{
//     constructor({ email, age, numberOfPosts, topics }) {
//         this.email = email;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }
//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//     }
//     updatePostCount(value) {
//         this.topics += value;
//     }
// }

// const mango = new User({
//     email: 'mango@gmail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ["tech", "cooking"],
// });
// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// const poly = new User({
//     email: 'poly@gmail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo());
// poly.updatePostCount(4);
// console.log(poly.getInfo());
40
// class Storage{
//     constructor(items) {
//         this.items = items
//     }

//     getItems() {
//         return this.items
//     }
//     addItem(item) {
//         this.items.push(item)
//     }
//     removeItem(item) {
//         if (!this.items.includes(item)) {
//             return;
//         }
//         const index = this.items.indexOf(item);
//         this.items.splice(index, 1);
//     }
// }

// const storage = new Storage(['apple', 'lemon', 'strawbery', 'orange']);

// const items = storage.getItems();
// console.table(storage.items);

// storage.addItem('banana');
// console.table(storage.items);

// storage.removeItem('lemon');
// console.table(storage.items);
41
// class User {
//     #login;
//     #email;
//     constructor({ email, login }) {
//         this.#email = email;
//         this.#login = login;
//     }

//     get email() {
//         return this.#email
//     }

//     set email(newEmail) {
//         this.#email = newEmail
//     }

//     get login() {
//         return this.#login
//     }

//     set login(newLogin) {
//         this.#login = newLogin
//     }
// }

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof'
// });
// console.log(mango.login);
// mango.login = 'Mangodoge';
// console.log(mango.login);

// const poly = new User({
//     login: 'Poly',
//     email: 'poly@gmail.com'
// });
// console.log(poly.login);
// poly.login = 'Polycutie';
// console.log(poly.login);
42
// class Notes {
//     static Prioprty = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high'
//     };
//     constructor(items) {
//         this.items = items;
//     }

//     addNote(note) {
//         this.items.push(note)
//     }
    
//     removeNote(text) {
//         let index = null;
//         this.items.forEach((note, i) => {
//             if (note.text === text) {
//                 index = i;
//             }
//         });
//         if (!index===null) {
//             console.log("Note is not exist");
//             return;
//         }
//         this.items.splice(index, 1);
//     }
//     updatePriority(text, newPriority) {
//         let index = null;
//         this.items.forEach((note, i) => {
//             if (note.text === text) {
//                 index = i;
//             }
//         });
//         if (!index===null) {
//             console.log("Note is not exist");
//             return;
//         }
//         this.items[index].priority = newPriority;
//     }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({
//     text: 'My first note', priority: Notes.Prioprty.LOW
// });
// console.log(myNotes.items);

// myNotes.addNote({
//     text: 'My second note', priority: Notes.Prioprty.NORMAL
// });
// console.log(myNotes.items);

// myNotes.removeNote('My first note');
// console.log(myNotes.items);

// myNotes.updatePriority('My second note', Notes.Prioprty.HIGH);
// console.log(myNotes.items);
43
// const commentRef = document.querySelector('#comment')

// const receiptListRef = document.querySelector('#receipt')

// const allProductsRef= receiptListRef.querySelectorAll('h3')

// const typesQuantity = allProductsRef.length
// console.log(`Thanks, for month you bought ${typesQuantity} type products.`);

// const productItemsRef = receiptListRef.querySelectorAll('.product');

// productItemsRef.forEach((item) => {
//     const productName = item.querySelector('h3').textContent;
//     const quantity = item.querySelectorAll('div p');
//     const price = [...quantity].reduce((acc, item) => {
//         return (acc += Number(item.textContent))
//     }, 0);
//         console.log(`Products ${productName} you bought ${quantity.length} time for
//  amount ${price} dollars`
//         );
// });
44
const galleryItems = [
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        description: "Container Haulage Freight"
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        description: "Aerial Beach View"
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
        description: "Flower Blooms"
    },
];
const galleryRef = document.querySelector('.gallery');
const imagesElements = galleryItems.map()