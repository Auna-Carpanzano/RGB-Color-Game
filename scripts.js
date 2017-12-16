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

function reset() {
  colors = getRandomColors(numOfSquares);
}

function getRandomColors(num){
  var arr= [];
  for(var i=0; i < num; i++){
    arr.push(randomColor());
  }
}
