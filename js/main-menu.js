var viewport = window.matchMedia('(max-width:999px)');
// matchMedia 는 모던 브라우저에서만 사용 가능, 구형에선 사용 불가능

// $(window).resize(function(){
//   location.reload();
//   // 윈도우가 리사이즈 될때마다 리로드해라, 성능 문제가 있어서 모바일에서만 사용 권장
// });

var items = $('.menu-item');
var nav = $('.navigation');
var btn = $('.btn-menubar');
var menu = $('.menu');
var lists = $('.menu-list');
var slogan = $('.slogan-heading');

if(viewport.matches) {
  items.addClass('icon-plus');
  items.attr('role', 'button');
  items.attr('aria-haspopup', 'true'); // 모바일에서만 사용
  items.attr('aria-pressed', 'false'); // 모바일에서만 사용
  items.attr('aria-expanded', 'false'); // 접혀진 상태
  slogan.addClass('a11y-hidden');

  btn.on('click', function(e){
    e.preventDefault();
    // a태그를 사용할때 기본 이벤트 취소되고 하위에 입력된 명령어 실행
    nav.toggleClass('is-act');
    if(nav.hasClass('is-act')) {
      // nav 요소가 is-act라는 내용을 가지고 있으면
      btn.attr('aria-label', '메인 메뉴 닫기'); // 속성 세팅
    } else {
      btn.attr('aria-label', '메인 메뉴 열기'); // 속성 세팅
    }
  });

  items.on('click', function(e){ // a 태그는 click 뿐만 아니라 enter도 먹힘
    e.preventDefault();
    lists.removeClass('menu-act');
    $(this).parent().addClass('menu-act');
    items.removeClass('icon-minus').addClass('icon-plus');
    $(this).removeClass('icon-plus').addClass('icon-minus');
    if(lists.hasClass('menu-act')){
      $(this).attr('aria-pressed', 'true').attr('aria-expanded', 'true');
    }else{
      items.attr('aria-pressed', 'false').attr('aria-expanded', 'false');
    }
  });

  menu.on('focusin', function(){
    nav.addClass('is-act');
  });
  menu.on('focusout', function(){
    nav.removeClass('is-act');
  });
} else {
  items.attr('role', 'presentation');
  items.attr('tabindex', '-1');
  items.on('click', function(e){
      e.preventDefault();
  });
}
