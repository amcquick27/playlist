// Complete Day 1 goals here
let mySongs = ["WISH", "Butterflies", "Nights"];
let songArtists = ["Denzel Curry", "MAX", "Frank Ocean"];
let songImages = [
  "<img src='https://images.genius.com/86e21c57ddf05f2cf02a69f8a77255d3.300x300x1.png'/>",
  "<img src='https://images.genius.com/77586a887ddbcb821c4c8b42d9e9770c.1000x1000x1.png'/>",
  "<img src='https://images.genius.com/626ddf4c88de200d9487bb42449d1ae3.1000x1000x1.png'/>",
];
let songLinks = [
  "<a href='https://youtu.be/pEZDFv6DNQU'>Link</a>",
  "<a href='https://www.youtube.com/watch?v=Sa7jhh5_dQQ'>Link</a>",
  "<a href='https://www.youtube.com/watch?v=r4l9bFqgMaQ'>Link</a>",
];

function displaySongInfo() {
  mySongs.forEach(function (song) {
    $(".songs").append("<p>" + song + "</p>");
  });
  songArtists.forEach(function (artist) {
    $(".artists").append("<p>" + artist + "</p");
  });
  songImages.forEach(function (picture) {
    $(".images").append("<p>" + picture + "</p>");
  });
  songLinks.forEach(function (link) {
    $(".links").append("<p>" + link + "</p>");
  });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

/*The code segment below is for the objects, day 4 goals. This takes the information I had stored in my arrays and groups them.
Titles is the name of each song in my playlist. Each item of the array "titles" has properties which stores each song information*/

let titles = ["song1","song2","song3"]
 let song1 = {
  song_name: "Wish",
  artist: "Denzel Curry",
  image: "<img src='https://images.genius.com/86e21c57ddf05f2cf02a69f8a77255d3.300x300x1.png'/>",
  watch_link: "<a href='https://youtu.be/pEZDFv6DNQU'>Link</a>"
 };
let song2 ={
  song_name:"Butterflies",
  artist: "Max",
  image: "<img src='https://images.genius.com/77586a887ddbcb821c4c8b42d9e9770c.1000x1000x1.png'/>",
  watch_link:"<a href='https://www.youtube.com/watch?v=Sa7jhh5_dQQ'>Link</a>"
};
let song3={
  song_name:"Nights",
  artist:"Frank Ocean",
  image:"<img src='https://images.genius.com/626ddf4c88de200d9487bb42449d1ae3.1000x1000x1.png'/>",
  watch_link:"<a href='https://www.youtube.com/watch?v=r4l9bFqgMaQ'>Link</a>" 
};

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$(".add").click(function () {
  emptySongInfo();
  let song = $(".title").val();
  mySongs.push(song);
  console.log(mySongs);
});

$(".add").click(function () {
  $(".songArists").empty();
  let artist = $(".artist").val();
  songArtists.push(artist);
  console.log(songArtists);

});

$(".add").click(function () {
  $(".songImages").empty();
  let image = $(".image").val();
  songImages.push(image);
  console.log(songImages);
});

$(".add").click(function () {
  $(".songLinks ").empty();
  let link = $(".link").val();
  songLinks.push(link);
  console.log(songLinks);
});

displaySongInfo(); 
