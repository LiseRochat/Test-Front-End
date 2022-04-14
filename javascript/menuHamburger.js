function menuHamburger(){
  let isMenuburgerOpen = false;
  $('header button').on('click',function(){
      // $('header nav ul').slideToggle();
      $('header nav ul').animate({
          'height':'toggle',
          'width':'toggle',
          'opacity':'toggle'
      },300);
      if(!isMenuburgerOpen){
          $('header button img').attr('src','images/hamburger-on.png');
          isMenuburgerOpen = true;
      } else {
          $('header button img').attr('src','images/hamburger-off.png');
          isMenuburgerOpen = false;
      }
  })
}
menuHamburger();