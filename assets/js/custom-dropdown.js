jQuery(function() {
    /*$(".l1").hover(
      function () {
        $('#hosting_menu20Content ul.full li:first').addClass("hovered");
        $('#radio_menu20Content ul.full li:first').addClass("hovered");
      },
      function () {
        $('#hosting_menu20Content ul.full li:first').removeClass("hovered");
        $('#radio_menu20Content ul.full li:first').removeClass("hovered");
      }
    );*/
    jQuery(".hamburger").click(function(){
        jQuery('.menuTitle').not('.noL2').each(function(){
            jQuery(this).attr('data-href',jQuery(this).attr('href'));
        });
        jQuery('.menuTitle').not('.noL2').removeAttr('href');
        if(jQuery(this).hasClass('is-active'))
        {
            jQuery('.menuTitle, .title').removeClass('active');
            jQuery('.l3, .menu20Content').hide();
            jQuery('.menuTitle, .menu20 li').show();
        }
        jQuery(this).toggleClass("is-active");
        jQuery('.menu20').toggleClass("is-active");
        jQuery("#profileContainer").hide();
    });
});


    jQuery(".menu20 .menuTitle").not('.noL2').click(function(e){
        if (jQuery(window).width() < 992) {
            jQuery('.menuTitle').not('.noL2').removeAttr('href');
            let m20c = jQuery(this).next('.menu20Content');
            jQuery('.menu20Content, .l3').not(m20c).hide();
            jQuery(".menuTitle").not(this).parent().toggle();
            m20c.toggle();
            jQuery(this).toggleClass('active');
            jQuery('#header20 .menu20 .menu20Content .title').addClass('hidd');
           
            
        }
    });
    /*jQuery(".title").click(function(e){
        if (jQuery(window).width() < 1160) {

                jQuery('.title.active').not(this).next('.content').children('.l3').hide();
                jQuery('.title.active').not(this).removeClass('active');
                jQuery(this).toggleClass('active');
                jQuery(this).next('.content').children('.l3').toggle();
        }
    });*/
jQuery('.menuTitle').hover(function(e) {
       el = jQuery(this).next('.menu20Content').children('div').children('div').children('div').children('ul').children('li:nth-child(1)');
       el2 = jQuery(this).next('.menu20Content').children('div').children('div').children('div').children('ul').children('li:nth-child(1)').children('.title');
       el.addClass('hovered');
       el2.addClass('hovered');
    });
    jQuery('.title').hover(function(e) {
        jQuery('li,.title').removeClass('hovered');
    });
     jQuery('.menu20Content .content').hover(function(e) {
       jQuery(e.currentTarget).prev('.title').toggleClass("hovered");
    });

    jQuery('.menu20Content').hover(function(e) {
       jQuery(e.currentTarget).prev('.menuTitle').toggleClass("hovered");
    });
  
  jQuery( window ).resize(function() {
      jQuery("#profileContainer").hide();
      if (jQuery(window).width() < 992) {
      }else{
          /* jQuery('.active').removeClass('active'); */
            jQuery('.is-active').removeClass('is-active');
            jQuery('.hovered').removeClass('hovered');

            jQuery('.menuTitle').not('.noL2').each(function(){
                jQuery(this).attr('href',jQuery(this).data('href'));
            });

            jQuery('.menuTitle, .menu20 li, .l3').show();
            jQuery('.menu20Content').removeAttr('style');
      }
  });