// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
let a = 'hello';
console.log (a);
document.write (a);
alert (a);

let b = 123;
console.log (b);
document.write (b);
alert (b);

let c = true;
console.log (c);
document.write (c);
alert (c);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
let firstName = 'Yuliia';
let middleName = 'Ruslanivna';
let lastName = 'Vasylyshyn';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log (person);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
let one = 100;
console.log (typeof one);
let two = '100';
console.log (typeof two);
let three = true;
console.log (typeof three);
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Enter firstname');
let second = prompt( 'Enter middlename');
let age = +prompt( 'Enter age');
console.log(name);
console.log(second);
console.log(age);
let age1 = parseInt(prompt('Enter age'));
console.log(age1);