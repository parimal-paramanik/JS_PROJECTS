
window.onload = function () {
    showTime()
}

function showTime() {
    var D = new Date();
    var H = D.getHours();
    var M = D.getMinutes();
    var S = D.getSeconds();
    
    var session = 'AM'
    if(H > 12){
        H = H-12;
    }
    session = (H >=12) ? "PM" :session
    H = (H < 10) ? ("0" + H) : H
    M = (M < 10) ? ("0" + M) : M
    S = (S < 10) ? ("0" + S) : S


    var time = H + " : " + M + " : " + S + "  " + " " + session;
    document.getElementsByTagName("h1")[0].innerText = time



    setTimeout(showTime, 1000)
}