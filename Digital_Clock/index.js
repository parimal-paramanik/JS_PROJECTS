
window.onload = function () {
    showTime()
}

function showTime() {
    var D = new Date();
    var H = D.getHours();
    var M = D.getMinutes();
    var S = D.getSeconds();

    
    var session = 'AM'
    H = (H < 10) ? ("0" + H) : H
    M = (M < 10) ? ("0" + M) : M
    S = (S < 10) ? ("0" + S) : S
    session = (H >=12) ? "PM" :session

    var time = H + " : " + M + " : " + S + "  " + " " + session;
    document.getElementsByTagName("h1")[0].innerText = time



    setTimeout(showTime, 1000)
}