$(function(){
  $('.option').click(function() {
    $(this).toggleClass('active');
    if ($('.question.active').next('.question').length > 0) {
      setTimeout(function() {
        $('.question.active').removeClass('active').next('.question').addClass('active');
      },1000);
    } else {
      setTimeout(function() {
        $('.question.active').removeClass('active');
        $('#result').slideDown();
      }, 1000);

    }


  });
});
