document.addEventListener('DOMContentLoaded', function() {
    const seatSelection = document.getElementById('seat-selection');
    const reserveButton = document.getElementById('reserve-button');
    const seatMessage = document.getElementById('seat-message');

    const totalSeats = 30; // Antal sæder
    const reservedSeats = [2, 5, 10]; // Eksempel på reserverede sæder


    for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.textContent = i;

        // Marker reserverede sæder
        if (reservedSeats.includes(i)) {
            seat.classList.add('reserved');
            seat.textContent = 'X'; // Reserverede sæder vises som 'X'
        } else {
            seat.addEventListener('click', function() {
                seat.classList.toggle('selected'); // Vælg eller fjern valg
            });
        }

        seatSelection.appendChild(seat);
    }


    reserveButton.addEventListener('click', function() {
        const selectedSeats = Array.from(document.getElementsByClassName('selected'))
            .map(seat => seat.textContent)
            .join(', ');

        if (selectedSeats.length === 0) {
            seatMessage.textContent = 'Ingen sæder valgt!';
        } else {
            seatMessage.textContent = `Du har reserveret sæder: ${selectedSeats}`;
            // Her kan du tilføje en fetch-anmodning til at sende reserveringen til serveren
        }
    });
});
