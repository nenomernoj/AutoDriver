if (!!localStorage.getItem('userName')) {
    $("#userName").html(localStorage.getItem('userName'));
}

$("#exit").click(function() {
    localStorage.clear();
    location.reload();
});


$(document).ready(function($) {
    loadMenu();
});


function loadMenu() {
    $("#workSpace").load("menu.html");
}

$("#toMenu").click(function() {
    switch (localStorage.getItem('indexMenu')) {
      case 'mainMenu':
      $("#workSpace").load("menu.html");
        break;
      case 'urokiMenu':
      $("#workSpace").load("uroki.html");
        break;
      default:
    }
});


$(".nonStat").click(function() {
    $(".nonStat,#nonStat").hide();
});

$("#goPromo").click(function(event) {
   $("#workSpace").load("promo.html");
   $(".nonStat,#nonStat").hide();
});
