document.getElementById('reservation-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const showingId = document.getElementById('showingId').value;
    const seats = document.getElementById('seats').value.split(',').map(seat => ({ id: parseInt(seat) })); // Tilpas denne struktur til din Seat-model
    const customerName = document.getElementById('customerName').value;

    const response = await fetch('/api/reservations/reserve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ showing: { id: showingId }, seats: seats, customer: { name: customerName } }) // Tilpas denne struktur til din ReservationRequest-model
    });

    const messageElement = document.getElementById('reservation-message');
    if (response.ok) {
        messageElement.innerText = 'Billet reserveret!';
    } else {
        messageElement.innerText = 'Fejl ved reservation af billet.';
    }
});
