// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Stop Tryna Be God", artist: "Travis Scott", genre: "Hip-Hop" },
    // Feel free to add even more songs
    { title: "Aura", artist: "Mariah the Scientist", genre: "R&B" },
    { title: "Polar Opposites", artist: "Drake", genre: "Hip-Hop" },
    { title: "Birds of a Feather", artist: "Billie Eilish", genre: "Pop" },
    { title: "The Morning", artist: "Rimon", genre: "R&B" },
    { title: "DUCKWORTH", artist: "Kendrick Lamar", genre: "Hip-Pop" },
    { title: "Highlights", artist: "Kanye West", genre: "Hip-Hop" },
    { title: "Girl NextDoor", artist: "Tyla", genre: "Pop" },
    { title: "Born Sinner", artist: "J.Cole", genre: "Hip-Hop" }

];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Hip-Hop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const playlistsDiv = document.getElementById("playlists");

    // Use Object.keys(guardians) to get the array of guardian names and map() over it
    Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];

        // Filter songs based on guardian's preferred genre
        const playlist = songs.filter(song => song.genre === preferredGenre);

        // Create a playlist container for each guardian
        const guardianDiv = document.createElement("div");
        guardianDiv.classList.add("playlist");

        // Add the Guardian's name
        const guardianName = document.createElement("h2");
        guardianName.textContent = `${guardian}'s Playlist`;
        guardianDiv.appendChild(guardianName);

        // Use map() to create the song elements for each song in the playlist
        playlist.map(song => {
            const songDiv = document.createElement("div");
            songDiv.classList.add("song");
            
            const songTitle = document.createElement("p");
            songTitle.classList.add("song-title");
            songTitle.textContent = `${song.title} - ${song.artist}`;
            
            songDiv.appendChild(songTitle);
            guardianDiv.appendChild(songDiv);
        });

        // Append the guardian's playlist to the main playlists div
        playlistsDiv.appendChild(guardianDiv);

    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);




