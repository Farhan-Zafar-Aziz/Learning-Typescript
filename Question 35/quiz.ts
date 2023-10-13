// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name: string, album_title: string) {

    const album1 = {
        title: "Aesthetic",
        artist: "Farhan",
        album: ["Song1", "song2", "song3", "song4"]
    }

    if (artist_name == album1.artist && album_title == album1.title) {
        console.log(album1);

    }

}
make_album("Farhan", "album1");

function albums(title: string, artist: string) {
    const album2 = {
        title: "Motivational",
        artist: "Farhan",
        album: ["Song1", "song2", "song3", "song4"]
    }
    const album3 = {
        title: "Simplicity",
        artist: "Farhan",
        album: ["Song1", "song2", "song3", "song4"]
    }
    const album4 = {
        title: "Loneless",
        artist: "Farhan",
        album: ["Song1", "song2", "song3", "song4"]
    }

    if (title == album2.title && artist == album2.artist) {
        console.log(album2);

    } else if (title == album3.title && artist == album3.artist) {
        console.log(album3);

    } else if (title == album4.title && artist == album4.artist) {
        console.log(album4);

    }

} 
albums("Motivational","Farhan");
albums("Simplicity","Farhan");
albums("Loneless","Farhan");

function make_new_album(songs: string[]) {
    let new_album = {
        title: "Hapiness",
        artist: "Farhan",
        songs: songs,
    };
  console.log(new_album);
  
}
make_new_album(["song1","song2","song3","song4"]);