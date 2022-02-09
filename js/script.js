'use strict';

////////////////////////////////////////////////////////
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> //
////////////////////////////////////////////////////////

// УРОК 18. (02-015) Практика , ч3. Используем функции

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
 
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: true
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Ok!')
        } else {
            console.log('Err!')
            i--;        
        }
    
    } 
}
rememberMyFilms();

function detectPersonalLevel() {

    if ( personalMovieDB.count < 10 ) {
        console.log('Переглянуто доволі мало фільмів')
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
        console.log('ви хороший глядач')
    } else if ( personalMovieDB.count > 30 ) {
        console.log('ви кіноман')
    } else {
        console.log('error')
    }
}

detectPersonalLevel();


// function showMyDB() {
//     if ( personalMovieDB.privat === false ) {
//         console.log(personalMovieDB)
//     }
// }

// showMyDB();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
    else {
        // console.log('База даних  прихована');
        console.log('Database hidden');
    }
}
 
showMyDB(personalMovieDB.privat);



// console.log(personalMovieDB); 

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genres = prompt(`Ваш любим ый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genres;
    }
}
writeYourGenres();


