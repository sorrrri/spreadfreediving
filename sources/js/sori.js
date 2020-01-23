$(document).ready(function () {

    $("a, button, canvas, .slick-slider").on("mouseenter", function () {
        $(".segment").addClass("straighten");

    })

    $("a, button, canvas, .slick-slider").on("mouseleave", function () {

        $(".segment").removeClass("straighten");

    })

})