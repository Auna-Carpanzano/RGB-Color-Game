/*globals $:false */
var numOfSquares = 6;
var colors = [];
var squares = $(".square");
var pickedColor;

init();

function init() {
  setupSquares();
  setupModeButtons();
  reset();
}

function setupModeButtons() {
  $(".mode").on("click", function () {
    $(".mode").first().removeClass("selected");
    $(".mode").last().removeClass("selected");
    $(this).addClass("selected");
    $(this).text() === "Easy" ? numOfSquares = 3: numOfSquares = 6;
    reset();
  });
}

$("#reset").on("click", function() {
	reset();
});

function reset() {
  colors = getRandomColors(numOfSquares);
  pickedColor= pickColor();
  $("#colorDisplay").text(pickedColor);
  $("#message").text("");
  $("#reset").text("New Colors");
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display= "block";
      squares[i].style.backgroundColor= colors[i];
    } else {
      squares[i].style.display= "none";
    }
  }
  $("h1").css("background", "black");
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
  return colors[randomNum];
}

function setupSquares(){
  $(".square").on("click", function(){
    var clickedColor= this.style.backgroundColor;
    if (clickedColor === pickedColor){
      $("#message").text("Correct!");
      $("#reset").text("Play again?");
      changeColors(clickedColor);
      $("h1").css("background", clickedColor);
    }
    else {
      this.style.background= "black";
      $("#message").text("Try again!");
    }
  });
}

function changeColors(color){
 $(".square").css("background", color);
}
