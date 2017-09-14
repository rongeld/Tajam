$(document).ready(function () {

     

$( "#loadMore" ).click(function() {
  $( "#moreContent" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});


    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.navbar a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.navbar a').each(function () {
            $(this).removeClass('active-active');
        })
        $(this).addClass('active-active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 820, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active-class");
            currLink.addClass("active-class");
        }
        else{
            currLink.removeClass("active-class");
        }
    });
}

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
if(wScroll > $('#story').offset().top-75 && wScroll) {
    $('.navbar.navbar-expand-md').addClass('dark-header');
} else {
    $('.navbar.navbar-expand-md').removeClass('dark-header');
}
});

function removeDarkBG() {
    $('.navbar.navbar-expand-md').removeClass('dark-header');
}

$('.navbar-toggler').click(function () {
    if ( $('.navbar-collapse').hasClass('show') ) {
        setTimeout(removeDarkBG, 300);
    } else {
         $('.navbar.navbar-expand-md').addClass('dark-header');
    }
});

    var wScroll = $(this).scrollTop();
if(wScroll > $('#story').offset().top-75 && wScroll) {
    $('.navbar.navbar-expand-md').addClass('dark-header');
} else {
    $('.navbar.navbar-expand-md').removeClass('dark-header');
}

});