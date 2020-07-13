locked = false;
function lockScreen() {
    /*1000 ms = 1 seg*/
    var timeout = 5000
    if (locked == true) {
        clearTimeout(lockscreen);
    }
    else {
        lockscreen = setTimeout(function () {
            $('#lockscreen').show();
            locked = true;
            clearTimeout(lockscreen);
        }, timeout);
    }
}
$(document).click(function () {
    clearTimeout(lockscreen);
    lockScreen();
});

$(document).mousemove(function () {
    clearTimeout(lockscreen);
    lockScreen();
});

lockScreen();
$('.lockscreen-btn').click(function () {
    var lck_senha = $('.lockscreen-password').val();
    if (lck_senha == "swordfish") {
        locked = false;
        $('.lockscreen-password').val("");
        $('#lockscreen').hide();
    }
});