//Testimonials Carousel 
(function() {
    "use strict";

    var carousels = function() {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                680: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        });
    };

    (function($) {
        carousels();
    })(jQuery);
})();




//body add overflow hidden when the navbar is open on mobile screens 

$('.checkbtn').click(function() {
    $("body").toggleClass("fixedPosition");
});



$(document).ready(function() {

    var quantitiy = 0;
    $('.quantity-right-plus').click(function(e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        $('#quantity').val(quantity + 1);


        // Increment

    });

    $('.quantity-left-minus').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });

});






let goo = document.querySelectorAll('input[name="radio-3"]');
if (goo.length != 0) {
    goo.forEach(
        function(element, inx) {
            element.addEventListener('change', function() {

                if (inx == 2) {
                    document.getElementById('forminator-field-textarea-1').style.display = "block"
                } else {
                    document.getElementById('forminator-field-textarea-1').style.display = "none"
                }

            })
        }
    )
}