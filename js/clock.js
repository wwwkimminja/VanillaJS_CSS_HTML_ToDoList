const clock = document.querySelector(".clock__text");

function getClock(){
    const date = new Date();
    //*　1時の場合01に表示
    const hours = String(date.getHours()).padStart(2,"0");
    const mimutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${mimutes}:${seconds}`;
    
}
//*1秒（1000milliseconds）ごとgetClockを実施する。
setInterval(getClock,1000);

