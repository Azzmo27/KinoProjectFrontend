document.addEventListener("DOMContentLoaded", function () {

    const token = localStorage.getItem("authToken");
    if (!token) {
        alert("You must be logged in to make a reservation.");
        window.location.href = "login.html";
        return;
    }

    fetch('https://din-backend-url/showings', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(showings => {
            const movieSelect = document.getElementById("movie");
            showings.forEach(showing => {
                const option = document.createElement("option");
                option.value = showing.id;
                option.textContent = `${showing.movie} - ${showing.time}`;
                movieSelect.appendChild(option);
            });
        });

    document.getElementById("reservationForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const movieId = document.getElementById("movie").value;
        const seats = document.getElementById("seats").value;

        fetch('https://din-backend-url/reservations/reserve', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                showingId: movieId,
                seats: parseInt(seats)
            }),
        })
            .then(response => response.json())
            .then(data => {
                alert("Reservation successful!");
            })
            .catch(error => console.error('Error:', error));
    });
});
