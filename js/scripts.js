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


// Menu initialization
 
var $menuIcon = $('.menu-icon'),
    $navigation = $('.navigation'),
    $mainNavigation = $('.main-navigation'),
    $navigationLink = $('.main-navigation a');
 
$(window).scroll(function() {
  if(window.scrollY > window.outerHeight) {
    $menuIcon.addClass('active');
  } else {
    $menuIcon.removeClass('active');
  }
});
 
$menuIcon.click(function(e) {
  e.preventDefault();
 
  $navigation.toggleClass('active');
});
 
$mainNavigation.singlePageNav({
    filter: ':not(.external)',
    speed: 1000,
    currentClass: 'current',
    easing: 'swing',
    updateHash: false,
    beforeStart: function() {
    },
    onComplete: function() {
      $navigation.removeClass('active');
    }
});


// FAQ handling


$('#faq .question').on('click', function() {
    
    var $currentAnswer = $(this).next();

    if ($currentAnswer.hasClass('active')) {
        $currentAnswer.slideUp('300', function() {
            $(this).removeClass('active');
        });
    }
    else {
        $("#faq").find('.answer.active').slideUp('300', function() {
            $(this).removeClass('active');
        });
        $currentAnswer.slideDown('300', function() {
            $(this).addClass('active');
        });
    }
});

});