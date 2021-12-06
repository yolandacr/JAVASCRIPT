
    
    

    $('.checkbox').click(function(){
        if ($('input.checkbox').is(':checked')) {
            alert("seleccionado");
            $(".theme").attr("href", "dark.css");
        }else{
            alert("No seleccionado");
        $(".theme").attr("href", "light.css");
        }
        });



