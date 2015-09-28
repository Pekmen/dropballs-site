$(document).ready(function(){
    

// =Hero
// Alway make hero-container height equal to window height
 
var $heroContainer = $('.hero');
 
$heroContainer.height(window.innerHeight);
 
// When user resize browser window, hero container needs to have the same
// height as browser window height.
 
$(window).resize(function() {
  $heroContainer.height(window.innerHeight);
});


});