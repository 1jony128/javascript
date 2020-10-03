
let number0Films;

function start() {
    number0Films = +prompt("Сколько фильмов вы уже смотрели?", '' );

    while ( number0Films == "" ||  number0Films == null ||  isNaN(number0Films)){
        number0Films = +prompt("Сколько фильмов вы уже смотрели?", '' );
    }
}

    start();


const personalMuvieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

   
    function rememberMyfilms () {
        for (let i=0; i<2; i++){
            const q1 = prompt("Один из последних просмотренных фильмов?", '');
            const q2 = prompt("Насколько оцените его?", '');
    
            if (q1 != null && q2 != null  && q1 != "" && q2 != "" && q1.length < 50 && q2.length < 50){
            personalMuvieDB.movies[q1] = q2;
            console.log("done");
            } else{
                console.log("ошибка");
            }
        }
    }
    
    rememberMyfilms ();

    if (personalMuvieDB.count <=10) {
        console.log("Мало");
    } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count <= 30 ){
        console.log("Много очень");
    }
    let i1  = 0;
    while(i1<2){
    const q1 = prompt("Один из последних просмотренных фильмов?", '');
    const q2 = prompt("Насколько оцените его?", '');

    if (q1 != null && q2 != null  && q1 != "" && q2 != "" && q1.length < 50 && q2.length < 50){
    personalMuvieDB.movies[q1] = q2;
    console.log("done");
    } else{
        console.log("ошибка");
        i1--;
    }
    i1++;
}




console.log(personalMuvieDB);