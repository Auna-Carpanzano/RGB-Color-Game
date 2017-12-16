/*globals $:false */
var numOfSquares = 6;
var colors = [];

function setupModeButtons() {
  $(".mode").on("click", function () {
    $(".mode").first().removeClass("selected");
    $(".mode").last().removeClass("selected");
    $(this).addClass("selected");
  });
}

setupModeButtons();
reset();

function reset() {
  colors = getRandomColors(numOfSquares);
}

function getRandomColors(num){
  var arr= [];
  for(var i=0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r= Math.floor(Math.random() * 256);
  var g= Math.floor(Math.random() * 256);
  var b= Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
