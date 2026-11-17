console.log("Starting Spotify codes...");
console.log(module);

const Module = {
    songList: [],
    // Outputs the array of songs the listener has on their list. By default shown in added order.
    functionList() {
        return this.songList;
    },
    // Adds the song to the list (And checks if it is inserted as a String)
    functionAddSong(song) {
        if (typeof song === 'string') {
            return this.songList.push(song);
        }
        else {
            console.log("Not a string! Please insert your song as a string!");
        };
    },
    // Removes the song selected via index
    functionRemoveSong(index) {
        return this.songList.splice(index, 1);
    },
    // Changes the song in the specified index
    functionChangeSong(song, index) {
        return this.songList[index] = song;
    },
    // Shuffles the song list using the Fisher-Yates shuffle algo.
    // Note: Does not properly function as intended before using functionRemoveSong() or functionChangeSong()!
    functionShuffleList() {
        for (let i = this.songList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.songList[i], this.songList[j]] = [this.songList[j], this.songList[i]];
        }
        return this.songList;
    },
}

module.exports = Module;