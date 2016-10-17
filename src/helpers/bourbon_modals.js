/* globals $ */

// for using refills+jquery modals
function bourbonModals() {

  // for modal popup
  // modal-add-image
  $(function() {
    $('#modal-add-image').on('change', function() {
      if ($(this).is(':checked')) {
        $('body').addClass('modal-open');
      } else {
        $('body').removeClass('modal-open');
      }
    });
    
    $('.modal-fade-screen, .modal-close').on('click', function() {
      $('.modal-state:checked').prop('checked', false).change();
    });
    
    // TODO: ADD PROPER CODE FOR SAVING
    $('.save-button').on('click', function() {
      $('.modal-state:checked').prop('checked', false).change();
    });

    $('.modal-inner').on('click', function(e) {
      e.stopPropagation();
    });
  });

  // modal-add-user
  $(function() {
    $('#modal-add-user').on('change', function() {
      if ($(this).is(':checked')) {
        $('body').addClass('modal-open');
      } else {
        $('body').removeClass('modal-open');
      }
    });
    
    $('.modal-fade-screen, .modal-close').on('click', function() {
      $('.modal-state:checked').prop('checked', false).change();
    });
    
    $('.save-button').on('click', function() {
      $('.modal-state:checked').prop('checked', false).change();
    });

    $('.modal-inner').on('click', function(e) {
     e.stopPropagation();
    });
  });

  // modal-add-client
  $(function() {
    $('#modal-add-client').on('change', function() {
      if ($(this).is(':checked')) {
        $('body').addClass('modal-open');
      } else {
        $('body').removeClass('modal-open');
      }
    });
    
    $('.modal-fade-screen, .modal-close').on('click', function() {
      $('.modal-state:checked').prop('checked', false).change();
    });
    
    $('.save-button').on('click', function() {
      $('.modal-state:checked').prop('checked', false).change();
    });

    $('.modal-inner').on('click', function(e) {
      e.stopPropagation();
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

export default bourbonModals;
