$(function(){

/* wow
------------------------------------------------- */
new WOW().init();

/* drawer
------------------------------------------------- */
var icon = $('.nav-icon');
var close = $('.nav-close');
var link = $('.nav').find('a');

icon.on('click', function() {
  $('body').toggleClass('_open');
});
close.add(link).on('click', function() {
  if ($('body').hasClass('_open')) {
    $('body').toggleClass('_open');
  }
});

/* スムーススクロール
------------------------------------------------- */
$('a[href^="#"]').click(function() {
    let header = $('header').innerHeight();
    let speed = 300;
    let id = $(this).attr('href');
    let target = $('#' == id ? 'html' : id);
    let position = $(target).offset().top - header;
    $('html, body').animate(
        {
        scrollTop: position
        },
        speed
    );
return false;
});


});