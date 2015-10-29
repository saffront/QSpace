$(window).load(function(){
  $('body').addClass('loaded');
  $('h1').addClass('letter-spacing')
})

// function showDiv() {
//    document.getElementById('mainlibrary').style.display = "block";
// }

// function showDiv() {
//    document.getElementById('sciencelibrary').style.display = "block";
// }

// function showDiv() {
//    document.getElementById('archaeologylibrary').style.display = "block";
// }


jQuery(function(){
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).show();
        });
});