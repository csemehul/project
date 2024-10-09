// Function to play the selected song
function playSong(songFile) {
    var audioPlayer = document.getElementById('audioPlayer');
    var audioSource = document.getElementById('audioSource');
    
    // Change the source of the audio player to the selected song
    audioSource.src = 'audio/' + songFile;
    audioPlayer.load(); // Reload the audio with the new source
    audioPlayer.play(); // Play the selected song
}

// Example function for the search functionality (can be expanded)
function searchSongs() {
    var searchInput = document.getElementById('searchInput').value;
    var searchResults = document.getElementById('searchResults');
    
    // For simplicity, assume you have a static array of songs for search demo
    var songs = ['Song 1', 'Song 2', 'Song 3', 'Song 4'];
    var result = songs.filter(song => song.toLowerCase().includes(searchInput.toLowerCase()));
    
    searchResults.innerHTML = result.length ? 'Results: ' + result.join(', ') : 'No results found.';
}
