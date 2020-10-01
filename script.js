
const number0Films = prompt("Сколько фильмов вы уже смотрели?", '' );

const personalMuvieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const question1 = prompt("Один из последних просмотренных фильмов?", '');
const question2 = prompt("Насколько оцените его?", '');
const question3 = prompt("Один из последних просмотренных фильмов?", '');
const question4 = prompt("Насколько оцените его?", '');

personalMuvieDB.movies[question1] = question2;
personalMuvieDB.movies[question3] = question4;

console.log(personalMuvieDB);