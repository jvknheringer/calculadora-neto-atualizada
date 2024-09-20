$(document).ready(function() {

    //$('#txt_display').mask('000\'000\'000\'000\'000', {reverse: true});
    
    var bt_nr = '';

$('.bt-nr').click(function() {
    
    var n = $(this).text();

     if( n =="0" ) {

         if( bt_nr.lenght > 0) {
            bt_nr = bt_nr.concat(n);
        
        
         }
     } else {

        bt_nt = bt_nr.concat(n);
     }

    bt_nr = bt_nr.concat(n);
    
      $('text_display').val(bt_nr)


});

});

