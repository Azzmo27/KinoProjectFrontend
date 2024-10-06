async function fetchSchedule() {
    const response = await fetch('/api/operator/schedule');
    const showings = await response.json();
    const scheduleDiv = document.getElementById('schedule');

    showings.forEach(showing => {
        const showingItem = document.createElement('div');
        showingItem.innerText = `${showing.movie.title} - ${showing.startTime}`;
        scheduleDiv.appendChild(showingItem);
    });
}

fetchSchedule();
