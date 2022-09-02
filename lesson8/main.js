// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let xxx = new User ('12', 'Marianna', 'Petrenko', 'mary1995', '0636596307');
// console.log (xxx);






// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function User(name, age, sex) {
// this.name = name;
// this.age = age;
// this.greeting = function (msg) {
//     console.log (`${msg} my name is ${this.name}`);
// };
// }
// let py = new User('Max', 20);
// py.greeting('Hi');
// console.log(py);
// let x = new User('Oleh', 27);
// console.log (x);
// x.greeting('Hello');

// function User (name, age, height) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.greeting = function (greeting) {
//         console.log(`${greeting}, I'm ${this.name} and I'm ${this.age} years old`);
//     }
// }
// let bt = new User ('Yarina', 38, 165);
// console.log (bt);
// bt.greeting('Hey');

// function User (name, age) {
//     this.name = name;
//     this.age = age;
//     this.greeting = function (message) {
//         console.log (`${message}`);
//     }
// }
// let rt = new User ('Masha', 20);
// console.log (rt);
// rt.greeting('mrav');

// function User (name, age) {
//     this.name = name;
//     this.age = age;
//     this.greeting = function (msg) {
//         console.log (`${msg}, my name is ${this.name}`);
//     }
// }
// let us = new User ('Vasya', 30);
// console.log (us);
// us.greeting ('hi');

// let customer = {
//     name: 'Petro',
//     age: 50,
//     password: 'hothothot'
// }

// us.greeting.apply (customer, ['dratuti']);
// us.greeting.apply (customer, ['hallo']);
// us.greeting.call (customer, 'dobryi den');
// let copy = us.greeting.bind (customer);
// copy ('ahahahahah');
// let myav = us.greeting.bind (customer, 'by by');
// myav ();


// function User (name, age) {
//     this.name = name;
//     this.age = age;
//     this.greeting = function (message) {
//         console.log (`${message}, my name is ${this.name}`);
//     }
// }
//
// function SuperUser (name, age, password) {
// User.apply(this, arguments);
//     this.password = password;
//     this.greeting = function (msg) {
//         console.log (`${msg}, my name is ${this.name}`);
//     }
// }
// let sup = new SuperUser ('Kolya', 25, '55555')
// sup.greeting ('aloha');
// console.log (sup);

