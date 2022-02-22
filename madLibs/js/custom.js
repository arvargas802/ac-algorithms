

$(document).ready(function(){

    function makeMadLib() {
        var noun = $("#noun").val();
        var adjective = $("#adjective").val(); 
        var person = $("#person").val();
        $("#story").append( person + " really likes " +  adjective + " " + "" +  noun  + ".");
    }

    $("#lib-button").click(function(){
        makeMadLib();        
    });


});