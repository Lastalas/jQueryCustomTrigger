$(function (){
    $('input').change(function (e){
        $('#saveWarning').trigger ('changeMade');
    });
    
    $('#saveMe').click(function (){
        $('#saveWarning').trigger ('changeSaved'); 
    });
    
    $('#saveWarning').on('changeMade', function (){
        $('#saveWarning').show();
    });
    
    $('#saveWarning').on('changeSaved', function (){
        $('#saveWarning').hide();
    });
});