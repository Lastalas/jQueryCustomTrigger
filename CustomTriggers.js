$('#inputField').change(function (){
    $(this).trigger ('changesMade'); 
});

$('#saveMe').click(function (){
    $(this).trigger ('changeSaved'); 
});

$('body').on('changesMade', function (){
    $('#saveWarning').show();
});

$('body').on('changeSaved', function (){
    $('#saveWarning').hide();
});