$(document).ready(function () {
    $(window).scroll(function () {

        const currentScroll2 = $(this).scrollTop();
        const ypos = window.pageYOffset;
        
        if (currentScroll2 > 100) {
            $("header").addClass("active");
        }
        if (currentScroll2 < 100) {
            $("header").removeClass("active");
        }
    })
})