// Built in p5.js
// Test here: https://editor.p5js.org/KryptonForce/sketches/HwJF9EdGJ
// Bar generation taken from p5.fft reference page.

var currentSong;
var currentFFT;

var smoothFactor = 0.9;
var barCount = 256

function setup() {
  createCanvas(500, 400);
  currentSong.play();
  currentFFT = new p5.FFT(smoothFactor, barCount);
  noStroke()
  colorMode(RGB, 255);
}

function preload(){
  currentSong = loadSound("currentSong.mp3");
}

function draw() {
  background(0);
  
  // rect: posX, posY, widthX, widthY
  
  var spectrum = currentFFT.analyze();
  var totalBars = spectrum.length;
  
  for(var count = 1; count < totalBars; count++){
    let xPos = (count / totalBars) * width;
    let barHeight = map(spectrum[count], 0, barCount, height, 0) - height;
    
    stroke(count, 150, 75);
    noFill();
    rect(xPos, height, width / totalBars, barHeight)
  }
}
