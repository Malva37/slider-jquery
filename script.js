$(document).ready(function () {
    let slidesArray = $('section');
    let slideActive;
    findActveSlide();
    function findActveSlide() {
        slidesArray.each(function (index, slide) {
            if ($(slide).hasClass("activeSection")) {
                slideActive = index;
                return;
            }
        })
    }
    $('.next').click(() => {
        if (slideActive == ($("section").length - 1)) {
            $("section").eq(slideActive).removeClass("activeSection");
            $(".dots>a").eq(slideActive).removeClass("active");
            slideActive = 0;
            $("section").eq(slideActive).addClass("activeSection");
            $(".dots>a").eq(slideActive).addClass("active");
        } else {
            $("section").eq(slideActive).removeClass("activeSection");
            $("section").eq(slideActive).next().addClass("activeSection")
            $(".dots>a").eq(slideActive).removeClass("active");
            $(".dots>a").eq(slideActive).next().addClass("active");
            slideActive++;
        }
    })
    $('.prev').click(() => {
        if (slideActive == 0) {
            $("section").eq(slideActive).removeClass("activeSection"); 
            $(".dots>a").eq(slideActive).removeClass("active");
            slideActive = ($("section").length - 1);
            $("section").eq(slideActive).addClass("activeSection");
            $(".dots>a").eq(slideActive).addClass("active");
        } else {
            $("section").eq(slideActive).removeClass("activeSection");
            $(".dots>a").eq(slideActive).removeClass("active");
            $("section").eq(slideActive).prev().addClass("activeSection");
            $(".dots>a").eq(slideActive).prev().addClass("active");
            slideActive--;
        }
    })
    $('.dots').on('click', 'a', function () {
        slideActive = $(this).index();
        $(".dot").removeClass("active");
        $(this).addClass("active");
        $("section").removeClass("activeSection");
        $("section").eq(slideActive).addClass("activeSection");
    });
})