// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (array) => {
    const newArray = array.map((movie => {
        return movie.director;
    }))
    return newArray
} 
//since you are mapping within a function, the (array) parameter has to also be used as the thing you want to map.
//this then assumes the value of movies as the arguement when you call the function 

/*const getAllDirectors = movies.map((movie => {
    return movie.director
}))
console.log(getAllDirectors)
(if you were mapping the variable movies directly*/


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (array) => {
    const spielbergDrama = array.filter((movie => {
        return movie.director === "Steven Spielberg"
    })).filter((movie => {
        return movie.genre.includes("Drama")
    }))
    return spielbergDrama.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals



const ratesAverage = (array) => {
    if (array.length === 0) { //if there is no movie, return 0
        return 0;
    }
    const rates = array.map((movie => {
        return movie.rate
    })).reduce((accumulator, currentValue) => {
        if (currentValue !== undefined) {

            return accumulator + currentValue
        } else { //if one of the movies does not have a rating, include this in the average calculation
            return accumulator;
        }
     
    })
    return Number((rates/array.length).toFixed(2)); //works without Number, but done so it can pass the Jasmine test
}



// Iteration 4: Drama movies - Get the average of Drama Movies
let movies = [
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "duration": "2h 55min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.1
    },
    {
      "title": "The Godfather: Part II",
      "year": 1974,
      "director": "Francis Ford Coppola",
      "duration": "3h 22min",
      "genre": [
        "Crime",
        "Action"
      ],
      "rate": 9
    }]

    const dramaMoviesRate = (array) => {
        const drama = array.filter((movie => {
        return movie.genre.includes("Drama") //godfather, shawshank
    })) 
    return ratesAverage(drama);
    }
    console.log(dramaMoviesRate(movies))

 
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average



//ALTERNATIVE ITERATION 4, LONG VERSION, WITHOUT USING PREVIOUS DEFINED FUNCTION ratesAverage
/*
const dramaMoviesRate = (array) => {
    const drama = array.filter((movie => {
    return movie.genre.includes("Drama") //godfather, shawshank
})) 
const dramaRate = drama.map((movie => {
    return movie.rate
})).reduce((accumulator, currentValue) => {
    return accumulator + currentValue; //18.2
})
return Number((dramaRate/drama.length)).toFixed(2);
}
console.log(dramaMoviesRate(movies)) 
*/