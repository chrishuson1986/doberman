$(function() {
  $(".clickable").click(function() {
    $(".initially-showing").slideToggle();
    $(".initially-hidden").slideToggle();
  });
  $("#clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
  });
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
  });
});
