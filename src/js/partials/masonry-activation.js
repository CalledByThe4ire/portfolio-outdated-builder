$(function() {
    $(".pane--projects .pane__container > .list").masonry({
        columnWidth: ".grid-sizer",
        gutter: ".gutter-sizer",
        itemSelector: ".grid-item",
        percentPosition: true
    });
});
