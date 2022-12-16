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