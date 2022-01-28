'use strict';

// let number = 5;
// const leftBorderWidth = 1;
// number = 10;

// console.log(number);

// const obj = {
//     a: 50
// };
// console.log(obj);
// obj.a = 10;

// console.log(obj);


// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt("І шо скажеш?", ""); 
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Як Вас звати?', '');
// answers[1] = prompt('Ваше прізвише', '');
// answers[2] = +prompt('Скільки Вам років?', ''); 
// унарний плюс - плюс який перетворює строку в число

// console.log(typeof(answers));
// console.log(answers);
// document.write('<div style="color: red">' + answers + '</div>');

// Інтерполяція

// const category = 'cars';

// console.log(`https://site.com/${category}/5`);

// // інкримент, декримент
// let incr = 10,
//     decr = 10;

// // оператор інкримента
// incr++;  // постфіксна форма інкримента
// // ++in cr;  // префіксна форма інкримента

// // оператор декотмента
// decr--;

// console.log(incr);
// console.log(decr);

// залишок ділення
// console.log(8%3);

// && - and
// || - or

// const isChecked = true,
//       isClose = false;
 
// console.log(isChecked || isClose);





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB); 
