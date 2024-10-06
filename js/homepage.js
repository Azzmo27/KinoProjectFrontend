document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movie-list');
    const loginForm = document.getElementById('login-form');
    const showLoginBtn = document.getElementById('show-login-btn');


    const ticketsModal = document.getElementById('ticketsModal');
    const closeTicketsModal = document.getElementById('closeTicketsModal');


    fetch('/api/movies')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(movies => {
            movies.forEach(movie => {
                const movieItem = document.createElement('div');
                movieItem.innerText = `${movie.title} (${movie.releaseYear})`; // Antag, at filmobjektet har title og releaseYear
                movieList.appendChild(movieItem);
            });
        })
        .catch(error => console.error('Error fetching movies:', error));


    showLoginBtn.addEventListener('click', () => {
        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    });


    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Forhindre standardformularhandling

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;


        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => {
                if (response.ok) {
                    // Håndter succes, f.eks. omdirigere til admin eller operatørside
                    window.location.href = 'Admin.html'; // Omdiriger til admin-side
                } else {
                    alert('Login fejlede, prøv igen.');
                }
            })
            .catch(error => console.error('Login error:', error));
    });


    function openTicketsModal() {
        ticketsModal.style.display = "block";
        // Hent billetter fra API
        // ...
    }


    closeTicketsModal.onclick = function() {
        ticketsModal.style.display = "none";
    }


    window.onclick = function(event) {
        if (event.target == ticketsModal) {
            ticketsModal.style.display = "none";
        }
    }
});
