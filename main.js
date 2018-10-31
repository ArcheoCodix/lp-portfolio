var i;
var timeout;
var isNuit = false;

$(document).ready(function(){

    var today = new Date();
    var bornDay = new Date(1996,9,6);

    $("#todayAge").text("("+diff_years(today,bornDay)+" ans)");

    $(".buttonJourNuit").mousedown(function () { 
        $(".buttonJourNuit").addClass("ClickOn");
    });

    $(".buttonJourNuit").mouseup(function () { 
        $(".buttonJourNuit").removeClass("ClickOn");
    });

    $(".buttonJourNuit").click(clickLightDark);

    setInterval(surveyHour, 60000);
});

function clickLightDark()
{ 
    let tabCouleurNuit = ["#eedfb5","#ecd490","#ceb36b","#a7925a","#5a5139"];
    
    isNuit = !isNuit;
    console.log(isNuit);
    
    $(".buttonJourNuit").hide();

    if ($("body").hasClass("Nuit"))
    {
        i = tabCouleurNuit.length-1;
        isNuit = false;
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
            $(".buttonJourNuit").text("Mode Nuit");
            $("body").removeClass("Nuit");
            $("header").removeClass("Nuit");
            $(".buttonJourNuit").removeClass("Nuit");
            $(".bottomBar").removeClass("Nuit");
            $("title").text("Présentation (Bonjour)");
        }
        else
        {
            $(".buttonJourNuit").text("Mode Jour");
            $("body").addClass("Nuit");
            $("header").addClass("Nuit");
            $(".buttonJourNuit").addClass("Nuit");
            $(".bottomBar").addClass("Nuit");
            $("title").text("Présentation (Bonsoir)");
        }
        
        setTimeout(leClear, 1);
    }
    
    if (sensPlus == true)
        i++;
    else
    {
        $("header").removeClass("Nuit");
        i--;
    }
}

function leClear()
{
    $(".buttonJourNuit").show();
    clearInterval(timeout);
}

function surveyHour()
{
    let today = new Date();
    let hour = today.getHours();

    if(hour >= 20 || hour >= 0 && hour < 9)
    {
        if (isNuit === false)
            clickLightDark();
    } else if(hour >= 9)
    {
        if (isNuit === true)
            clickLightDark();
    }

}

function diff_years(dt2, dt1) 
{
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff/365.25));
}

