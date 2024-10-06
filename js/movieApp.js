fetch('http://localhost:8080/api/movies')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(movies => {

    })
    .catch(error => console.error('Error fetching movies:', error));


async function fetchUpcomingMovies() {
    try {
        const response = await fetch('http://localhost:8080/api/movies/upcoming');
        if (!response.ok) throw new Error('Netværksrespons var ikke OK');

        const upcomingMovies = await response.json();
        const upcomingMoviesContainer = document.getElementById('upcoming-movies');
        upcomingMoviesContainer.innerHTML = '';

        upcomingMovies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            `;
            upcomingMoviesContainer.appendChild(movieDiv);
        });
    } catch (error) {
        console.error('Der opstod en fejl ved hentning af kommende film:', error);
        const upcomingMoviesContainer = document.getElementById('upcoming-movies');
        upcomingMoviesContainer.innerHTML = '<p>Fejl ved indlæsning af kommende film. Prøv venligst igen senere.</p>';
    }
}


async function fetchShowings(movieId) {
    try {
        const response = await fetch(`http://localhost:8080/api/movies/${movieId}/showings`);
        if (!response.ok) throw new Error('Netværksrespons var ikke OK');
        const showings = await response.json();

    } catch (error) {
        console.error('Fejl ved hentning af showings:', error);
    }
}

s
window.onload = () => {
    fetchMovies();
    fetchUpcomingMovies();
};
