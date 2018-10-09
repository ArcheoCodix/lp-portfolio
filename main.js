$(function(){
    $("#buttonJourNuit").mousedown(function () { 
        $("#buttonJourNuit").addClass("ClickOn");
    });

    $("#buttonJourNuit").mouseup(function () { 
        $("#buttonJourNuit").removeClass("ClickOn");
    });

    $("#buttonJourNuit").click(function () { 
        if ($("body").hasClass("Nuit"))
        {
            $("#buttonJourNuit").text("Mode Nuit");
            $("body").removeClass("Nuit");
            $("header").removeClass("Nuit");
        }
        else
        {
            $("#buttonJourNuit").text("Mode Jour");
            $("body").addClass("Nuit");
            $("header").addClass("Nuit");
        }
    });

});

