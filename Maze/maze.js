$(function () {
   
    $('#start').on("click",function () {
        const $newbounderies = $("#maze .boundary");
        const $current = $('#status');
        const $maze = $('#maze');
        $current.text("you start Playing");

             $('#end').on("mouseenter",function () {
            if ($newbounderies.hasClass('youlose')) {
                $current.text("You failed");
            } else {
                $current.text("You won the game");
                $newbounderies.addClass('youwin');
            }
            $newbounderies.off('mouseenter');
            $maze.off('mouseleave');
        });

        $newbounderies.mouseenter(function () {
            $newbounderies.addClass('youlose');
        });

        $maze.mouseleave(function () {
            $newbounderies.addClass('youlose');
        });

    });
});

