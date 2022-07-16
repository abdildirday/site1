$(document).ready(function () {
  $(".expand-btn").click(function () {
    console.log("okey");
    $(".expandable").toggleClass("hidden");
    if ($(".expandable").is(":visible")) {
      $(".expand-btn").html("Уменьшить");
    } else {
      $(".expand-btn").html("Расширить");
    }
  });
  $(".play-button").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
  $(".modal-close").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
});
