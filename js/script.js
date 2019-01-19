$(".icon").click(function(){
  target = $(this).data('target');
  $('#'+target).show();
  $('.current-window h2').text(target);
  $('.current-window').css('display', 'flex');
});

$(".close").click(function(){
  target = $(this).data('target');

  $('section.window').hide();
  $('.current-window').hide();
});

$(".start").click(function(){
  $('section.internet-broke').css('display', 'flex');
});

$("section.internet-broke").click(function(){
  $('section.internet-broke').css('display', 'none');
});
