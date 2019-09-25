var nav = $('.navigation');
var btn = $('.btn-menubar');
var items = $('.menu-item');

items.addClass('icon-plus');
items.attr('role', 'button');

btn.on('click', function(e){
  nav.toggleClass('is-act');
});