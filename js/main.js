var text1 ="<dev>";

      $.each(text1.split(''), function(i, letter){

            //we add 100*i ms delay to each letter 
            setTimeout(function(){

                //we add the letter to the container
                $('#deva').html($('#deva').html() + letter);
            
            }, 400*i);
        });