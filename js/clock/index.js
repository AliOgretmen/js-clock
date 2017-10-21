let seconddisplay = 0;
let minutedisplay = 0;
let hourdisplay = 0;
setInterval(timeSeter, 1000);

function timeSeter() {
    seconddisplay += 1;
    if ((seconddisplay % 60) == 0) {
        minutedisplay += 1;
        seconddisplay = 0;
        if ((minutedisplay % 60) == 0) {
            hourdisplay += 1;
            minutedisplay = 0;
            if ((hourdisplay % 24) == 0) {
                hourdisplay = 0;
            }
        }
    }
    let strSec = new String(seconddisplay).padStart(2,"0");
    let strMin = new String(minutedisplay).padStart(2,"0");
    let strHour = new String(hourdisplay).padStart(2,"0");
    $(".second").text(strSec);
    $(".minute").text(strMin);
    $(".hour").text(strHour);
    $(".part").toggle()
}