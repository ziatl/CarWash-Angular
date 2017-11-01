(function ($) {
  "use strict";
  $(document).ready(function(){
$(window).load(function() {
  $("#mon_anim").click(function(){
    console.log("clique");
    $("#mon_div").animate({left: '250px'});
  });
}
)})
