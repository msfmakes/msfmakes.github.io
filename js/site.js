$('.projectcard_title > a').hover(function(eventObj) {
        let par = $(this).parent().parent();
        par.find('.projectcard_title a').css('text-decoration-color','#000');
      }, function() {
        let par = $(this).parent().parent();
        par.find('.projectcard_title a').css('text-decoration-color','#ccc');
      });
