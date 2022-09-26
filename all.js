/*start nav_left*/

$("#button").click(function() {
    $("#nav").animate({
        width: "40px"
    });
});
$("#button").dblclick(function() {
    $("#nav").animate({
        width: "200px"
    });
});

/*end nav_left*/

/*start nav_top*/
$("#button").click(function() {
    $("#nav1").animate({
        left: "70px"
    });
});
$("#button").dblclick(function() {
    $("#nav1").animate({
        left: "230px"
    });
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementById("span");
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "block";
        }
    } // search

/*end nav_top*/

/*start test1*/

//nav2---body_data
//nav4---edite
//nav5---edite1

$("#button").click(function() {
    $("#nav2").animate({
        left: "70px"
    });
}); //nav2---body_data

$("#button").dblclick(function() {
    $("#nav2").animate({
        left: "230px"
    });
}); //nav2---body_data

$("#button").click(function() {
    $("#nav4").animate({
        left: "70px"
    });
}); //nav4---edite

$("#button").dblclick(function() {
    $("#nav4").animate({
        left: "230px"
    });
}); //nav4---edite

$("#button").click(function() {
    $("#nav5").animate({
        left: "70px"
    });
}); //nav5---edite1

$("#button").dblclick(function() {
    $("#nav5").animate({
        left: "230px"
    });
}); //nav5---edite1

function myFunction() {
    var x = document.getElementById("nav4");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} //nav4---edite1

function myFunction1() {
    var x = document.getElementById("nav5");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} //nav5---edite1


DivContainer1 = document.getElementById("div-container");

function myFunction2() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    DivContainer1.appendChild(x);
} //---Add INPUT

/*end test1*/

/*start test4*/

function myFunction3() {
    var x = document.getElementById("nav7");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} //nav7--edit

function myFunction4() {
    var x = document.getElementById("nav6");
    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} //nav7--edit1

DivContainer1 = document.getElementById("div-container");

function myFunction5() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    DivContainer1.appendChild(x);
} //---Add INPUT

/*end test4*/

/*start test5*/

$("#button").click(function() {
    $("#container3").animate({
        left: "71px"
    });
});
$("#button").dblclick(function() {
    $("#container3").animate({
        left: "230"
    });
});

/*end test5*/

/*start test6*/

$("#button").click(function() {
    $("#nav9").animate({
        left: "130px"
    });
});
$("#button").dblclick(function() {
    $("#nav9").animate({
        left: "300px"
    });
});

/*end test6*/

/*start test7*/

function toggleSidebar(ref) {
    document.getElementById("sidebar1").classList.toggle('active');
}

$(document).ready(function() {
    $("#sidebar").click(function() {
        $("#Description").toggle(300);
    });
});

$("#button").click(function() {
    $("#nav3").animate({
        left: "90px"
    });
});
$("#button").dblclick(function() {
    $("#nav3").animate({
        left: "250px"
    });
});

/*end test7*/

/*start test8*/

$("#button").click(function() {
    $("#nav8").animate({
        left: "230px"
    });
});
$("#button").dblclick(function() {
    $("#nav8").animate({
        left: "400px"
    });
});

/*end test8*/