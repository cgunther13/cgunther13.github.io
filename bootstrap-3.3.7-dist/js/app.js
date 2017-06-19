var main = function() {
  // $(document).resize(function() {
    if ($(document).width() < 768) {
      $('.menu li').click(function() {
        $('.menu li').hide();
        $('.menu-tab').fadeIn(1000);

        $('.links').hide();
        $('.links-tab').fadeIn(1000);

        var currentSlide = $('.active-slide');
        currentSlide.hide().removeClass('active-slide');
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
        $('.active-slide').hide().removeClass('active-slide');
        $('.home').fadeIn(1000).addClass('active-slide');
      });

      $('.menu-tab').click(function() {
        $('.menu-tab').hide();
        $('.menu li').fadeIn(1000);
        $('.links-tab').hide();
        $('.links').hide();
      });

      $('.links-tab').click(function() {
        $('.links-tab').hide();
        $('.links').fadeIn(1000);
      });
    } else {
      $('.menu li').click(function() {
        var currentSlide = $('.active-slide');
        currentSlide.hide().removeClass('active-slide');
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
        $('.active-slide').hide().removeClass('active-slide');
        $('.home').fadeIn(1000).addClass('active-slide');
      });
    }
  // }
};

$(document).ready(main);
