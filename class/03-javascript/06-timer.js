let isStarted = false;

let auth = () => {
  if (isStarted === false) {
    isStarted = true;
    document.getElementById("finish").disabled = false;

    let time = 10;
    let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("target").innerHTML = token;

    let timer;

    timer = setInterval(() => {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("timer").innerHTML = `${min}:${sec}`;
        time -= 1;
      } else {
        document.getElementById("finish").disabled = true;
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000);
  }
};
