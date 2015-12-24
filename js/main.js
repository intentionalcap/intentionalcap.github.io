
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

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#team").owlCarousel({

  	      navigation : false, // Show next and prev buttons
          slideSpeed : 300,
  	      paginationSpeed : 400,
  	  });

  	  $("#clients").owlCarousel({

  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {

      $(document).ready(function() {
        $(".contact-submit").click(function() {
          debugger
          var name = $("contact-name").val();
          var organization = $("contact-organization").val();
          var position = $("contact-position").val();
          var email = $("contact-email").val();
          var subject = $("contact-subject").val();
          var message = $("contact-message").val();
          $("#form-messages").empty(); // To empty previous error/success message.
          // Checking for blank fields.
          if (name == '' || organization == '' || position == '' || email == '' || subject == '' || message == '') {
          alert("Please Fill All Required Fields");
          } else {
            debugger
            // Returns successful data submission message when the entered information is stored in database.
            $.post("contact_form.php", {
            name1: name,
            organization1: organization,
            position1: position,
            email1: email,
            message1: message,
            subject1: subject
          }, function(data) {
            debugger
            
              $("#form-messages").append(data); // Append returned message to message paragraph.
              if (data == "Your Query has been received, We will contact you soon.") {
                $(".contact-form")[0].reset(); // To reset form fields on success.
              }
            });
          }
        });
      });
        // var $container = $('#themes-boxes');
        // $container.isotope({
        //     filter: '*',
        //     animationOptions: {
        //         duration: 750,
        //         easing: 'linear',
        //         queue: false
        //     }
        // });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });
}());
}
main();
