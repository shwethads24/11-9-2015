$(document).ready(function(){
    
    $('div').click(function(){
        
          $('div').hover(function(){
              
        $(this).addClass('red');
        });
    });

     $('div').dblclick(function(){
        $('name').fadeOut('slow');

        });
    });