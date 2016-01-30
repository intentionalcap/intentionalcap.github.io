
function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 800);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 250;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 250) {
             $('.navbar-default').addClass('on');
         }
         else {
             $('.navbar-default').removeClass('on');
         }
    });

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {

      $(document).ready(function() {
        function sendEmail () {
          $.ajax({
            url: "//formspree.io/info@intentionalcap.com",
            method: "POST",
            data: {
              name: $('.contact-name').val(),
              organization: $('.contact-organization').val(),
              position: $('.contact-position').val(),
              email: $('.contact-email').val(),
              subject: $('.contact-subject').val(),
              message: $('.contact-message').val(),
            },
            dataType: "json",
            success: function (a, b, c) {
              $('.contact-organization').val('');
              $('.contact-position').val('');
              $('.contact-email').val('');
              $('.contact-subject').val('');
              $('.contact-message').val('');
              alert('Thank you, '+ $('.contact-name').val() +', for your message.')
              $('.contact-name').val('');
            }
          });
        }

        $(".contact-form").submit(function(e) {
          e.preventDefault();

          if ( $('.contact-name').val() == '' ||
               $('.contact-organization').val() == '' ||
               $('.contact-position').val() == '' ||
               $('.contact-email').val() == '' ||
               $('.contact-subject').val() == '' ||
               $('.contact-message').val() == '') {
                 alert('Please fill out all required fields')
               } else {
                 sendEmail();
               }
        });
      });

    });
}());
}
main();
