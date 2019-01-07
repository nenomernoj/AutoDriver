baseUrl = 'http://app.autodriver.kz/';

function loaderOn() {
    $("#loader").addClass('showLoader');
}

function loaderOff() {
    $("#loader").removeClass('showLoader');
}

$(document).ready(function($) {
    $("#app").load("home.html");
});



