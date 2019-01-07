$("#toMenu").hide();
$("#uroki").click(function(event) {
    $("#workSpace").load('uroki.html');
    $("#toMenu").show();
});

$("#test").click(function(event) {
    if (localStorage.getItem('userStatus') == 0) {
        $(".nonStat,#nonStat").show();
    } else if (localStorage.getItem('userStatus') > 0) {
        $("#workSpace").load('test.html');
        $("#toMenu").show();
    } else {
        alert('Ошибка');
    }

});

$("#contacts").click(function(event) {
    $("#workSpace").load('contacts.html');
    $("#toMenu").show();
});

document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
    $("#toMenu").click();
}