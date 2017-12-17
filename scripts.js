/*globals $:false */
var numOfSquares = 6;
var colors = [];
var squares = $(".square");

function setupModeButtons() {
  $(".mode").on("click", function () {
    $(".mode").first().removeClass("selected");
    $(".mode").last().removeClass("selected");
    $(this).addClass("selected");
    $(this).text() === "Easy" ? numOfSquares = 3: numOfSquares = 6;
    reset();
  });
}

setupModeButtons();
reset();

$("#reset").on("click", function() {
	reset();
});

function reset() {
  colors = getRandomColors(numOfSquares);
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display= "block";
      squares[i].style.backgroundColor= colors[i];
    } else {
      squares[i].style.display= "none";
    }
  }
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

function pickColor(){
  var randomNum= Math.floor(Math.random() * colors.length);
}
