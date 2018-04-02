$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});

$(".plain").click(function() {
  $(this).toggleClass("off");
  $("#menu").slideToggle();
});