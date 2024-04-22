//adapted from Mappa tutorial
//for more, see: https://mappa.js.org/docs/simple-map.html

// Options for map
const options = {
  lat: 51.32997,  //initial latitude
  lng: -0.41133,  //initial longitude
  zoom: 10, //initial zoom level - 10 shows all locations 
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' //where we are getting our map tiles from
}

// Create an instance of Leaflet
const mappa = new Mappa('Leaflet');

//we use myMap to refer to the world map displayed on our canvas
let myMap;

//we need to treat our canvas a bit differently than usual when working with maps
let canvas;

function setup() {
  // Create our canvas element, and store its reference 
  canvas = createCanvas(500, 500);
  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas); // overlay the canvas on the map
}

function draw(){
  //refreshing the canvas every frame
  clear();

  //this takes a lat/long coordinate, and conveniently gives us back a 'pos' object
  //the pos object has an 'x' and 'y' property, giving us the relative point on our canvas
  let pos = myMap.latLngToPixel(51.236221, -0.570409); //Guildford
  let pos2 = myMap.latLngToPixel(51.316772, -0.560035);//Woking
  let pos3 = myMap.latLngToPixel(51.232910,-0.329740); //Dorking
  let pos4 = myMap.latLngToPixel(51.431480, -0.515525); //Staines 

  //DOTS ON THE MAP
  noFill();
  stroke(5);
  ellipse(pos.x, pos.y, 15, 15); //draw an ellipse at the desired coordinate - number changes the size of the dot.
  ellipse(pos2.x, pos2.y, 15, 15);
  ellipse(pos3.x, pos3.y, 15, 15);
  ellipse(pos4.x, pos4.y, 15, 15);

  //TEXT ON THE MAP 
  fill(0);
  textSize(20);
  textFont('Arial') //changes the font on the map.
  text('   Guildford', pos.x, pos.y-5) //a label with slight y-offset 
  text('   Woking',pos2.x, pos2.y-5);
  text('   Dorking',pos3.x, pos3.y-5);
  text('   Staines',pos4.x, pos4.y-5);
}

function windowResized() {
  resizeCanvas(windowWidth - 300, windowHeight);
}



//TO DO: 
//MAKE A SPACE TO THE RIGHT OF THE MAP, WHERE OUR INFORMATION WILL BE HELD.
//CREATE THE ELLIPSES AS BUTTONS
//MAKE THE BUTTONS LEAD TO THE INDIVIDUAL PAGES - HAVE THE PAGES APPEAR ON THE RIGHT SIDE OF THE MAP.
//HAVE AN INTRODUCTION APPEAR ON THE RIGHT SIDE OF THE MAP IN THE BEGINNING, THIS WILL TELL THE READER ABUOT WHAT IS
//BEING TOLD - SCHOOLS AND CRIME IN SURREY.
