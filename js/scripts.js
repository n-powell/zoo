$(document).ready(function(){
  $('.fact-top').click(function(){
    $("#initially-hidden").slideToggle(800);
    $("#initially-shown").toggle();
  }
  );
  $("#fact-eti").click(function(){
    $("#fact-eti + p").slideToggle();
  });
  $("#fact-culture").click(function(){
    $("#fact-culture + p").slideToggle();
  });
});
