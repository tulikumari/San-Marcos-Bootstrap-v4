(function($){
    $('#banner_scroll_top').click(function() {
        $('html, body').animate({
            scrollTop: $("#middle_sec").offset().top
        }, 700);
     });

	$("#page_scroll_top").click(function(){
        $('html, body').animate({scrollTop : 0},700); 
    })
})(jQuery);