locked = false;
function lockScreen() {
    if (locked == true) {
        clearTimeout(lockscreen);
    }
    else {
        lockscreen = setTimeout(function () {
            triggerToggle = document.getElementById("lockscreen");
            triggerToggle.style.display = 'initial';
            locked = true;
            clearTimeout(lockscreen);
        }, 5000);
    }
}
document.onclick = triggerLockByClick;
function triggerLockByClick() {
    clearTimeout(lockscreen);
    lockScreen();
}
document.onmousemove = triggerLockByMove;
function triggerLockByMove() {
    clearTimeout(lockscreen);
    lockScreen();
};
document.querySelector('.lockscreen-btn').onclick = unlock;
function unlock() {
    lck_senha = document.getElementsByClassName('lockscreen-password')[0].value;
    if (lck_senha == "swordfish") {
        document.getElementsByClassName('lockscreen-password').value = "";
        triggerToggle.style.display = 'none';
        locked = false;
    }
}
lockScreen();