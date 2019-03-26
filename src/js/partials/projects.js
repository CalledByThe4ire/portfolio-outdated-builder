$(function() {
    var $projects = $(
        ".pane--projects .pane__container > .list > .list__item"
    );
    $projects.filter(":even").css("background-color", "#ffd400");
    $projects.filter(":odd").css("background-color", "#e50000");
    $projects
        .filter(function(index) {
            if (index % 3 === 0) {
                return index + 1;
            }
        })
        .css("background-color", "#0091ff");
});
