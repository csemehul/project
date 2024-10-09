// Sample dataset
const songs = [
    { title: "Song A", artist: "Artist 1" },
    { title: "Song B", artist: "Artist 2" },
    { title: "Song C", artist: "Artist 1" },
    { title: "Song D", artist: "Artist 3" },
    { title: "Song E", artist: "Artist 2" },
    // Add more songs as needed
];

function searchSongs() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Filter songs based on input
    const filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(input) || 
        song.artist.toLowerCase().includes(input)
    );

    // Display results
    if (filteredSongs.length > 0) {
        filteredSongs.forEach(song => {
            const songElement = document.createElement('div');
            songElement.classList.add('song-result');
            songElement.innerHTML = `<strong>${song.title}</strong> by ${song.artist}`;
            resultsContainer.appendChild(songElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found</p>';
    }
}
