// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
let a = 5;
if (a !== 0) {
    console.log('virno');
} else {
    console.log('nevirno');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 51;
    if (time >= 0 && time <= 14) {
        console.log('1 part');
    } else if (time >=15 && time <=29) {
        console.log('2 part');
    } else if (time >=30 && time <=44) {
        console.log('3 part');
    } else if (time >=45 && time <=59) {
        console.log('4 part');
    } else {
        console.log('error');
    }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = 20;
    if (day >0 && day <=10) {
        console.log('1 decada');
    } else if (day >10 && day <= 20) {
        console.log('2 decada');
} else if (day >20 && day <=31) {
        console.log('3 decada');
    } else {
        console.log('error');
    }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let schedule = +prompt ('enter the serial number of the day');
    switch (schedule) {
        case 1:
        console.log('monday');
        break;
        case 2:
            console.log('tuesday');
            break;
        case 3:
            console.log(wednesday);
            break;
        case 4:
            console.log('thursday');
            break;
        case 5:
            console.log('friday');
            break;
        case 6:
            console.log('saturday');
            break;
        case 7:
            console.log('sunday');
            break;
        default:
            console.log('???');
            break;
    }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
   let x1 = 5;
   let x2 = 1;
    if (x1>x2) {
        console.log(x1);
    } else if (x2>x1) {
        console.log(x2);
    } else if (x1===x2) {
        console.log('equal');
    }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора ||  буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = '' || 'default';
    console.log(x);