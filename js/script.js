// Complete Day 1 goals here
let mySongs=["WISH","Butterflies","Nights"];
let songArtists=["Denzel Curry","MAX","Frank Ocean"];
let songImages=[
  "<img= 'https://images.genius.com/86e21c57ddf05f2cf02a69f8a77255d3.300x300x1.png'/>",
  "<img= 'https://images.genius.com/77586a887ddbcb821c4c8b42d9e9770c.1000x1000x1.png'/>",
  "<img= 'https://images.genius.com/626ddf4c88de200d9487bb42449d1ae3.1000x1000x1.png'/>"
               ];
let songLinks=[
"<a href='https://youtu.be/pEZDFv6DNQU'></a>",
"<a href='https://www.youtube.com/watch?v=Sa7jhh5_dQQ'></a>",  
"<a href='https://www.youtube.com/watch?v=r4l9bFqgMaQ'></a>"   
];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
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

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
