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
