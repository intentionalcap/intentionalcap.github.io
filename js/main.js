
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

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })

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


/* global $, window */

$(function () {
    'use strict';

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: 'server/php/'
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

    if (window.location.hostname === 'blueimp.github.io') {
        // Demo settings:
        $('#fileupload').fileupload('option', {
            url: '//jquery-file-upload.appspot.com/',
            // Enable image resizing, except for Android and Opera,
            // which actually support image resizing, but fail to
            // send Blob objects via XHR requests:
            disableImageResize: /Android(?!.*Chrome)|Opera/
                .test(window.navigator.userAgent),
            maxFileSize: 999000,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
        });
        // Upload server status check for browsers with CORS support:
        if ($.support.cors) {
            $.ajax({
                url: '//jquery-file-upload.appspot.com/',
                type: 'HEAD'
            }).fail(function () {
                $('<div class="alert alert-danger"/>')
                    .text('Upload server currently unavailable - ' +
                            new Date())
                    .appendTo('#fileupload');
            });
        }
    } else {
        // Load existing files:
        $('#fileupload').addClass('fileupload-processing');
        $.ajax({
            // Uncomment the following to send cross-domain cookies:
            //xhrFields: {withCredentials: true},
            url: $('#fileupload').fileupload('option', 'url'),
            dataType: 'json',
            context: $('#fileupload')[0]
        }).always(function () {
            $(this).removeClass('fileupload-processing');
        }).done(function (result) {
            $(this).fileupload('option', 'done')
                .call(this, $.Event('done'), {result: result});
        });
    }

});
