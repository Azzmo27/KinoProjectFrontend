async function fetchShowings() {
    const response = await fetch('/api/showings');
    const showings = await response.json();
    const showingList = document.getElementById('showing-list');

    showings.forEach(showing => {
        const showingItem = document.createElement('div');
        showingItem.innerText = `ID: ${showing.id}, Film: ${showing.movie.title}, Tid: ${showing.startTime}`;
        showingList.appendChild(showingItem);
    });
}

fetchShowings();
