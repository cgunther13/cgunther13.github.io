var main = function() {
  $('li').click(function() {
    var currentSlide = $('.active-slide');
    currentSlide.fadeOut(100).removeClass('active-slide');
    var slide = $(this).text();
    if(slide === "About Me") {
      $('.about-me').fadeIn(1000).addClass('active-slide');
    } else if (slide === "Experience") {
      $('.experience').fadeIn(1000).addClass('active-slide');
    } else if (slide === "Projects") {
      $('.projects').fadeIn(1000).addClass('active-slide');
    } else if (slide === "Contact") {
      $('.contact').fadeIn(1000).addClass('active-slide');
    }
  });

  $('.initials').click(function() {
    $('.active-slide').fadeOut(100).removeClass('active-slide');
    $('.home').fadeIn(1000).addClass('active-slide');
  });
};

$(document).ready(main);
