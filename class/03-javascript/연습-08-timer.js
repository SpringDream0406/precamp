// let time = 10

// // undefined
// setInterval(function() {
//     if(time >= 0) {
//         console.log(time)
//         time -= 1
//     }
// },1000)
// // 4
// VM82:3 10
// VM82:3 9
// VM82:3 8
// VM82:3 7
// VM82:3 6
// VM82:3 5
// VM82:3 4
// VM82:3 3
// VM82:3 2
// VM82:3 1
// VM82:3 0

let time = 180;

setInterval(function () {
  if (time >= 0) {
    let min = Math.floor(time / 60);
    let sec = String(time % 60).padStart(2, "0");
    console.log(min + ":" + sec);
    time -= 1;
  }
}, 1000);
