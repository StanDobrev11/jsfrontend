function solve(array) {

    const movieList = []
    
    // get movie name
    array.forEach(input => {
        const addMovieCommand = 'addMovie'
        const directedByCommand = 'directedBy'
        const onDateCommand = 'onDate'

        if (input.includes(addMovieCommand)) {
            const movieName = input.substring(addMovieCommand.length + 1)
            const newMovie = {
                name: movieName
            }
            movieList.push(newMovie)

        } else if (input.includes(directedByCommand)) {
            const [movieName, movieDirector] = input.split(` ${directedByCommand} `)
            
            // extract the movie by name
            if (movieList.some(movie => movie.name === movieName)) {
                const movie = movieList.find(movie => movie.name === movieName)
                movie.director = movieDirector
            }
            
        } else if (input.includes(onDateCommand)) {
            const [movieName, movieDate] = input.split(` ${onDateCommand} `)
            
            if (movieList.some(movie => movie.name === movieName)) {
                const movie = movieList.find(movie => movie.name === movieName)
                movie.date = movieDate
            }
        }

  

    });

    movieList
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)))
}


solve([
    'addMovie Fast and Furious', 
    'addMovie Godfather', 
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])


solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])