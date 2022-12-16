
$(document).ready(function () {
    const nav = document.querySelector('nav');
    const a = document.querySelectorAll('ul a');
    window.onscroll = function () {
        var top = window.scrollY;
        for (let index = 0; index < a.length; index++) {
            if (top >= 50) {
                nav.classList.add('activeScroll_nav');
                a[index].classList.add('activeScroll_link');
            } else {
                nav.classList.remove('activeScroll_nav');
                a[index].classList.remove('activeScroll_link');
            }
        }
    }

    const preloaderDone = setTimeout(bodyOverflow, 5000);
    const body = document.querySelector('body');
    body.classList.add('preloading');
    function bodyOverflow() {
        body.classList.remove('preloading');
    }

    $(window).on("load", function () {
        $(".preloader-web").delay(5000).fadeOut(500);
    });


    setTimeout(function () {
        document.getElementById("video_background").play();
        console.log('start video disini');
    }, 5000);



    //punya home
    var audio = document.getElementById("music_background");
    audio.volume = 0.3;

    var x = true;

    $(".sound-control").click(function () {
        if (x) {
            $(".sound-control .fa").removeClass("fa-play");
            $(".sound-control .fa").addClass("fa-pause");
            $("audio").trigger("play");
            x = false;
        } else {
            $(".sound-control .fa").addClass("fa-play");
            $(".sound-control .fa").removeClass("fa-pause");
            $("audio").trigger("pause");
            x = true;
        }
    })
});
