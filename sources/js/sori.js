$(document).ready(function () {
    $(window).scroll(function () {

        const currentScroll = $(this).scrollTop();
        const ypos = window.pageYOffset;
        
        if (currentScroll > 100) {
            $("header").addClass("active");
        }
        if (currentScroll < 100) {
            $("header").removeClass("active");
        }



        //parallax
        if (currentScroll > $("section.about").offset().top) {
            $(".parallax-text").css("transform", "translateX(" + ypos * -.5 + "px)");
            $(".parallax-text-02").css("transform", "translateX(" + ypos * .5 + "px)");
        }
    })
})