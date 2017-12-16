/*globals $:false */

function setupModeButtons() {
  $(".mode").on("click", function () {
    $(".mode").first().removeClass("selected");
  });
}

setupModeButtons();
