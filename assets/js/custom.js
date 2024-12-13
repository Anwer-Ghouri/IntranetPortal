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
    $calendar = container.data('plugin_simpleCalendar');

    // Fancy Box 
    $(".photo_gallery a").fancybox();
}); 

// Temporary code 
const departTiles = document.querySelectorAll('.depart_tile');    
departTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      window.location.href = 'documents_library.html';
    });
});

// Slick slider 

$(document).ready(function(){
  function initSlick() {
    if ($(window).width() >= 320 && $(window).width() <= 991) {
      if (!$('.slick-slider').hasClass('slick-initialized')) {
        $('.slick-slider').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
          responsive: [
            {
              breakpoint: 991,
              settings: { slidesToShow: 4 }
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 3 }
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 2 }
            }
          ]
        });
      }
    } else {
      if ($('.slick-slider').hasClass('slick-initialized')) {
        $('.slick-slider').slick('unslick');
      }
    }
  }

  initSlick();
  $(window).resize(initSlick); // Reinitialize on window resize
});

// Tree view js
$(document).ready(function() {
  const openedClass = 'fa-angle-up'; 
  const closedClass = 'fa-angle-down';

  // Initialize each of the top levels
  $('.document_tree_view').addClass("tree");

  $('.document_tree_view').find('li').has("ul").each(function () {
    const branch = $(this);
    branch.prepend(`<i class='indicator fa ${closedClass}'></i>`)
          .addClass('branch')
          .on('click', function (e) {
            if (e.target === this) {
              const icon = $(this).children('i:first');
              icon.toggleClass(`${openedClass} ${closedClass}`);
              $(this).children().children().toggle();
            }
          });

    branch.children().children().toggle();
  });

  // Attach click event to the indicator icons
  $('.document_tree_view').find('.branch .indicator').on('click', function () {
    $(this).closest('li').click();
  });

  // Attach click event to anchors and buttons inside branches
  $('.document_tree_view').find('.branch').on('click', 'a, button', function (e) {
    $(this).closest('li').click();
    e.preventDefault();
  });

  // Initialize specific treeviews with different classes (if needed)
  $('#docTree').addClass("tree");
});