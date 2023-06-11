jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
   
    /*======= Collapse Work Experience *=======*/
	$('.collapse')
        .on('shown.bs.collapse', function () {
            $(this).parent().find(".fa-plus")
                    .removeClass("fa-plus")
                    .addClass("fa-minus");
        })
        .on('hidden.bs.collapse', function () {
            $(this).parent().find(".fa-minus")
                    .removeClass("fa-minus")
                    .addClass("fa-plus");
        });

    $('.material-button-toggle').click(function () {
        $(this).toggleClass('open');
        $('.option').toggleClass('scale-on');
    });
	var causeRepaintsOn = $('.score-text');
	
});	