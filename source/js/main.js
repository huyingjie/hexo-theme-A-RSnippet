/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

// Tooltip Init
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// responsive tables
$(document).ready(function() {
    $("table").each(function(){
      if ($(this).parent().get(0).tagName != 'FIGURE') {
        $(this).addClass("table table-responsive table-striped table-hover");
        $(this).find("th").addClass("text-center");
      }
    });
});

// responsive embed videos
$(document).ready(function () {
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
    $('img').addClass('img-responsive-center')
});

// whether a post
function isPages(attr){
    var currentBoolean = document.querySelector('.navbar.header-navbar').getAttribute(attr);
    if(currentBoolean === 'true'){return true;}
    return false;
}
/*
    scroll function
    3 parameters
        1. a DOM object
        2 a class for targeted object
        3 height when acctivated (optional. default: the height of the DOM)
*/
function scrollCheck(scrollTarget, toggleClass, scrollHeight){
    document.addEventListener('scroll',function(){
    var currentTop = window.pageYOffset;
        currentTop > (scrollHeight||scrollTarget.clientHeight)
        ?scrollTarget.classList.add(toggleClass)
        :scrollTarget.classList.remove(toggleClass)
    })
}



/*
* Steps
* 1. get the content of h1
* 2. scroll and appear fixed navbar
* 3. the content of h1 is shown center at the top of the page
* */

(function(){
    if (isPages('data-ispost')){
        var navbar = document.querySelector('.navbar-custom');
        var introHeader = document.querySelector('.intro-header').offsetHeight;
        var introHeader = introHeader > 597 ? introHeader : 500;
        var toc = document.querySelector('.toc-wrap');
        scrollCheck(toc,'toc-fixed',introHeader-60);
        // scrollCheck(navbar,'is-fixed');
    }
})();
