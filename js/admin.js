document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("authToken");
    if (!token) {
        alert("You must be logged in as admin.");
        window.location.href = "login.html";
        return;
    }

    document.getElementById("showingForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const movieName = document.getElementById("movieName").value;
        const time = document.getElementById("time").value;
        const theater = document.getElementById("theater").value;

        fetch('https://din-backend-url/admin/create-showing', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                movie: movieName,
                time: time,
                theater: parseInt(theater)
            }),
        })
            .then(response => response.json())
            .then(data => {
                alert("Showing created successfully!");
            })
            .catch(error => console.error('Error:', error));
    });
});
