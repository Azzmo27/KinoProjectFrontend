
const movies = [
    { id: 1, title: "Movie A" },
    { id: 2, title: "Movie B" },
    { id: 3, title: "Movie C" },
];


function loadMovies() {
    const movieList = document.getElementById("movie-list");
    movies.forEach(movie => {
        const listItem = document.createElement("li");
        listItem.textContent = movie.title;
        movieList.appendChild(listItem);
    });
}

function loadSeatChart() {
    const seatChart = document.getElementById("seat-chart");
    // For simplicity, we will just create a 5x5 seat grid
    for (let i = 0; i < 5; i++) {
        const row = document.createElement("div");
        for (let j = 0; j < 5; j++) {
            const seat = document.createElement("button");
            seat.textContent = "Seat " + (i * 5 + j + 1);
            seat.classList.add("seat");
            seat.onclick = function() {
                seat.classList.toggle("selected");
                updateSelectedSeats();
            };
            row.appendChild(seat);
        }
        seatChart.appendChild(row);
    }
}


function updateSelectedSeats() {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    const selectedSeatsText = Array.from(selectedSeats).map(seat => seat.textContent).join(", ");
    document.getElementById("selected-seats").textContent = `Selected Seats: ${selectedSeatsText}`;
}

document.getElementById("reserve-button").addEventListener("click", function() {
    alert("Tickets reserved for: " + document.getElementById("selected-seats").textContent);
});


document.addEventListener("DOMContentLoaded", function() {
    loadMovies();
    loadSeatChart();
});
