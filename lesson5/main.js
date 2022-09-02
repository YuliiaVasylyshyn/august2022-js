// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і b
function area1 (a, b) {
    let res= a * b;
    return res;
}
let x = area1 (5, 4);
console.log (x);

function rectangle (a, b) {
    return a * b;
}
console.log (rectangle(10, 4));

function area2 (a, b) {
    return a * b;
}
console.log (area2(6, 8));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let pi = 3.14;
function circle (pi, r) {
    return pi * r * r;
}
console.log (circle(pi,5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let Pi = 3.14;
function cyl (Pi, h, r) {
    return 2 * 3.14 * h * r;
}
console.log (cyl(Pi, 2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
let books = [
    {name: 'It', author: 'King', pages: 900},
    {name: 'Jane Eyre', author: 'Bronte', pages: 340},
    {name: 'Hunger games', author: 'Kollinz', pages: 450}
]
function obj (array) {
    for (let item of array) {
        console.log (item);
    }
}
obj (books);


let people = ['maria', 'oleh', 'victor', 'anna']
function names (text) {
    console.log (text);
}

names (people);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraf (text) {
    document.write (`<p>${text}</p>`);
    console.log (text);
}
paragraf('Lorem ipsum dolor');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list (text) {
    document.write (`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
    console.log (text);
}
list ('Hello world!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function foo (text, number) {
    document.write (`<ul>`);
        for (let i = 0; i < number; i++) {
    document.write (`<li>${text}</li>`)
}
        document.write (`</ul>`);
}
foo ('apple', 4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let primitiveArray = [8, 'cat', true]
function objects (array) {
    document.write (`<ul>`);
    for (one of array) {
        document.write (`<li>${one}</li>`);
    }
    document.write(`</ul>`);
}
objects (primitiveArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 34567, name: 'Marta', age: 24},
    {id:80547, name: 'Olha', age: 26},
    {id: 65432, name: 'Max', age: 20}
]
function fooo (array) {
    for (let element of array) {
        document.write (`<div>${element.id}${element.name}${element.age}</div>`)
        }
}
fooo (users);

// - створити функцію яка повертає найменьше число з масиву
let counts = [8, 7, 5];
function num (arrr) {
   let min = arrr[2];
   for (let elem of arrr) {
       if (elem < min) {
           min = elem;
       }
   }
   return min;
}
console.log (num(counts));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let array = [1, 2, 3, 4, 5];
const fooQ = arr => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
console.log (fooQ(array));
