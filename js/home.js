$("#showReg").click(function() {
    $.post(baseUrl + 'auth/city.php').done(function(data) {
        var citys=JSON.parse(data);
        citys.forEach(function(el){
             $("#city").append('<option value="'+el.id+'">'+el.city+'</option>');
        })
       
    })
});


function checkAuth() {
    if (!!localStorage.getItem('userName')) {
        $("#app").load('wrapper.html');
    }
}



function showLogin() {
    $("#mainForm,#regForm").hide();
    $("#loginForm,.back_arrow").show();
}

$("#showLogin").click(function() {
    showLogin();
});;

$("#showReg").click(function() {
    $("#mainForm,#loginForm,.back_arrow").hide();
    $("#regForm,.back_arrow").show();
});


$(".back_arrow").click(function() {
    $(".back_arrow,#regForm,#loginForm").hide();
    $("#mainForm").show();
});




$('#regForm').on('submit', function(e) {
    e.preventDefault();
    loaderOn();
    $("#message").html('');
    $.post(baseUrl + 'auth/register.php', $('#regForm').serialize()).done(function(data) {
        loaderOff();
        $("#message").html('');
        var result = JSON.parse(data);
        if (result.answer == false) {
            $("#message").html('<p class="error">' + result.message + '</p>');
        } else if (result.answer == true) {
            $("#message").html('<p class="success">' + result.message + '</p>');
            showLogin();
        }
    });
});



$('#loginForm').on('submit', function(e) {
    e.preventDefault();
    loaderOn();
    $("#message").html('');
    $.post(baseUrl + 'auth/login.php', $('#loginForm').serialize()).done(function(data) {
        loaderOff();
        $("#message").html('');
        var result = JSON.parse(data);
        if (result.answer == false) {
            $("#message").html('<p class="error">' + result.message + '</p>');
        } else if (result.answer == true) {
            $("#message").html('<p class="success">' + result.message + '</p>');
            localStorage.setItem('userName', result.userName);
            localStorage.setItem('userStatus', result.userStatus);
            localStorage.setItem('userId', result.userId);
            checkAuth();
        }
    });
});
checkAuth();