var i = 0;
var fin = false;
var timeout;

$(document).ready(function(){

    $("#buttonJourNuit").mousedown(function () { 
        $("#buttonJourNuit").addClass("ClickOn");
    });

    $("#buttonJourNuit").mouseup(function () { 
        $("#buttonJourNuit").removeClass("ClickOn");
    });

    $("#buttonJourNuit").click(clickLightDark);

    var today = new Date();
    today.setHours(21);

    if(today.getHours() >= 20)
        clickLightDark();
});

function clickLightDark()
{ 
    var tabCouleurNuit = ["#eedfb5","#ecd490","#e9c667","#a78e4c","#5a5139"];
    
    if ($("body").hasClass("Nuit"))
    {
        i = tabCouleurNuit.length-1;
        fin = false;
        timeout = setInterval(changeColorTimer, 80, tabCouleurNuit, false);
    }
    else
    {
        i = 0;
        fin = false;
        timeout = setInterval(changeColorTimer, 80, tabCouleurNuit, true);
    }
}

function changeColorTimer(tabColor, sensPlus)
    {
        if (i < tabColor.length && i >= 0 )
            $("body").css("background-color",tabColor[i]);
        else
            {
                $("body").css("background-color","");
                
                if (sensPlus == false)
                {
                    $("#buttonJourNuit").text("Mode Nuit");
                    $("title").text("Présentation (Bonjour)");
                    $("body").removeClass("Nuit");
                    $("header").removeClass("Nuit");
                    $("#buttonJourNuit").removeClass("Nuit");
                }
                else
                {
                    $("#buttonJourNuit").text("Mode Jour");
                    $("body").addClass("Nuit");
                    $("header").addClass("Nuit");
                    $("#buttonJourNuit").addClass("Nuit");
                    $("title").text("Présentation (Bonsoir)");
                }
                
                setTimeout(leClear, 1);
            }
        
        if (sensPlus == true)
            i++;
        else
            i--;
    }

    function leClear()
    {
        clearInterval(timeout);
    }