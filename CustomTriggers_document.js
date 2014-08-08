$(function (){
    $(document).change(function (e){
        if (e.target.type === 'text'){ 
            $(this).trigger ('changeMade');
        }
    });
    
    $('#saveMe').click(function (){
        $(this).trigger ('changeSaved'); 
    });

    $(document).on('changeMade', function (){
        $('#saveWarning').show();
    });
    
    $(document).on('changeSaved', function (){
        $('#saveWarning').hide();
    });
});