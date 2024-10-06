
document.getElementById('create-movie-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('movieTitle').value;
    const description = document.getElementById('movieDescription').value;

    const response = await fetch('/api/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title, description: description })
    });

    const messageElement = document.getElementById('movie-message');
    messageElement.innerText = response.ok ? 'Film oprettet!' : 'Fejl ved oprettelse af filmen.';
});


document.getElementById('update-movie-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const id = document.getElementById('updateMovieId').value;
    const title = document.getElementById('updateMovieTitle').value;
    const description = document.getElementById('updateMovieDescription').value;

    const response = await fetch(`/api/movies/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title, description: description })
    });

    const messageElement = document.getElementById('update-movie-message');
    messageElement.innerText = response.ok ? 'Film opdateret!' : 'Fejl ved opdatering af filmen.';
});


document.getElementById('delete-movie-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const id = document.getElementById('deleteMovieId').value;

    const response = await fetch(`/api/movies/${id}`, {
        method: 'DELETE'
    });

    const messageElement = document.getElementById('delete-movie-message');
    messageElement.innerText = response.ok ? 'Film slettet!' : 'Fejl ved sletning af filmen.';
});


document.getElementById('create-showing-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const movieId = document.getElementById('showingMovieId').value;
    const showingDetails = document.getElementById('showingDetails').value;

    const response = await fetch('/api/admin/create-showing', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movieId: movieId, details: showingDetails }) // Tilpas dette objekt baseret på dine behov
    });

    const messageElement = document.getElementById('admin-message');
    messageElement.innerText = response.ok ? 'Visning oprettet!' : 'Fejl ved oprettelse af visning.';
})
document.getElementById('create-movie-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('movieTitle').value;
    const description = document.getElementById('movieDescription').value;

    const response = await fetch('http://localhost:8080/api/movies', { // Tilføj base URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title, description: description })
    });

    const messageElement = document.getElementById('movie-message');
    messageElement.innerText = response.ok ? 'Film oprettet!' : 'Fejl ved oprettelse af filmen.';
});


document.getElementById('update-movie-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const id = document.getElementById('updateMovieId').value;
    const title = document.getElementById('updateMovieTitle').value;
    const description = document.getElementById('updateMovieDescription').value;

    const response = await fetch(`http://localhost:8080/api/movies/${id}`, { // Tilføj base URL
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: title, description: description })
    });

    const messageElement = document.getElementById('update-movie-message');
    messageElement.innerText = response.ok ? 'Film opdateret!' : 'Fejl ved opdatering af filmen.';
});


document.getElementById('delete-movie-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const id = document.getElementById('deleteMovieId').value;

    const response = await fetch(`http://localhost:8080/api/movies/${id}`, { // Tilføj base URL
        method: 'DELETE'
    });

    const messageElement = document.getElementById('delete-movie-message');
    messageElement.innerText = response.ok ? 'Film slettet!' : 'Fejl ved sletning af filmen.';
});


document.getElementById('create-showing-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const movieId = document.getElementById('showingMovieId').value;
    const showingDetails = document.getElementById('showingDetails').value;

    const response = await fetch('http://localhost:8080/api/admin/create-showing', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movieId: movieId, details: showingDetails }) // Tilpas dette objekt baseret på dine behov
    });

    const messageElement = document.getElementById('admin-message');
    messageElement.innerText = response.ok ? 'Visning oprettet!' : 'Fejl ved oprettelse af visning.';
});

