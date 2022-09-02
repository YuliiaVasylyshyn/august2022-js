// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let fruits = ['pear', 'apple', 'peach', 'kiwi', 'orange', 'grape', 'raspberry', 'banana', 'strawberry', 'plum'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[5]);
console.log(fruits[6]);
console.log(fruits[7]);
console.log(fruits[8]);
console.log(fruits[9])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'It',
    pageCount: 650,
    genre: 'horrors'
};
console.log(book1);

let book2 = {
    title: 'The Woman in White',
    pageCount: 327,
    genre: 'thriller'
};
console.log(book2);

let book3 = {
    title: 'Jane Eyre',
    pageCount: 287,
    genre: 'classic'
};
console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {
    title: 'Crooked House',
    pageCount: 250,
    genre: 'detective',
    authors: [
        {
            name: 'Agatha Christie',
            age: 65
        },
        {
            name: 'Steven King',
            age: 71
        },
        {
            name: 'Victor Hugo',
            age: 40
        }
    ]
};

let book5 = {
    title: 'Forest song',
    pageCount: 148,
    genre: 'play',
    authors: [
        {
            name: 'Charlotte Bronte',
            age: 23
        },
        {
            name: 'Stig Larson',
            age: 38
        },
        {
            name: 'Lesia Ukrainka',
            age: 28
        }
    ]
};
let book6 = {
    title: 'To Kill a Mockingbird',
    pageCount: 290,
    genre: 'classic',
    authors: [
        {
            name: 'Harper Li',
            age: 52
        },
        {
            name: 'Lina Kostenko',
            age: 30
        },
        {
            name: 'Ivan Franko',
            age: 46
        },
    ]
}
console.log(book4, book5, book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'Yuliia',
        username: 'yuliia25',
        password: '123key789'
    },
    {
        name: 'Petro',
        username: 'Petya',
        password: 'dog567'
    },
    {
        name: 'Svitlana',
        username: 'svitlanka',
        password: '655jdkd'
    },
    {
        name: 'Nadia',
        username: 'Nad18',
        password: 'jhgf890'
    },
    {
        name: 'Volodymyr',
        username: 'Vova1995',
        password: 'tiger456'
    },
    {
        name: 'Vira',
        username: 'virochka1997',
        password: 'aksalsdms'
    },
    {
        name: 'Roman',
        username: 'roma111',
        password: '34qpwpp'
    },
    {
        name: 'Mykola',
        username: 'kolya',
        password: 'kfm86cjsdcn'
    },
    {
        name: 'Tetiana',
        username: 'tanka7890',
        password: 'cdkml9876'
    },
    {
        name: 'Oleh',
        username: 'olehko30',
        password: 'aklsd'
    }
]
console.log(users[0].password);
console.log(users[1]['password']);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8]['password']);
console.log(users[9]['password']);

