$(document).ready(function() {
    function truncateText(selector, maxLength) {
        $(selector + ' p').each(function() {
        var text = $(this).text(); 
        if (text.length > maxLength) { 
            $(this).text(text.substring(0, maxLength) + '...');
        }
        });
    }

    truncateText('.count_events', 55);
    truncateText('.count_announcements', 60);
});  