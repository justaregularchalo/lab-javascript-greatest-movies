// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let onlyDirectors = moviesArray.map((eachMovie) =>{
        return eachMovie.director;

    });
    return onlyDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesArray) {
    if (!moviesArray || moviesArray.length === 0) {
        return 0; 
    }

    let spielbergDramas = moviesArray.filter((eachMovie) => {
        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama");
    });

    return spielbergDramas.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {

if (moviesArray.length === 0) {
 return 0
};

let totalScores = moviesArray.reduce((acc, eachMovie) => {
    if (eachMovie.score) {
        return acc + eachMovie.score;
    } else {
        return acc;
    }
}, 0);

let averageScore = totalScores / moviesArray.length;
return Number(averageScore.toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesAverage(moviesArray) {
   

    if (moviesArray.length === 0) {
        return 0
       };
   
    let dramaMovies = moviesArray.filter(eachMovie => {
       
    return eachMovie.genre ==="Drama" && eachMovie.scores !== undefined;
    });

   
    if (dramaMovies.length === 0) {
        return 0;
    }

   
    let totalScores = dramaMovies.reduce((acc, dramaMovie) => {
        return acc + dramaMovie.scores;
    }, 0);

    
    let averageScore = totalScores / dramaMovies.length;
    return Number(averageScore.toFixed(2));
};




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
