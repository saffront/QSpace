$(window).load(function(){
  $('body').addClass('loaded');
  $('h1').addClass('letter-spacing')
})

jQuery(function(){
        jQuery('.showSingle').mouseenter(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).show();
        });
        jQuery('.showSingle').mouseleave(function(){
        	jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).hide();
        });
});

