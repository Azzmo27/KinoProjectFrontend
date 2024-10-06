async function fetchMovies() {
    try {
        const response = await fetch('http://localhost:8080/api/movies'); // Sørg for at bruge den fulde URL
        if (!response.ok) {
            throw new Error('Netværksrespons var ikke OK'); // Kaste fejl hvis responsen ikke er ok
        }
        const movies = await response.json();
        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = ''; // Ryd liste før visning

        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.innerText = `${movie.title} - ${movie.description}`;
            movieList.appendChild(movieItem);
        });
    } catch (error) {
        console.error('Der opstod en fejl ved hentning af film:', error);
        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = '<p>Fejl ved indlæsning af film. Prøv venligst igen senere.</p>';
    }
}

fetchMovies();
