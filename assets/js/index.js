$(document).ready(function () {
    $(".menu-icon").click(function () {
      $("body").addClass("menuToggle");
    });
    $(".close-icon").click(function () {
      $("body").removeClass("menuToggle");
    });
  });



  $(window).scroll(function(){
    if ($(window).scrollTop() >=50) {
        $('header').addClass('fixed-header');
        $('header').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('header').removeClass('visible-title');
    }
});

  $('.subpage-readmore-btn').click(function(e) {
    e.preventDefault();
    // console.log('click');
    $(this).parent().prev().slideToggle('slow');
    // $('.subpage-exp-content').slideToggle('slow');
    $(this).text($(this).text() == 'Read Less' ? 'Read More' : 'Read Less');
    });



    $(document).ready(function () {
      //toggle the component with class accordion_body
      $(".accordion_head").click(function () {
          if ($('.accordion_body').is(':visible')) {
              $(".accordion_body").slideUp(300);
              $(".plusminus").text('+');
          }
          if ($(this).next(".accordion_body").is(':visible')) {
              $(this).next(".accordion_body").slideUp(300);
              $(this).children(".plusminus").text('+');
          } else {
              $(this).next(".accordion_body").slideDown(300);
              $(this).children(".plusminus").text('-');
          }
      });
  });