document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('https://din-backend-url/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.token) {

                localStorage.setItem("authToken", data.token);
                alert("Login successful!");
                window.location.href = "reservations.html"; // Redirect to reservation page
            } else {
                alert("Login failed. Please check your credentials.");
            }
        })
        .catch(error => console.error('Error:', error));
});
