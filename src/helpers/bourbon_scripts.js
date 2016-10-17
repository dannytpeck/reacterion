/* globals $ */

// for using refills+jquery accordion tabs and modals
function bourbonScripts() {
  
	// Bourbon script for the CieAccordion
	$('.js-accordion-trigger').bind('click', function(e) {
		$(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
		$(this).parent().toggleClass('is-expanded');
		e.preventDefault();
	});	
	
  // for using refills+jquery accordion-tabs
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });

  // for navigation bar
  $(window).resize(function() {
    var more = document.getElementById('js-navigation-more');
    if ($(more).length > 0) {
      var windowWidth = $(window).width();
      var moreLeftSideToPageLeftSide = $(more).offset().left;
      var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

      if (moreLeftSideToPageRightSide < 330) {
        $('#js-navigation-more .submenu .submenu').removeClass('fly-out-right');
        $('#js-navigation-more .submenu .submenu').addClass('fly-out-left');
      }

      if (moreLeftSideToPageRightSide > 330) {
        $('#js-navigation-more .submenu .submenu').removeClass('fly-out-left');
        $('#js-navigation-more .submenu .submenu').addClass('fly-out-right');
      }
    }
  });
  
  $(document).ready(function() {
    var menuToggle = $('#js-mobile-menu').unbind();
    $('#js-navigation-menu').removeClass('show');

    menuToggle.on('click', function(e) {
      e.preventDefault();
      $('#js-navigation-menu').slideToggle(function() {
        if ($('#js-navigation-menu').is(':hidden')) {
          $('#js-navigation-menu').removeAttr('style');
        }
      });
    });
  });

  // for dropdown menu
  $(document).ready(function() {
    $('.dropdown-button').click(function() {
      var $button, $menu;
      $button = $(this);
      $menu = $button.siblings('.dropdown-menu');
      $menu.toggleClass('show-menu');
      $menu.children('li').click(function() {
        $menu.removeClass('show-menu');
        $button.html($(this).html());
      });
    });
  }); 
  
}

export default bourbonScripts;
