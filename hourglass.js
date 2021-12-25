let time = 0;
let timer;
let sand1;
let sand = prompt("Введите количество секунд");
// if (sand >= 0) {
//     if (sand > time) {
//         sand -= time;
//     }
//     else if (sand < time) {
//         time -= sand;
//         sand = time;
//     }
//     else if (sand == time) {
//         sand = 0;
//     }
// }
// else if (sand < 0) {
//     sand = "Секунды не могут принимать отрицательные значения!"
// }
// else {
//     sand = "Error!";
// }
// console.log(sand);

function restart() {
    sand = prompt("Введите количество секунд");
    time = 0;
    timer = setTimeout(countdown, 1000);
}

function countdown() {

    sand--;
    time++;
    if (sand > 0) {
        timer = setTimeout(countdown, 1000);
        document.getElementById("timer").innerHTML = time;
    }
    else {
        document.getElementById("timer").innerHTML = "Ваше время истекло";
        clearTimeout(timer);
    }
}
countdown();

