"use strict";

// 5 - Переменные и строгий режим

// // a = 15;  // так нельзя делать. при использовании директивы "use strict"; - выведется ошибка
// // console.log(a);
// let number = 5;
// const leftBorderWidht = 1;
// number = 10;
// console.log(number);
// //leftBorderWidht = 10;
// const obj = {
//     a: 50
// };
// console.log(obj);
// console.log(name);
// var name = 'Ivan ';   //устаревший вариант

// {
//     let result = 50;
//     var result1 = 90;
// }
// //console.log(result);  // Не достучаться до result, если она объявлена через let или const, но можно если она var
// console.log(result1);

// //6 - Классификация типов данных в JS

// let number = 4.6;
// console.log(4/0);   //Infinity
// console.log('string' * 9);  //NaN
// const person = 'Alex';
// const bool = true;
// console.log(something);  //null
// let und;
// console.log(und);  //undefined
// //Объекты
// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
// //console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

//Простое общение с пользователем

//alert('Hello!');
//const result = confirm("Are u here?");
//console.log(result);
//const answer = +prompt("Вам уже есть 18 лет?", "");
//console.log(typeof(answer));
//console.log(answer + 5);  //если из prompt убрать + , то вывыдется string, а не сумма
// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');
// document.write(answers);
// const answers = [];
// console.log(typeof(answers));

//Интерполяция

//const category = 'toys';
//console.log(`https://someurl.com/${category}/5`);

//Операторы в JS

// console.log('arr' + " - object");
// console.log(4 + " - object");
// console.log(4 + "5");   //45
// console.log(4 + +"5");  //9
/*let incr = 10,
    decr = 10;
incr++;
decr--;
console.log(incr); //11
console.log(decr); //9 */
/*const isChecked = false,
      isClose = false;
console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);*/

//Условия

// if (4 == 9){
//     console.log('Ok!');
// }else {
//     console.log('Error');
// }

// const num = 48;
// if (num < 49){
//     console.log('Error');
// } else if (num > 100){
//     console.log('Too much');
// } else{
//     console.log('Ok!');
// }

// const num = 48;
// (num === 48) ? console.log('Ok!') : console.log('Error');


//Циклы

/*let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}*/

/*let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);*/

/*let num = 50;
for (let i = 1; i < 8; i++){
    console.log(num);
    num++;
}*/

/*for (let i = 1; i < 10; i++){
    if (i === 6) {
        //break;  // прерывает цикл полностью
        continue; // пропускает 6
    }
    console.log(i);
}/*

