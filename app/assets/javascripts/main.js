$(window).load(function(){
  $('body').addClass('loaded');
  $('h1').addClass('letter-spacing')
})

jQuery(function(){
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).show();
        });
});

