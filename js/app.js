// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function() {
    $('article:not(:first-child)').hide();

    $('a[href="#info"]').click(function() {
        $('#partners').hide();
        $("#past").hide();
        $('#contact').hide();
        $("#info").fadeIn(400);
        return false;

    });

    $('a[href="#past"]').click(function() {
        $('#info').hide();
        $('#partners').hide();
        $('#contact').hide();
        $('#past').fadeIn(400);
        return false;

    });

    $('a[href="#partners"]').click(function() {
        $('#info').hide();
        $('#past').hide();
        $('#contact').hide();
        $('#partners').fadeIn(400);
        return false;

    });

    $('a[href="#contact"]').click(function() {
        $('#info').hide();
        $('#past').hide()
        $('#partners').hide();
        $('#contact').fadeIn(400);
        return false;

    });
});
