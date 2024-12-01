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

    // ======== Calendar 

    var $calendar;

    let container = $("#my_calendar").simpleCalendar({
        fixedStartDay: 0, // begin weeks by sunday
        disableEmptyDetails: true,
        events: [
            // generate new event after tomorrow for one hour
            {
                startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
                endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
                summary: '"Jahsn-E-Azaadi" - 77th Independence Day of Pakistan.'
            },
            // generate new event for yesterday at noon
            {
                startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
                endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
                summary: 'Annual Picnic'
            },
            // generate new event for the last two days
            {
                startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
                endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
                summary: 'Visit of the Lahore office'
            }
        ],
    });
    $calendar = container.data('plugin_simpleCalendar')
}); 

$(".photo_gallery a").fancybox();

// Temporary code 
const departTiles = document.querySelectorAll('.depart_tile');    
departTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      window.location.href = 'documents_library.html';
    });
});